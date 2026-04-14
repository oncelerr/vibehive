import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CaseStudyPage.module.scss';
import { caseStudies } from './caseStudyData';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const data = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!data) {
    return (
      <div className={styles.notFound}>
        <p>Case study not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>

        {/* Top */}
        <div className={styles.topSection}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            <img src="/Assets/backbtn.png" alt="Back" className={styles.backIcon} />
            Back
          </button>
          <span className={styles.pill}>{data.pill}</span>
        </div>

        {/* Hero */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.heroImage}>
            <img src={data.heroImage} alt="" />
          </div>
        </div>

        {/* Challenge */}
        <section className={styles.challengeSection}>
          <h2 className={styles.challengeTitle}>The <span>Challenge</span></h2>
          <p className={styles.challengeIntro}>{data.challenge.intro}</p>

          {/* Cards variant */}
          {data.challenge.cards?.map((card, i) => (
            <div className={styles.challengeCard} key={i}>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}

          {/* Bullets variant */}
          {data.challenge.bullets && (
            <ul className={styles.challengeBullets}>
              {data.challenge.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {data.challenge.closing && (
            <p className={styles.challengeClosing}>{data.challenge.closing}</p>
          )}
        </section>

        {/* Approach */}
        <section className={styles.approachSection}>
          <h2 className={styles.approachTitle}>Our <span>Approach</span></h2>
          <p className={styles.approachIntro}>{data.approach.intro}</p>
          <div className={styles.approachGrid}>
            {data.approach.cards.map((card, i) => (
              <div className={styles.approachCard} key={i}>
                <h4>{card.title}</h4>
                <ul>
                  {card.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className={styles.outcomeSection}>
          <h2 className={styles.outcomeTitle}>The <span>Outcome</span></h2>
          <ul className={styles.outcomeList}>
            {data.outcome.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        {/* Testimonial */}
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialLeft}>
            <img src={data.testimonial.avatar} alt="Client" className={styles.testimonialAvatar} />
            <p className={styles.clientName}>{data.testimonial.client}</p>
          </div>
          <div className={styles.testimonialRight}>
            <img src="/Assets/quote.png" alt="Quote" className={styles.quoteIcon} />
            <div className={styles.testimonialContent}>
              <div className={styles.verticalLine} />
              <p className={styles.testimonialText}>"{data.testimonial.quote}"</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}