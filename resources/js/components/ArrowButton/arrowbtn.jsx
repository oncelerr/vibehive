import React, { useState } from 'react';
import styles from './ArrowButton.module.scss';

export default function ArrowButton({ position, func, className }) {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            className={`${styles.arrowBtn} ${styles[position]} ${hovered ? styles.hovered : ''} ${className || ''}`}
            onClick={func}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={`/Assets/${position}arrow.png`} alt={`${position} arrow`} />
        </button>
    );
}