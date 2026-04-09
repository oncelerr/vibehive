import React, { useState } from 'react';
import styles from './Card.module.scss';

export default function Card({ img, text, description }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`${styles.card} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img className={styles.cardImg} src={img} alt="" />
            <div className={styles.cardText}>{text}</div>
            <div className={styles.cardDescription}>{description}</div>
        </div>
    );
}