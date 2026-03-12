import React, { useEffect, useRef } from 'react';
import styles from './System.module.scss';
import Badge from '../../../../components/Badge/badge';
import Card from '../../../../components/Card/card';
import { runSystemAnimations } from './systemAnimations';

const System = () => {
  const badgeRef = useRef(null);
  const h3Ref = useRef(null);
  const pRef = useRef(null);
  const cardContRef = useRef(null);

  useEffect(() => {
    const ctx = runSystemAnimations({ badgeRef, h3Ref, pRef, cardContRef });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.systemContainer}>
      <div ref={badgeRef} style={{ opacity: 0 }}>
        <Badge text="The System" />
      </div>
      <h3 ref={h3Ref} className={styles.systemH3} style={{ opacity: 0 }}>
        We Build <span className={styles.systemSpan}>Digital</span> Growth Systems
      </h3>
      <p ref={pRef} style={{ opacity: 0 }}>
        Not just websites. Not just design. Complete digital foundations engineered for one thing: results.
      </p>
      <div className={styles.systemCardCont} ref={cardContRef}>
        <Card img="/assets/cardimg1.png" text="Clarity" description="Audiences instantly know who the brand is and what action to take next through strategic positioning, intuitive experience design, and clear visual messaging." />
        <Card img="/assets/cardimg2.png" text="Conversion" description="Traffic converts instead of leaking through conversion-focused architecture, performance-optimized development, and SEO-ready structure from day one." />
        <Card img="/assets/cardimg3.png" text="Scale-Readiness" description="Growth happens without the need to rebuild thanks to flexible CMS, built-in analytics and tracking, and clean modular architecture." />
      </div>
    </div>
  );
};

export default System;