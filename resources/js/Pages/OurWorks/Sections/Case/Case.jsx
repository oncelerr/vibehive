import React, { useEffect, useRef } from 'react';
import styles from './Case.module.scss';
import CaseStudy from '../../../../components/CaseStudy/CaseStudy';
import { runCaseAnimations } from './caseAnimations';

const Case = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = runCaseAnimations({ containerRef });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <CaseStudy
        img={'casestudykogh'}
        tags={['Visual Design', 'Visual Design', 'Visual Design']}
        title={'Coca - Tech Startup Landing Page'}
        desc={'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'}
        link={'/case-study/premium-corporate-solutions'}
      />
      <CaseStudy
        img={'casestudykogh'}
        tags={['Visual Design', 'Visual Design', 'Visual Design']}
        title={'Coca - Tech Startup Landing Page'}
        desc={'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'}
        link={'/case-study/kogh-cloud'}
      />
      <CaseStudy
        img={'casestudykogh'}
        tags={['Visual Design', 'Visual Design', 'Visual Design']}
        title={'Coca - Tech Startup Landing Page'}
        desc={'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'}
        link={'/case-study/vertical-talent-solutions'}
      />
      <img className={styles.gradient} src="/Assets/casegradient.png" alt="" />
    </div>
  );
};

export default Case;