import React from 'react';
import styles from './cta.module.scss';
import GradientBtn from '../GradientButton/button'

export default function Card({ title, span, description, gradientBtn, whiteBtn }) {
    return (
        <>
            <div className={styles.wrapper}>        {/* ← clips bottom only */}
                <div className={styles.container}>
                    <div className={styles.glow} />
                    <div className={styles.h1}>{title} <span className={styles.span}>{span}</span><img className={styles.star} src="/Assets/star.png" alt="" /></div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.btncontainer}>
                        {gradientBtn && <GradientBtn text={gradientBtn} hasArrow='true' color={'gradient'} />}
                        {whiteBtn && <GradientBtn text={whiteBtn} color={'white'} />}
                    </div>
                </div>
            </div>
        </>
    );
}