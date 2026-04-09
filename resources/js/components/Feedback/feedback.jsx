import React, { useState } from 'react';
import styles from './Feedback.module.scss';

export default function Feedback({ comment, name, company }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`${styles.feedback} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img className={styles.quote} src="/Assets/quote.png" alt="" />
            <div className={styles.commentRow}>
                <div className={styles.bar} />
                <div className={styles.comment}>"{comment}"</div>
            </div>
            <div className={styles.name}>{name}</div>
            <div className={styles.company}>{company}</div>
        </div>
    );
}