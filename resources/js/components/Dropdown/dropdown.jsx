import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

export default function Dropdown({ text, desc }) {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const cls = [
        styles.dropdown,
        hovered ? styles.hovered : '',
        open ? styles.open : '',
    ].join(' ');

    return (
        <div
            className={cls}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.header} onClick={() => setOpen(!open)}>
                <span className={styles.text}>{text}</span>
                <div className={styles.chevron}>
                    <img src="/Assets/chevrondown.png" alt="" />
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.bodyInner}>
                    <hr className={styles.hr} />
                    <p className={styles.desc}>{desc}</p>
                </div>
            </div>
        </div>
    );
}