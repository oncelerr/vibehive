import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import Badge from '../../../../components/Badge/badge';
import { runPortfolioHeroAnimations } from './portfolioHeroAnimations';

const Hero = () => {
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const ctx = runPortfolioHeroAnimations({ badgeRef, h1Ref, pRef });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.containerGradientDesign} src="/Assets/aboutgradient.png" alt="" />
      <div ref={badgeRef} style={{ opacity: 0, zIndex: 1 }}>
        <Badge text="Our Works" style={{ zIndex: '1' }} />
      </div>
      <div ref={h1Ref} className={styles.h1} style={{ opacity: 0 }}>
        Systems We <span className={styles.span}>Have Built</span>
      </div>
      <p ref={pRef} className={styles.p} style={{ opacity: 0 }}>
        We do not just design and develop. We solve business problems through digital systems. Here is what that looks like in practice.
      </p>
    </div>
  );
};

export default Hero;