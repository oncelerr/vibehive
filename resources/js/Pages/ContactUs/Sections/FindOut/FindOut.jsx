import React from "react";
import styles from "./FindOut.module.scss";
import TextField from "../TextField/TextField"; // adjust path

const FindOut = () => {
  return (
    <section className={styles.FindOutWrp}>
      {/* HERO */}
      <div className={styles.group}>
        <div className={styles.content}>
          <div className={styles.badge}>CONTACT US</div>

          <h1 className={styles.titleH1}>
            Let's Find Out <span className={styles.titleH1Span}>Together</span>
          </h1>

          <p className={styles.ContactUsP}>
            Vibe Hive doesn't say yes to every project. Not out of exclusivity, but out of honesty.
            <br />
            Work only happens when there's a real chance to make an impact. If the fit isn't right,
            <br />
            that gets said upfront. No time wasted, no hard feelings.
          </p>
        </div>

        <img
          src="/assets/airplane.png"
          alt="airplane"
          className={styles.airplane}
        />
      </div>

      {/* FORM OVERLAP */}
      <div className={styles.formOverlap}>
        <TextField />
      </div>
    </section>
  );
};

export default FindOut;