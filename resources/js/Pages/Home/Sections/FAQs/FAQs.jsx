import React, { useEffect, useRef } from 'react';
import styles from './FAQs.module.scss';
import Dropdown from '../../../../components/Dropdown/dropdown';
import { runFaqsAnimations } from './faqsAnimations';

const faqs = [
  { text: 'What services do you offer?', desc: 'We design and build websites, handle UI/UX, and set up SEO foundations. Everything works together as one system, not random pieces stitched together.' },
  { text: 'Do you work with international clients?', desc: 'Yes, most of our clients are outside the Philippines. We\'re comfortable with async communication and working across timezones.' },
  { text: 'How long does a typical project take?', desc: 'Typically 6 weeks from kickoff to launch. We\'ll share a detailed timeline before we start.' },
  { text: 'What do you need from us to get started?', desc: 'Brand assets, content (or willingness to collaborate on it), and a decision-maker who can give timely feedback.' },
  { text: 'Do you offer revisions?', desc: 'Yes, revisions are built into our process. We\'ll explain exactly how it works during our discovery call.' },
  { text: 'Do you do branding or logo design?', desc: 'Not our specialty. We work best when you already have brand assets. If you need branding, we can recommend partners.' },
  { text: 'What if we just need a quick, simple website?', desc: 'We\'re probably not the right fit. Our process is built for businesses ready to invest in something strategic, not a rush job.' },
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