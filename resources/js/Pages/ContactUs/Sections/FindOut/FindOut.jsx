import React, { useEffect, useRef } from 'react';
import styles from './FindOut.module.scss';
import TextField from '../TextField/TextField';
import { runFindOutAnimations } from './findOutAnimations';

const FindOut = () => {
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const airplaneRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = runFindOutAnimations({ badgeRef, h1Ref, pRef, airplaneRef, formRef });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.FindOutWrp}>
      <div className={styles.group}>
        <div className={styles.content}>
          <div ref={badgeRef} className={styles.badge} style={{ opacity: 0 }}>
            CONTACT US
          </div>
          <h1 ref={h1Ref} className={styles.titleH1} style={{ opacity: 0 }}>
            Let's Find Out <span className={styles.titleH1Span}>Together</span>
          </h1>
          <p ref={pRef} className={styles.ContactUsP} style={{ opacity: 0 }}>
            Vibe Hive doesn't say yes to every project. Not out of exclusivity, but out of honesty.
            <br />
            Work only happens when there's a real chance to make an impact. If the fit isn't right,
            <br />
            that gets said upfront. No time wasted, no hard feelings.
          </p>
        </div>
        <img
          ref={airplaneRef}
          src="/assets/airplane.png"
          alt="airplane"
          className={styles.airplane}
          style={{ opacity: 0 }}
        />
      </div>

      <div ref={formRef} className={styles.formOverlap} style={{ opacity: 0 }}>
        <TextField />
      </div>
    </section>
  );
};

export default FindOut;