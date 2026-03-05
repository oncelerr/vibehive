import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const KoghCloud = () => {
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
          <h1 className={styles.title}>Technology and Cloud Services</h1>

          <p className={styles.description}>
            Kogh Cloud, a growing cloud services provider, faced a common challenge for tech
            companies: how to translate complex technical offerings into a clear, professional web
            working with agencies and concerns about budget and delivery quality, they needed a
            partner who could deliver both quality and clarity without the typical agency overhead.
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
            Kogh Cloud needed to establish credibility in the competitive cloud services market through a professional digital presence.
            <ul> <br />
              <li>No existing web presence that effectively communicated their value proposition to potential clients</li>
              <li>Limited agency experience and past negative encounters created hesitation around trust and investment</li>
              <li>Budget constraints required a cost-effective solution without sacrificing quality or communication</li>
              <li>The technical nature of their services needed to be translated into clear, client-friendly messaging that built confidence and drove conversions.</li>
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
            We delivered a complete digital foundation system in 4 weeks, combining strategic design with collaborative execution to establish Kogh Cloud's online presence.
          </p>

          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h4>Strategic &amp; UI/UX Design</h4>
              <ul>
                <li>Translated complex cloud services into clear, conversion-focused messaging</li>
                <li>Created a professional visual identity that builds trust in the enterprise space</li>
              </ul>
            </div>

            <div className={styles.approachCard}>
              <h4>Custom &amp; Website Development</h4>
              <ul>
                <li>Built a responsive, high-performance website optimized for lead generation</li>
                <li>mplemented user-friendly content structure for easy navigation</li>
              </ul>
            </div>

            <div className={styles.approachCard}>
              <h4>Collaborative Process</h4>
              <ul>
                <li>Maintained responsive communication throughout all project phases</li>
                <li>Regular check-ins and feedback loops to align on objectives</li>
              </ul>
            </div>

            <div className={styles.approachCard}>
              <h4>Brand Positioning</h4>
              <ul>
                <li>Developed messaging that differentiates Kogh Cloud in a saturated market</li>
                <li>Focus on clarity over technical jargon to appeal to decision-makers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.outcomeSection}>
          <h2 className={styles.outcomeTitle}>
            The <span>Outcome</span>
          </h2>

          <ul className={styles.outcomeList}>
            <li>Successfully launched professional website within 4-week timeline</li>
            <li>Increased website traffic post-launch</li>
            <li>Improved brand awareness and market presence</li>
            <li>Strengthened digital credibility in competitive cloud services sector</li>
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
                "Vibe Hive is a team of young professionals with plenty of creativity and passion. They
                bring great energy to the project and are truly ready to collaborate to achieve objectives. 
                The communication throughout the process was strong, and the pricing was fair for the 
                services delivered. We saw an increase in web traffic and improved brand awareness 
                after launch."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KoghCloud;