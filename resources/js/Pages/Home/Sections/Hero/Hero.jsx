import React, { useState, useEffect } from 'react';
import styles from './Hero.module.scss';
import Button from '../../../../components/GradientButton/button';

const Hero = () => {

  return (
    <>
      <div className={styles.heroWrp}>
        <h1 className={styles.heroH1}>Where Big Ideas <br /> Find Their <span className={styles.heroH1Span}>Digital Vibe</span></h1>
        <p className={styles.heroP}>We build conversion-focused websites for growing <br />businesses. Strategy-led. Built to grow with you.</p>
        <div className={styles.heroBtnWrp}>
          <Button text="Apply for a Free Discovery Call" color="gradient" hasArrow="true" />
          <Button text="See Our Work" color="white" />
        </div>
        <div className={styles.heroWorksWrp}>
          <div className={styles.heroWorksItem}>
            <h3>50+</h3>
            <p style={{ fontWeight: '200', fontSize: '18px' }}>Websites Launched</p>
          </div>
          <div className={styles.heroWorksItem}>
            <h3>6-week</h3>
            <p style={{ fontWeight: '200', fontSize: '18px' }}>Average delivery time</p>
          </div>
          <div className={styles.heroWorksItem}>
            <h3>90+ Pages</h3>
            <p style={{ fontWeight: '200', fontSize: '18px' }}>Speed scores</p>
          </div>
          <div className={styles.heroWorksItem}>
            <h3>8 countries</h3>
            <p style={{ fontWeight: '200', fontSize: '18px' }}>Served and counting</p>
          </div>
        </div>
        <div className={styles.transitionWrp}>
          <h1 className={styles.transitionH1}>The missing piece? A system that <br /> works as hard <span className={styles.transitionH1Span}>as you do.</span></h1>
          <p className={styles.transitionP}>You know your business has potential, but your website isn't translating that into results. <br /><br />You've invested in marketing, but without a solid digital foundation, growth feels harder than it should. You're ready for clarity and consistency, the kind that turns visitors into customers. </p>
        </div>
      </div>
    </>
  );
};

export default Hero;