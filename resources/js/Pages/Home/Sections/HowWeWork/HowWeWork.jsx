import React, { useEffect, useRef } from 'react';
import styles from './HowWeWork.module.scss';
import { runHowWeWorkAnimations } from './howWeWorkAnimations';

const steps = [
  {
    number: '1',
    title: 'Discovery',
    description: 'We start with a free 30-minute call to understand your business and goals.',
    icon: '/Assets/discovery-light-icon.png',
    side: 'left',
  },
  {
    number: '2',
    title: 'Strategy & Design',
    description: 'We map your user journey, define the conversion strategy, and create designs.',
    icon: '/Assets/brush-icon.png',
    side: 'right',
  },
  {
    number: '3',
    title: 'Build & Optimize',
    description: 'Our development team brings designs to life with clean code and fast load times.',
    icon: '/Assets/build-shapes-icon.png',
    side: 'left',
  },
  {
    number: '4',
    title: 'Launch & Support',
    description: 'We handle the launch, train your team on the CMS, and ensure everything sends.',
    icon: '/Assets/launch-airplane-icon.png',
    side: 'right',
  },
];

const HowWeWork = () => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const footerRef = useRef(null);
  const bubbleRefs = useRef([]);
  const cardRefs = useRef([]);
  const connectorRefs = useRef([]);

  useEffect(() => {
    const ctx = runHowWeWorkAnimations({
      headerRef,
      timelineRef,
      bubbleRefs,
      cardRefs,
      connectorRefs,
      footerRef,
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.glowCircle} />

      <div className={styles.header} ref={headerRef}>
        <h2 className={styles.h2}>
          How We Work <span className={styles.gradient}>Together</span>
        </h2>
        <p>
          A straightforward process designed for clarity. <br />
          No endless revisions. No disappearing acts. No surprises.
        </p>
      </div>

      <div className={styles.timeline} ref={timelineRef}>

        {/* Top connector */}
        <div className={styles.connectorTop}>
          <div className={styles.connectorLineTop} />
        </div>

        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className={`${styles.row} ${step.side === 'right' ? styles.rowRight : ''}`}>

              {/* Left card */}
              <div
                ref={el => { if (step.side === 'left') cardRefs.current[index] = el; }}
                className={`${styles.card} ${step.side === 'right' ? styles.cardEmpty : ''}`}
                style={{ opacity: step.side === 'left' ? 0 : 1 }}
              >
                {step.side === 'left' && (
                  <>
                    <span className={styles.icon}><img src={step.icon} alt="" /></span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Center bubble */}
              <div
                ref={el => bubbleRefs.current[index] = el}
                className={styles.bubble}
                style={{ opacity: 0 }}
              >
                {step.number}
              </div>

              {/* Right card */}
              <div
                ref={el => { if (step.side === 'right') cardRefs.current[index] = el; }}
                className={`${styles.card} ${step.side === 'left' ? styles.cardEmpty : ''}`}
                style={{ opacity: step.side === 'right' ? 0 : 1 }}
              >
                {step.side === 'right' && (
                  <>
                    <span className={styles.icon}><img src={step.icon} alt="" /></span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </>
                )}
              </div>

            </div>

            {/* Middle connectors */}
            {index < steps.length - 1 && (
              <div
                className={styles.connector}
                ref={el => connectorRefs.current[index] = el}
              >
                <div className={styles.connectorLine} />
              </div>
            )}

            {/* Bottom connector after last step */}
            {index === steps.length - 1 && (
              <div
                className={styles.connectorBottom}
                ref={el => connectorRefs.current[index] = el}
              >
                <div className={styles.connectorLineBottom} />
              </div>
            )}

          </React.Fragment>
        ))}

      </div>

      <p className={styles.footer} ref={footerRef} style={{ opacity: 0 }}>
        Most projects launch within 6 weeks.
      </p>

      <div className={styles.glowCircle2} />
    </div>
  );
};

export default HowWeWork;