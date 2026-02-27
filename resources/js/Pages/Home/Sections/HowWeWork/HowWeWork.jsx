import React from 'react';
import styles from './HowWeWork.module.scss';

const HowWeWork = () => {

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
      description: 'We handle the launch, train your team on the CMS, and ensure everything works.',
      icon: '/Assets/launch-airplane-icon.png',
      side: 'right',
    },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.glowCircle} />

      <div className={styles.header}>
        <h2 className={styles.h2}>How We Work <span className={styles.gradient}>Together</span></h2>
        <p>A straightforward process designed for clarity. <br />No endless revisions. No disappearing acts. No surprises.</p>
      </div>

      <div className={styles.timeline}>

        {/* 👈 Top fade-in connector */}
        <div className={styles.connectorTop} />

        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className={`${styles.row} ${step.side === 'right' ? styles.rowRight : ''}`}>

              {/* Left card */}
              <div className={`${styles.card} ${step.side === 'right' ? styles.cardEmpty : ''}`}>
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

              {/* Center number bubble */}
              <div className={styles.bubble}>{step.number}</div>

              {/* Right card */}
              <div className={`${styles.card} ${step.side === 'left' ? styles.cardEmpty : ''}`}>
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

            {/* Middle connectors between steps */}
            {index < steps.length - 1 && (
              <div className={styles.connector} />
            )}

            {/* 👈 Bottom fade-out connector after last step */}
            {index === steps.length - 1 && (
              <div className={styles.connectorBottom} />
            )}

          </React.Fragment>
        ))}

      </div>

      <p className={styles.footer}>Most projects launch within 6 weeks.</p>

      <div className={styles.glowCircle2} />
    </div>
  );
};

export default HowWeWork;