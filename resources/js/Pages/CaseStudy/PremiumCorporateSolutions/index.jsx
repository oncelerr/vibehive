import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function PremiumCorporateSolutions() {
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
                    <h1 className={styles.title}>Premium Corporate Solutions</h1>

                    <p className={styles.description}>
                        Premium Corporate Solutions is a legal services company based in the U.S. Handling
                        sensitive client information, legal documents, case deadlines, and confidential records,
                        their digital infrastructure needed to be more than just a website. It had to be a secure,
                        functional system that clients could trust with their most important matters.
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
                        The company had previously hired a web developer who failed on multiple fronts:
                    </p>

                    <div className={styles.challengeCard}>
                        <h4>Poor user experience</h4>
                        <p>
                            The website was difficult to navigate and lacked the professional aesthetic expected of a legal services firm
                        </p>
                    </div>

                    <div className={styles.challengeCard}>
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
                    </div>

                    <p className={styles.challengeClosing}>
                        Premium Corporate Solutions needed more than a website redesign.
                        They needed a complete digital infrastructure overhaul built by a
                        team that understood both development and security.
                    </p>
                </section>

                <section className={styles.approachSection}>
                    <h2 className={styles.approachTitle}>
                        Our <span>Approach</span>
                    </h2>

                    <p className={styles.approachIntro}>
                        As both developers and cybersecurity specialists, we delivered a comprehensive solution that addressed every gap:
                    </p>

                    <div className={styles.approachGrid}>
                        <div className={styles.approachCard}>
                            <h4>Custom CRM &amp; Client Dashboard</h4>
                            <ul>
                                <li>Built a secure client portal where customers can track deadlines, upload and access documents, and monitor the progress of their availed services</li>
                                <li>Designed intuitive workflows that simplified case management for both staff and clients</li>
                            </ul>
                        </div>

                        <div className={styles.approachCard}>
                            <h4>UX/UI Redesign</h4>
                            <ul>
                                <li>Created a professional, trust-building design that reflects the credibility legal clients expect</li>
                                <li>Improved navigation and user flows for seamless client interaction</li>
                            </ul>
                        </div>

                        <div className={styles.approachCard}>
                            <h4>Security Hardening &amp; Penetration Testing</h4>
                            <ul>
                                <li>Conducted thorough penetration testing to identify and eliminate vulnerabilities</li>
                                <li>Implemented security protocols to protect sensitive legal documents and client data</li>
                                <li>Established ongoing security monitoring and maintenance</li>
                            </ul>
                        </div>

                        <div className={styles.approachCard}>
                            <h4>Website Development</h4>
                            <ul>
                                <li>Developed a fully functional, responsive website integrated with the CRM system</li>
                                <li>Ensured the client can independently manage content and updates</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.outcomeSection}>
                    <h2 className={styles.outcomeTitle}>
                        The <span>Outcome</span>
                    </h2>

                    <ul className={styles.outcomeList}>
                        <li>Launched in 6 weeks</li>
                        <li>Zero critical vulnerabilities after penetration testing and security hardening</li>
                        <li>Increased website traffic with measurable growth in visitor engagement</li>
                        <li>New client sign-ups generated through improved online presence and client portal functionality</li>
                        <li>Streamlined operations: Clients can now independently track deadlines, documents, and service progress</li>
                        <li>Strengthened brand confidence through professional design and secure infrastructure</li>
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
                                "Vibe Hive delivered exceptional web development, design, and social media 
                                management services that truly exceeded my expectations. Their team was trustworthy 
                                and reliable from start to finish, consistently communicating and delivering on every 
                                promise. They brought great ideas to the table, combining creativity with strategic 
                                thinking to elevate our online presence. What stood out most was their hard work and 
                                perseverance, no challenge was too big, and the results proved that every peso spent 
                                was absolutely worth it. I highly recommend Vibe Hive to anyone looking for a partner 
                                who delivers quality and value."
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}