import React from 'react';
import styles from './Hero.module.scss';
import HollowBadge from '../HollowBadge/HollowBadge';
import SolidBtn from '../SolidButton/SolidBTN';

const Hero = ({ HeroData }) => {
  return (
    <>
      <div className={styles.heroWrp}>
        <div className={styles.backgroundElement}>
          <img
            src="/Assets/Rectangle 9529.png"
            alt="Background"
            loading="eager"
          />
        </div>
        <div className={styles.backgroundElement2}>
          <img
            src="/Assets/Rectangle 9530.png"
            alt="Background"
            loading="eager"
          />
        </div>
        <div className={styles.heroContent}>
          <HollowBadge name={HeroData.badge} color="#E9ECEF" />
          <h1 className={styles.heroH1}>{HeroData.title} <span style={{ fontWeight: '300', fontStyle: 'italic' }}>{HeroData.italicTitle}</span></h1>
          <p className={styles.heroP} dangerouslySetInnerHTML={{ __html: HeroData.content }}></p>
          {HeroData.button && (
            <SolidBtn style={{ marginTop: '24px' }} name={HeroData.button} color="#1C2D80" />
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
