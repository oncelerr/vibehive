import React, { useState, useEffect } from 'react';
import styles from './button.module.css';
import arrowWhite from '../../../../public/Assets/arrow.png';
import arrowBlack from '../../../../public/Assets/arrow-black.png';

const Button = ({ text, color, hasArrow, func }) => {
  const getColorClass = () => {
    switch (color) {
      case 'white':
        return styles.white;
      case 'gradient':
      default:
        return styles.gradient;
    }
  };

  const getArrow = () => {
    switch (color) {
      case 'white':
        return arrowBlack;
      default:
        return arrowWhite;
    }
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${getColorClass()}`} onClick={func}>
          {text}
          {hasArrow && <img src={getArrow()} alt="arrow" className={styles.arrow} />}
        </button>
      </div>
    </>
  );
};

export default Button;