import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const VerticalTalentSolutions = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>

        <div className={styles.topSection}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            <img
              src="/Assets/backbtn.png"
              alt="Back"
              className={styles.backIcon}
            />
            Back
          </button>

          <span className={styles.pill}>CASE STUDY</span>
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>Human Resource Business Process Outsourcing</h1>

          <p className={styles.description}>
            Vertical Talent Solutions, an established Human Resource Business Process
            Outsourcing firm, faced a critical digital credibility gap. Their existing website, a 
            single-person no-code WordPress build, failed to reflect the professionalism and scale 
            of their business operations. With dated design patterns, unclear messaging, and poor 
            user experience, they needed a complete digital transformation to match their market 
            positioning and attract enterprise-level clients.
          </p>

          <div className={styles.heroImage}>
            <img src="/Assets/Rectangle.png" alt="" />
          </div>
        </div>

        <section className={styles.challengeSection}>
          <h2 className={styles.challengeTitle}>
            The <span>Challenge</span>
          </h2>

          <p className={styles.challengeIntro}>
            Vertical Talent Solutions needed to replace their existing website with a professional digital presence worthy of their BPO expertise.
            <ul> <br />
              <li>Outdated no-code WordPress site built without professional design standards or strategic UX planning</li>
              <li>Single-person build lacking specialized web development and design expertise</li>
              <li>No clear user journey or conversion optimization for enterprise HR clients</li>
              <li>he existing site undermined their credibility in a competitive BPO market where first impressions determine whether prospects engage or bounce to competitors.</li>
            </ul>
          </p>

          {/* <p className={styles.challengeIntro}>
                        Kogh Cloud needed to establish credibility in the competitive cloud services market through a professional digital presence.
                    </p>

                    <div className={styles.challengeCard}>
                        <h4>Poor user experience</h4>
                        <p>
                            The website was difficult to navigate and lacked the professional aesthetic expected of a legal services firm
                        </p>
                    </div> */}

          {/* <div className={styles.challengeCard}>
            <h4>No client management system</h4>
            <p>
              There was no way for clients to track their case progress,
              deadlines, or documents.
            </p>
          </div>

          <div className={styles.challengeCard}>
            <h4>Critical security vulnerabilities</h4>
            <p>
              For a company handling sensitive legal information, this was the
              biggest failure — the existing setup left client data exposed to
              potential threats.
            </p>
          </div> */}

          {/* <p className={styles.challengeClosing}>
            Premium Corporate Solutions needed more than a website redesign.
            They needed a complete digital infrastructure overhaul built by a
            team that understood both development and security.
          </p> */}
        </section>

        <section className={styles.approachSection}>
          <h2 className={styles.approachTitle}>
            Our <span>Approach</span>
          </h2>

          <p className={styles.approachIntro}>
           We delivered a complete UI/UX redesign and custom website development over 6 weeks, elevating their digital presence to enterprise standards.
          </p>

          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h4>Strategic &amp; UI/UX Design</h4>
              <ul>
                <li>Complete information architecture restructuring for clarity and conversion</li>
                <li>Professional visual identity aligned with enterprise BPO expectations</li>
              </ul>
            </div>

            <div className={styles.approachCard}>
              <h4>Custom &amp; Website Development</h4>
              <ul>
                <li>Modern, scalable build replacing outdated no-code foundation</li>
                <li>Performance-optimized architecture for improved user experience</li>
              </ul>
            </div>

            <div className={styles.approachCard}>
              <h4>Collaborative Process</h4>
              <ul>
                <li>Open feedback loops while maintaining strategic direction</li>
                <li>Balanced client input with expert recommendations for maximum impact</li>
              </ul>
            </div>

            <div className={styles.approachCard}>
              <h4>Enterprise Positioning</h4>
              <ul>
                <li>Messaging and design that positions VTS as a premium BPO partner</li>
                <li>Clear service differentiation and value proposition communication</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.outcomeSection}>
          <h2 className={styles.outcomeTitle}>
            The <span>Outcome</span>
          </h2>

          <ul className={styles.outcomeList}>
            <li>Complete UI/UX transformation elevating brand perception from basic to enterprise-grade</li>
            <li>Modern, professional website design that reflects company scale and expertise</li>
            <li>Strategic user journey optimized for B2B HR decision-makers</li>
            <li>Significant visual and functional improvement over previous digital presence</li>
          </ul>
        </section>

        <section className={styles.testimonialSection}>
          <div className={styles.testimonialLeft}>
            <img
              src="/Assets/icon.png"
              alt="Client"
              className={styles.testimonialAvatar}
            />
            <p className={styles.clientName}>
              Premium Corporate Solutions
            </p>
          </div>

          <div className={styles.testimonialRight}>
            <img
              src="/Assets/quote.png"
              alt="Quote"
              className={styles.quoteIcon}
            />

            <div className={styles.testimonialContent}>
              <img
                src="/Assets/line.png"
                alt=""
                className={styles.verticalLine}
              />

              <p className={styles.testimonialText}>
                "Appreciate you guys and the work thus far. The team at Vibe Hive was open to 
                suggestions but still brought forward ideas that made the website stand out. Young, 
                talented professionals who know how to collaborate effectively."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerticalTalentSolutions;