import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavLogo from "../../../../public/Assets/Logo.svg?react";
import styles from "./styles.module.scss"

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

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <ScrollToTop />
      <div className={styles['nav-wrapper']}>
        <NavLogo className={styles['nav-logo']} />
        
        {/* Desktop Navigation */}
        <div className={`${styles['nav-links']} ${styles['desktop-nav']}`}>
          <a onClick={() => handleNavClick('/')}>Home</a>
          <a onClick={() => handleNavClick('/about')}>About</a>
          <a onClick={() => handleNavClick('/services')}>Services</a>
          <a onClick={() => handleNavClick('/contact')}>Contact Us</a>
        </div>

        <button className={styles['connect-btn']}>Let's Connect</button>

        <button 
          className={styles['hamburger-btn']} 
          onClick={toggleMenu}
          aria-label="Toggle menu" 
        >
        </button>
      </div>
    </>
  )
}

export default Navbar