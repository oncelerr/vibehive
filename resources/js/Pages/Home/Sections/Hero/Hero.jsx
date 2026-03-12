import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import Button from '../../../../components/GradientButton/button';
import { runHeroAnimations } from './heroAnimations';

const stats = [
  { value: 50, suffix: '+', label: 'Websites Launched' },
  { value: 6, suffix: '-week', label: 'Average delivery time' },
  { value: 90, suffix: '+ Pages', label: 'Speed scores' },
  { value: 8, suffix: ' countries', label: 'Served and counting' },
];

const Hero = () => {
  const worksRef = useRef(null);
  const countRefs = useRef([]);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  const transitionWrpRef = useRef(null);

  useEffect(() => {
    const ctx = runHeroAnimations({
      h1Ref, pRef, btnRef, worksRef, transitionWrpRef, countRefs, stats
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.heroWrp}>
      <div className={styles.heroBgLayer}>
        <img className={styles.heroShapes} src="/Assets/shapes.png" alt="" />
      </div>
      <h1 ref={h1Ref} className={styles.heroH1} style={{ opacity: 0 }}>
        Where Big Ideas <br /> Find Their{' '}
        <span className={styles.heroH1Span}>Digital Vibe</span>
        <img className={styles.h1ImgStar} src="/Assets/star1.png" alt="" />
      </h1>
      <p ref={pRef} className={styles.heroP} style={{ opacity: 0 }}>
        We build conversion-focused websites for growing <br />
        businesses. Strategy-led. Built to grow with you.
      </p>
      <div ref={btnRef} className={styles.heroBtnWrp} style={{ opacity: 0 }}>
        <Button text="Apply for a Free Discovery Call" color="gradient" hasArrow="true" />
        <Button text="See Our Work" color="white" />
      </div>
      <div className={styles.heroWorksWrp} ref={worksRef}>
        {stats.map((stat, i) => (
          <div className={styles.heroWorksItem} key={i}>
            <h3 ref={el => countRefs.current[i] = el}>0{stat.suffix}</h3>
            <p style={{ fontWeight: '200', fontSize: '18px' }}>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.transitionWrp} ref={transitionWrpRef}>
        <h1 className={styles.transitionH1}>
          The missing piece? A system that <br /> works as hard{' '}
          <span className={styles.transitionH1Span}>as you do.</span>
        </h1>
        <p className={styles.transitionP}>
          You know your business has potential, but your website isn't translating that into results.
          <br /><br />
          You've invested in marketing, but without a solid digital foundation, growth feels harder than it should. You're ready for clarity and consistency, the kind that turns visitors into customers.
        </p>
      </div>
    </div>
  );
};

export default Hero;