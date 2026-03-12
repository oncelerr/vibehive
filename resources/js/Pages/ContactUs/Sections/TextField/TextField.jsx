import React, { useState } from "react";
import styles from "./TextField.module.scss";

const TextField = () => {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
		name: "",
		email: "",
		company: "",
		website: "",
		industry: "",
		challenge: "",
		budget: "",
		timeline: "",
		hearAbout: "",
		referrer: "",
	});
	const [errors, setErrors] = useState({});
	const [focusedField, setFocusedField] = useState(null);
	const [btnHovered, setBtnHovered] = useState(false);
	const [dotHovered, setDotHovered] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const validateStep = () => {
		const newErrors = {};
		if (step === 1) {
			if (!form.name.trim()) newErrors.name = "Your name is required";
			if (!form.email.trim()) {
				newErrors.email = "Email address is required";
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
				newErrors.email = "Enter a valid email address";
			}
			if (!form.company.trim()) newErrors.company = "Company or brand name is required";
			if (!form.website.trim()) newErrors.website = "Website URL is required";
			if (!form.industry.trim()) newErrors.industry = "Industry is required";
		}
		if (step === 2) {
			if (!form.challenge.trim()) newErrors.challenge = "Please tell us about your challenge";
			if (!form.budget) newErrors.budget = "Please select your budget range";
			if (!form.timeline) newErrors.timeline = "Please select your timeline";
		}
		if (step === 3) {
			if (!form.hearAbout) newErrors.hearAbout = "Please select an option";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleNext = () => { if (validateStep()) setStep((prev) => prev + 1); };
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateStep()) return;

		try {
			const response = await fetch('/api/applications', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json', // 👈 this forces Laravel to return JSON errors
				},
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					company: form.company,
					website: form.website || null,
					industry: form.industry,
					challenge: form.challenge,
					budget: form.budget,
					timeline: form.timeline,
					hear_about: form.hearAbout,
					referrer: form.referrer || null,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				console.log('Submitted:', data);
				// redirect or show success
			} else {
				console.error('Validation errors:', data.errors);
			}
		} catch (err) {
			console.error('Submission error:', err);
		}
	};

	const inputStyle = (name) => ({
		transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
		borderColor: errors[name] ? '#ff4d4d' : focusedField === name ? '#B123FD' : 'rgba(255,255,255,0.1)',
		boxShadow: focusedField === name ? '0 0 0 3px rgba(177, 35, 253, 0.15)' : 'none',
		backgroundColor: focusedField === name ? '#1A2147' : '',
	});

	const fieldProps = (name) => ({
		onFocus: () => setFocusedField(name),
		onBlur: () => setFocusedField(null),
		style: inputStyle(name),
	});

	return (
		<section className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.inner}>
					<p className={styles.topText}>
						Fill out this quick application. If there is a fit, we will send you a link
						to book a free 30-minute discovery call with our team.
					</p>
					<p className={styles.bottomNote}>
						We review every application within <strong>48 hours.</strong>
					</p>

					<form onSubmit={handleSubmit}>
						<div className={styles.grid}>
							{step === 1 && (
								<>
									<div className={styles.field}>
										<label className={styles.label}>Your Name</label>
										<input type="text" name="name" className={styles.input} placeholder="Enter your name" value={form.name} onChange={handleChange} {...fieldProps('name')} />
										{errors.name && <span className={styles.error}>{errors.name}</span>}
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Email Address</label>
										<input type="email" name="email" className={styles.input} placeholder="Enter your email address" value={form.email} onChange={handleChange} {...fieldProps('email')} />
										{errors.email && <span className={styles.error}>{errors.email}</span>}
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Company or Brand Name</label>
										<input type="text" name="company" className={styles.input} placeholder="Enter your brand name" value={form.company} onChange={handleChange} {...fieldProps('company')} />
										{errors.company && <span className={styles.error}>{errors.company}</span>}
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Your Website URL</label>
										<input type="text" name="website" className={styles.input} placeholder="website.com" value={form.website} onChange={handleChange} {...fieldProps('website')} />
										{errors.website && <span className={styles.error}>{errors.website}</span>}
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Industry</label>
										<input type="text" name="industry" className={styles.input} placeholder="Enter your industry" value={form.industry} onChange={handleChange} {...fieldProps('industry')} />
										{errors.industry && <span className={styles.error}>{errors.industry}</span>}
									</div>
								</>
							)}

							{step === 2 && (
								<>
									<div className={styles.field}>
										<label className={styles.label}>What is your biggest challenge right now?</label>
										<textarea name="challenge" className={styles.textarea} placeholder="Tell us about your current digital situation and what you are hoping to achieve." value={form.challenge} onChange={handleChange} {...fieldProps('challenge')} />
										{errors.challenge && <span className={styles.error}>{errors.challenge}</span>}
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Estimated Budget Range</label>
										<select name="budget" className={styles.select} value={form.budget} onChange={handleChange} {...fieldProps('budget')}>
											<option value="">Select range</option>
											<option value="Under $2,700 USD">Under $2,700 USD</option>
											<option value="$2,700 - $4,500 USD">$2,700 - $4,500 USD</option>
											<option value="$4,500 - $7,200 USD">$4,500 - $7,200 USD</option>
											<option value="$7,200+ USD">$7,200+ USD</option>
											<option value="Not sure yet">Not sure yet</option>
										</select>
										{errors.budget && <span className={styles.error}>{errors.budget}</span>}
									</div>
									<div className={styles.field}>
										<label className={styles.label}>How soon do you need this?</label>
										<select name="timeline" className={styles.select} value={form.timeline} onChange={handleChange} {...fieldProps('timeline')}>
											<option value="">Select option</option>
											<option value="ASAP - we need to move fast">ASAP - we need to move fast</option>
											<option value="Within 1-2 months">Within 1-2 months</option>
											<option value="3+ months out">3+ months out</option>
											<option value="Just exploring options for now">Just exploring options for now</option>
										</select>
										{errors.timeline && <span className={styles.error}>{errors.timeline}</span>}
									</div>
								</>
							)}

							{step === 3 && (
								<>
									<div className={styles.field}>
										<label className={styles.label}>How did you hear about us?</label>
										<select name="hearAbout" className={styles.select} value={form.hearAbout} onChange={handleChange} {...fieldProps('hearAbout')}>
											<option value="">Select option</option>
											<option value="Google">Google</option>
											<option value="Facebook">Facebook</option>
											<option value="Instagram">Instagram</option>
											<option value="Referral">Referral</option>
											<option value="Other">Other</option>
										</select>
										{errors.hearAbout && <span className={styles.error}>{errors.hearAbout}</span>}
									</div>
									{form.hearAbout === 'Referral' && (
										<div className={styles.field}>
											<label className={styles.label}>If Referral, stated who:</label>
											<input type="text" name="referrer" className={styles.input} placeholder="Enter referrer's name" value={form.referrer || ''} onChange={handleChange} {...fieldProps('referrer')} />
										</div>
									)}
								</>
							)}
						</div>

						<div className={styles.progressWrap}>
							{[1, 2, 3].map((s) => (
								<span
									key={s}
									onMouseEnter={() => setDotHovered(s)}
									onMouseLeave={() => setDotHovered(null)}
									className={step === s ? styles.activeDot : styles.dot}
									style={{
										transition: 'transform 0.2s ease, box-shadow 0.2s ease',
										transform: dotHovered === s && step !== s ? 'scale(1.3)' : 'scale(1)',
										boxShadow: step === s ? '0 0 8px rgba(177, 35, 253, 0.6)' : 'none',
										cursor: 'default',
									}}
								/>
							))}
						</div>

						<div className={`${styles.TextFieldBtnWrp} ${step > 1 ? styles.withBack : ""}`}>
							{step < 3 ? (
								<button
									type="button"
									className={styles.submitBtn}
									onClick={handleNext}
									onMouseEnter={() => setBtnHovered(true)}
									onMouseLeave={() => setBtnHovered(false)}
									style={{
										transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
										opacity: btnHovered ? 0.88 : 1,
										transform: btnHovered ? 'translateY(-2px)' : 'translateY(0)',
										boxShadow: btnHovered ? '0 6px 24px rgba(177, 35, 253, 0.4)' : 'none',
									}}
								>
									Next <span className={styles.arrow} style={{ transition: 'transform 0.25s ease', display: 'inline-block', transform: btnHovered ? 'translateX(4px)' : 'translateX(0)' }}>→</span>
								</button>
							) : (
								<button
									type="submit"
									className={styles.submitBtn}
									onMouseEnter={() => setBtnHovered(true)}
									onMouseLeave={() => setBtnHovered(false)}
									style={{
										transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
										opacity: btnHovered ? 0.88 : 1,
										transform: btnHovered ? 'translateY(-2px)' : 'translateY(0)',
										boxShadow: btnHovered ? '0 6px 24px rgba(177, 35, 253, 0.4)' : 'none',
									}}
								>
									Submit Application <span className={styles.arrow} style={{ transition: 'transform 0.25s ease', display: 'inline-block', transform: btnHovered ? 'translate(3px, -3px)' : 'translate(0,0)' }}>↗</span>
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default TextField;