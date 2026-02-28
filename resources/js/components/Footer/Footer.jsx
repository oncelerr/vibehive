import React from 'react';
import styles from './Footer.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}, [pathname]);

	return null;
}

const Footer = () => {
	const navigate = useNavigate();
	const handleNavClick = (path) => {
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
					<div className={styles.right}>
						<div className={styles.rightitem}>
							<img src="/Assets/mail.png" alt="" />
							<p>itsvibehive@gmail.com</p>
						</div>
						<div className={styles.rightitem}>
							<img src="/Assets/phone.png" alt="" />
							<p>(001) 1231 3435</p>
						</div>
						<div className={styles.rightlinks}>
							<img src="/Assets/fb.png" alt="" />
							<img src="/Assets/insta.png" alt="" />
							<img src="/Assets/linkedin.png" alt="" />
							<img src="/Assets/ball.png" alt="" />
						</div>
					</div>
				</div>
				<div className={styles.hr}/>
				<div className={styles.bottom}>
					<div className={styles.links}>
						<a onClick={() => handleNavClick('/')}>Home</a>
						<a onClick={() => handleNavClick('/about')}>About</a>
						<a onClick={() => handleNavClick('/services')}>Services</a>
						<a onClick={() => handleNavClick('/portfolio')}>Portfolio</a>
						<a onClick={() => handleNavClick('/contact')}>Contact</a>
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