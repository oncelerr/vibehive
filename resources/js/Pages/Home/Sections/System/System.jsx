import React from 'react';
import styles from './System.module.scss';
import Badge from '../../../../components/Badge/badge';
import Card from '../../../../components/Card/card';

const System = () => {

  return (
    <>
      <div className={styles.systemContainer}>
        <Badge text="The System" />
        <h3 className={styles.systemH3}>We Build <span className={styles.systemSpan}>Digital</span> Growth Systems</h3>
        <p>Not just websites. Not just design. Complete digital foundations engineered for one thing: results.</p>
        <div className={styles.systemCardCont}> 
          <Card img="/assets/cardimg1.png" text="Clarity" description="Audiences instantly know who the brand is and what action to take next through strategic positioning, intuitive experience design, and clear visual messaging." />
          <Card img="/assets/cardimg2.png" text="Conversion" description="Traffic converts instead of leaking through conversion-focused architecture, performance-optimized development, and SEO-ready structure from day one." />
          <Card img="/assets/cardimg3.png" text="Scale-Readiness" description="Growth happens without the need to rebuild thanks to flexible CMS, built-in analytics and tracking, and clean modular architecture." />
        </div>
      </div>
    </>
  );
};

export default System;