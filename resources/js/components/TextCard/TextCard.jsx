import React, { useState } from 'react';
import styles from './TextCard.module.scss';

export default function Card({ text, description }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`${styles.card} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.cardText}>{text}</div>
            <div className={styles.cardDescription}>{description}</div>
        </div>
    );
}