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
        img={'casestudypcs'}
        tags={['Legal Services']}
        title={'Premium Corporate Solutions'}
        desc={'Inherited a website with poor UX, zero client management system, and critical security vulnerabilities, the outcome is Zero critical vulnerabilities post-penetration testing; launched in 6 weeks; clients now self-serve case tracking with no back-and-forth'}
        link={'/case-study/premium-corporate-solutions'}
      />
      <CaseStudy
        img={'casestudykogh'}
        tags={['Technology', 'Cloud Services']}
        title={'KOGH Cloud'}
        desc={'No effective web presence to communicate complex technical offerings; budget-conscious with past negative agency experience the outcome is Professional website launched in 4 weeks; increased web traffic and improved brand awareness in a competitive cloud market.'}
        link={'/case-study/kogh-cloud'}
      />
      <CaseStudy
        img={'casestudyvts'}
        tags={['HR Business Process Outsourcing']}
        title={'Vertical Talent Solutions'}
        desc={'Outdated single-person no-code WordPress site undermining credibility with enterprise-level prospects the outcome is Full UI/UX and website transformation to enterprise-grade standard; optimized user journey for B2B HR decision-makers'}
        link={'/case-study/vertical-talent-solutions'}
      />
      <img className={styles.gradient} src="/Assets/casegradient.png" alt="" />
    </div>
  );
};

export default Case;