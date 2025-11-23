import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerRing}></div>
          <div className={styles.spinnerRing}></div>
        </div>
        <h6 className={styles.loadingText}>
          Hive <span className={styles.gradientText}>Core</span>
        </h6>
        <p className={styles.loadingSubtext}>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
