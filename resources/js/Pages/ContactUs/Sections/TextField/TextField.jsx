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
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
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

    const handleNext = () => {
        if (validateStep()) {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateStep()) return;

        console.log("Submitted form:", form);

        // submit here
        // example:
        // fetch("/api/submit", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(form),
        // });
    };

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
                                        <input
                                            type="text"
                                            name="name"
                                            className={styles.input}
                                            placeholder="Enter your name"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className={styles.input}
                                            placeholder="Enter your email address"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Company or Brand Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            className={styles.input}
                                            placeholder="Enter your brand name"
                                            value={form.company}
                                            onChange={handleChange}
                                        />
                                        {errors.company && <span className={styles.error}>{errors.company}</span>}
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Your Website URL</label>
                                        <input
                                            type="text"
                                            name="website"
                                            className={styles.input}
                                            placeholder="website.com"
                                            value={form.website}
                                            onChange={handleChange}
                                        />
                                        {errors.website && <span className={styles.error}>{errors.website}</span>}
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Industry</label>
                                        <input
                                            type="text"
                                            name="industry"
                                            className={styles.input}
                                            placeholder="Enter your industry"
                                            value={form.industry}
                                            onChange={handleChange}
                                        />
                                        {errors.industry && <span className={styles.error}>{errors.industry}</span>}
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div className={styles.field}>
                                        <label className={styles.label}>What is your biggest challenge right now?</label>
                                        <textarea
                                            name="challenge"
                                            className={styles.textarea}
                                            placeholder="Tell us about your current digital situation and what you are hoping to achieve."
                                            value={form.challenge}
                                            onChange={handleChange}
                                        />
                                        {errors.challenge && <span className={styles.error}>{errors.challenge}</span>}
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>Estimated Budget Range</label>
                                        <select
                                            name="budget"
                                            className={styles.select}
                                            value={form.budget}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select range</option>
                                            <option value="$1k - $5k">$1k - $5k</option>
                                            <option value="$5k - $10k">$5k - $10k</option>
                                            <option value="$10k - $20k">$10k - $20k</option>
                                            <option value="$20k+">$20k+</option>
                                        </select>
                                        {errors.budget && <span className={styles.error}>{errors.budget}</span>}
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>How soon do you need this?</label>
                                        <select
                                            name="timeline"
                                            className={styles.select}
                                            value={form.timeline}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select option</option>
                                            <option value="ASAP">ASAP</option>
                                            <option value="Within 1 month">Within 1 month</option>
                                            <option value="2–3 months">2–3 months</option>
                                            <option value="Just exploring">Just exploring</option>
                                        </select>
                                        {errors.timeline && <span className={styles.error}>{errors.timeline}</span>}
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <div className={styles.field}>
                                        <label className={styles.label}>How did you hear about us?</label>
                                        <select
                                            name="hearAbout"
                                            className={styles.select}
                                            value={form.hearAbout}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select option</option>
                                            <option value="Google">Google</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Referral">Referral</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.hearAbout && <span className={styles.error}>{errors.hearAbout}</span>}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className={styles.progressWrap}>
                            <span className={step === 1 ? styles.activeDot : styles.dot}></span>
                            <span className={step === 2 ? styles.activeDot : styles.dot}></span>
                            <span className={step === 3 ? styles.activeDot : styles.dot}></span>
                        </div>

                        <div className={`${styles.TextFieldBtnWrp} ${step > 1 ? styles.withBack : ""}`}>
                            {/* {step > 1 && (
                                <button
                                    type="button"
                                    className={styles.backBtn}
                                    onClick={handleBack}
                                >
                                    Back
                                </button>
                            )} */}

                            {step < 3 ? (
                                <button
                                    type="button"
                                    className={styles.submitBtn}
                                    onClick={handleNext}
                                >
                                    Next <span className={styles.arrow}>→</span>
                                </button>
                            ) : (
                                <button type="submit" className={styles.submitBtn}>
                                    Submit Application <span className={styles.arrow}>↗</span>
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