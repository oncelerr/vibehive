import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import Badge from '../../../../components/Badge/badge';
import { runAboutHeroAnimations } from './aboutHeroAnimations';

const Hero = () => {
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = runAboutHeroAnimations({ badgeRef, h1Ref, teamRef });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.containerGradientDesign} src="/Assets/aboutgradient.png" alt="" />
      <img className={styles.containerGradientDesign1} src="/Assets/aboutgradient1.png" alt="" />
      <div ref={badgeRef} style={{ opacity: 0 }}>
        <Badge text="ABOUT US" />
      </div>
      <div ref={h1Ref} className={styles.h1} style={{ opacity: 0 }}>
        A Small Team <br />Doing <span className={styles.span}>Big Work</span>
      </div>
      <div ref={teamRef} className={styles.team} style={{ opacity: 0 }}>
        <img src="/Assets/group.png" alt="" />
        <div className={styles.text}>
          <div className={styles.vr} />
          <p className={styles.p}>
            Vibe Hive Digital Services is a growth-focused digital studio based in the Philippines, serving ambitious brands across Asia and beyond.
            <br /><br />
            We are not a massive agency with layers of account managers and endless meetings. We are a specialized team of strategists, designers, and developers who believe that digital success comes from three things: clarity, conversion, and consistency. Every project we take on follows the same principle. If it does not improve clarity, conversion, or consistency, we do not do it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;