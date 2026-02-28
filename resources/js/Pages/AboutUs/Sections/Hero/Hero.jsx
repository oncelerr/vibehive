import React from 'react';
import styles from './Hero.module.scss';
import Badge from '../../../../components/Badge/badge';

const Hero = () => {

  return (
    <>
      <div className={styles.container}>
        <Badge text={"ABOUT US"} />
        <div className={styles.h1}>A Small Team <br />Doing <span className={styles.span}>Big Work</span></div>
        <div className={styles.team}>
          <img src="/Assets/Group.png" alt="" />
          <div className={styles.text}>
            <div className={styles.vr}/>
            <p className={styles.p}>
              Vibe Hive Digital Services is a growth-focused digital studio based in the Philippines, serving ambitious brands across Asia and beyond.
              <br /><br />
              We are not a massive agency with layers of account managers and endless meetings. We are a specialized team of strategists, designers, and developers who believe that digital success comes from three things: clarity, conversion, and consistency.Every project we take on follows the same principle. If it does not improve clarity, conversion, or consistency, we do not do it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;