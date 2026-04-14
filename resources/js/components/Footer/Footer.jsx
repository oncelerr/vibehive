import React from 'react';
import styles from './Footer.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { routeStore } from '../../contexts/routeStore';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return null;
}

const SocialIcon = ({ src, alt, url }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<img
			src={src}
			alt={alt}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				cursor: 'pointer',
				transition: 'transform 0.25s ease, opacity 0.25s ease',
				transform: hovered ? 'translateY(-3px) scale(1.15)' : 'translateY(0) scale(1)',
				opacity: hovered ? 1 : 0.7,
			}}
			onClick={() => window.open(url, '_blank')}
		/>
	);
};

const NavLink = ({ label, onClick }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<span
			onClick={onClick}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				color: hovered ? '#C836F2' : 'white',
				fontFamily: 'Outfit',
				fontSize: '16px',
				fontWeight: '300',
				cursor: 'pointer',
				transition: 'color 0.25s ease',
			}}
		>
			{label}
		</span>
	);
};

const Footer = () => {
	const navigate = useNavigate();

	const handleNavClick = (path) => {
		routeStore.destination = path; // ← set destination first
		navigate(path);
	};

	return (
		<>
			<ScrollToTop />
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.logo}>
						<img src="/Assets/vibehive.png" alt="" />
						<p>Where Big Ideas Find Their <span>Digital Vibe</span></p>
					</div>
					<div className={styles.links_mobile}>   {/* new wrapper — see below */}
						<NavLink label="Home" onClick={() => handleNavClick('/')} />
						<NavLink label="About" onClick={() => handleNavClick('/about')} />
						<NavLink label="Portfolio" onClick={() => handleNavClick('/our-works')} />
						<NavLink label="Contact" onClick={() => handleNavClick('/contact')} />
					</div>
					<div className={styles.right}>
						<div className={styles.rightitem}>
							<img src="/Assets/mail.png" alt="" />
							<p>itsthevibehive@gmail.com</p>
						</div>
						<div className={styles.rightitem}>
							<img src="/Assets/phone.png" alt="" />
							<p>(+63) 921 892 7264</p>
						</div>
						<div className={styles.rightlinks}>
							<SocialIcon src="/Assets/fb.png" alt="Facebook" url="https://www.facebook.com/itsvibehive" />
							<SocialIcon src="/Assets/insta.png" alt="Instagram" url="https://www.instagram.com/vibehiveph" />
							<SocialIcon src="/Assets/linkedin.png" alt="LinkedIn" url="https://www.linkedin.com/company/vibe-hive-ph/" />
							<SocialIcon src="/Assets/ball.png" alt="Dribbble" url="https://dribbble.com/vibe-hive" />
						</div>
					</div>
				</div>
				<div className={styles.hr} />
				<div className={styles.bottom}>
					<div className={styles.links}>
						<NavLink label="Home" onClick={() => handleNavClick('/')} />
						<NavLink label="About" onClick={() => handleNavClick('/about')} />
						{/* <NavLink label="Services" onClick={() => handleNavClick('/our-works')} /> */}
						<NavLink label="Portfolio" onClick={() => handleNavClick('/our-works')} />
						<NavLink label="Contact" onClick={() => handleNavClick('/contact')} />
					</div>
					<div className={styles.copyright}>
						© 2025 ItsVibeHive - All Right Reserved
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;