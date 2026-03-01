import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavLogo from "../../../../public/Assets/Logo.svg?react";
import styles from "./styles.module.scss"
import { routeStore } from '../../contexts/routeStore';

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
    routeStore.destination = path; // ← set destination first
    navigate(path);
  };
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">

            {/* Displacement - distorts what's behind */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />

            {/* Chromatic Aberration - split RGB channels */}
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              in="displaced"
              result="red"
            />
            <feOffset dx="-2" dy="0" in="red" result="red-shifted" />

            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              in="displaced"
              result="green"
            />

            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              in="displaced"
              result="blue"
            />
            <feOffset dx="2" dy="0" in="blue" result="blue-shifted" />

            {/* Merge channels back */}
            <feBlend in="red-shifted" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue-shifted" mode="screen" result="final" />

          </filter>
        </defs>
      </svg>

      <ScrollToTop />
      <div className={styles['nav-wrapper']}>
        <div className={styles['nav-backdrop']} />
        <NavLogo className={styles['nav-logo']} />

        {/* Desktop Navigation */}
        <div className={`${styles['nav-links']} ${styles['desktop-nav']}`}>
          <a onClick={() => handleNavClick('/')}>Home</a>
          <a onClick={() => handleNavClick('/about')}>About</a>
          <a onClick={() => handleNavClick('/our-works')}>Our Works</a>
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