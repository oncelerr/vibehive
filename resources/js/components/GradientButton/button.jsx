import React, { useState, useEffect } from 'react';
import styles from './button.module.css';
import arrow from '../../../../public/Assets/arrow.png'

const Button = ({ text, color, hasArrow}) => {
  const getColorClass = () => {
    switch (color) {
      case 'white':
        return styles.white;
      case 'gradient':
      default:
        return styles.gradient;
    }
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${getColorClass()}`}>
          {text}
          {hasArrow && <img src={arrow} alt="arrow" className={styles.arrow} />}
        </button>
      </div>
    </>
  );
};

export default Button;