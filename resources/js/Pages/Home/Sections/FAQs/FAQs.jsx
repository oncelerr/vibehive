import React, { useEffect, useRef } from 'react';
import styles from './FAQs.module.scss';
import Dropdown from '../../../../components/Dropdown/dropdown';
import { runFaqsAnimations } from './faqsAnimations';

const faqs = [
  { text: 'Do you have specific pricing plans to show?', desc: 'Do you have specific pricing plans to show?' },
  { text: 'Do you have specific pricing plans to show?', desc: 'Do you have specific pricing plans to show?' },
  { text: 'Do you have specific pricing plans to show?', desc: 'Do you have specific pricing plans to show?' },
  { text: 'Do you have specific pricing plans to show?', desc: 'Do you have specific pricing plans to show?' },
  { text: 'Do you have specific pricing plans to show?', desc: 'Do you have specific pricing plans to show?' },
];

const FAQs = () => {
  const headerRef = useRef(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const ctx = runFaqsAnimations({ headerRef, dropdownRefs });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header} ref={headerRef}>
        <div className={styles.h3} style={{ opacity: 0 }}>FAQ's</div>
        <div className={styles.desc} style={{ opacity: 0 }}>Providing answers to your questions</div>
      </div>

      {faqs.map((faq, i) => (
        <div key={i} ref={el => dropdownRefs.current[i] = el} style={{ opacity: 0, width: '100%' }}>
          <Dropdown text={faq.text} desc={faq.desc} />
        </div>
      ))}
    </div>
  );
};

export default FAQs;