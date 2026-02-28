import React from 'react';
import styles from './WhyBrandChoseUs.module.scss';
import TextCard from '../../../../components/TextCard/TextCard'

const WhyBrandChoseUs = () => {

  return (
    <>
      <div className={styles.whyBrandChoseUsContainer}>
        <div className={styles.h3}>Why Brands <span className={styles.span}>Choose Us</span></div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            <TextCard text="Systems, Not Services" description="We do not sell you a website and walk away. We build complete digital foundations where every piece works together." />
            <TextCard text="Quality Gates at Every Step" description="Nothing goes live without internal review. No surprises, no half-finished work, no excuses." />
          </div>
          <div className={styles.card}>
            <TextCard text="Systems, Not Services" description="We do not sell you a website and walk away. We build complete digital foundations where every piece works together." />
            <TextCard text="Quality Gates at Every Step" description="Nothing goes live without internal review. No surprises, no half-finished work, no excuses." />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBrandChoseUs;