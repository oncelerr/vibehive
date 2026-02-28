import React from "react";
import styles from "./TextField.module.scss";
import Button from "../../../../components/GradientButton/button";

const TextField = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.inner}>
                    <p className={styles.topText}>
                        Fill out this quick application. If there is a fit, we will send you a link
                        to book a free 30-minute discovery call with our team.
                    </p>

                    <div className={styles.grid}>
                        {/* ROW 1 */}
                        <div className={styles.field}>
                            <label className={styles.label}>Your Name</label>
                            <input className={styles.input} placeholder="Enter your name" />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Email Address</label>
                            <input className={styles.input} placeholder="Enter your email address" />
                        </div>

                        {/* ROW 2 */}
                        <div className={styles.field}>
                            <label className={styles.label}>Company or Brand Name</label>
                            <input className={styles.input} placeholder="Enter your brand name" />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Your Website URL</label>
                            <input className={styles.input} placeholder="website.com" />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Industry</label>
                            <input className={styles.input} placeholder="Enter your industry" />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>How did you hear about us?</label>
                            <select className={styles.select}>
                                <option value="">Select option</option>
                            </select>
                        </div>

                        <div className={`${styles.field} ${styles.full}`}>
                            <label className={styles.label}>What is your biggest challenge right now?</label>
                            <textarea
                                className={styles.textarea}
                                placeholder="Tell us about your current digital situation and what you are hoping to achieve."
                            />
                        </div>


                        <div className={`${styles.field} ${styles.full}`}>
                            <label className={styles.label}>Estimated Budget Range</label>
                            <select className={styles.select}>
                                <option value="">Select range</option>
                            </select>
                        </div>

                        <div className={`${styles.field} ${styles.full}`}>
                            <label className={styles.label}>How soon do you need this?</label>
                            <select className={styles.select}>
                                <option value="">Select option</option>
                            </select>
                        </div>
                    </div>

                    <p className={styles.bottomNote}>
                        We review every application within 48 hours.
                    </p>

                    <div className={styles.TextFieldBtnWrp}>
                        <button className={styles.submitBtn}>
                            Submit Application
                            <span className={styles.arrow}>↗</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextField;