import React, { useState } from 'react';
import styles from './MemberCard.module.scss';

export default function MemberCard({ name, role, description, link }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`${styles.card} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.name}>{name}</div>
            <div className={styles.role}>{role}</div>
            <div className={styles.description}>{description}</div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img className={styles.linkedin} src="/Assets/reverselinkedin.png" alt="LinkedIn" />
            </a>
        </div>
    );
}