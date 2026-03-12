import React, { useEffect, useRef } from 'react';
import styles from './WhyBrandChoseUs.module.scss';
import TextCard from '../../../../components/TextCard/TextCard';
import { runWhyBrandsAnimations } from './whyBrandsAnimations';

const WhyBrandChoseUs = () => {
  const titleRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const ctx = runWhyBrandsAnimations({ titleRef, rowRefs });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.whyBrandChoseUsContainer}>
      <div ref={titleRef} className={styles.h3} style={{ opacity: 0 }}>
        Why Brands <span className={styles.span}>Choose Us</span>
      </div>
      <div className={styles.cardCont}>
        <div className={styles.card} ref={el => rowRefs.current[0] = el}>
          <TextCard text="Systems, Not Services" description="We do not sell you a website and walk away. We build complete digital foundations where every piece works together." />
          <TextCard text="Quality Gates at Every Step" description="Nothing goes live without internal review. No surprises, no half-finished work, no excuses." />
        </div>
        <div className={styles.card} ref={el => rowRefs.current[1] = el}>
          <TextCard text="Systems, Not Services" description="We do not sell you a website and walk away. We build complete digital foundations where every piece works together." />
          <TextCard text="Quality Gates at Every Step" description="Nothing goes live without internal review. No surprises, no half-finished work, no excuses." />
        </div>
      </div>
    </div>
  );
};

export default WhyBrandChoseUs;