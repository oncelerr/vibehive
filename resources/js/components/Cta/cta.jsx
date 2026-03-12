import React, { useState } from 'react';
import styles from './cta.module.scss';
import GradientBtn from '../GradientButton/button';

export default function Card({ title, span, description, gradientBtn, whiteBtn }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div className={styles.glow} />
        <div
          className={styles.h1}
          style={{
            transition: 'letter-spacing 0.3s ease',
            letterSpacing: hovered ? '0.5px' : '0px',
          }}
        >
          {title}{' '}
          <span className={styles.span}>{span}</span>
          <img className={styles.star} src="/Assets/star.png" alt=""
            style={{
              transition: 'transform 0.4s ease',
              transform: hovered ? 'rotate(20deg) scale(1.15)' : 'rotate(0deg) scale(1)',
            }}
          />
        </div>
        <div
          className={styles.description}
          style={{
            transition: 'color 0.3s ease',
            color: hovered ? 'rgba(255,255,255,0.9)' : '',
          }}
        >
          {description}
        </div>
        <div className={styles.btncontainer}>
          {gradientBtn && <GradientBtn text={gradientBtn} hasArrow="true" color="gradient" />}
          {whiteBtn && <GradientBtn text={whiteBtn} color="white" />}
        </div>
      </div>
    </div>
  );
}