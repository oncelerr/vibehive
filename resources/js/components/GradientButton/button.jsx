import React, { useState } from 'react';
import styles from './button.module.css';
import arrowWhite from '../../../../public/Assets/arrow.png';
import arrowBlack from '../../../../public/Assets/arrow-black.png';

const Button = ({ text, color, hasArrow, func }) => {
  const [hovered, setHovered] = useState(false);

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

  const getHoverStyle = () => {
    if (color === 'white') {
      return {
        backgroundColor: hovered ? '#f0f0f0' : 'white',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 6px 20px rgba(0,0,0,0.12)' : 'none',
      };
    }
    return {
      opacity: hovered ? 0.88 : 1,
      transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hovered ? '0 6px 24px rgba(177, 35, 253, 0.4)' : 'none',
    };
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${getColorClass()}`}
        onClick={func}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
          ...getHoverStyle(),
        }}
      >
        {text}
        {hasArrow && (
          <img
            src={getArrow()}
            alt="arrow"
            className={styles.arrow}
            style={{
              transition: 'transform 0.25s ease',
              transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            }}
          />
        )}
      </button>
    </div>
  );
};

export default Button;