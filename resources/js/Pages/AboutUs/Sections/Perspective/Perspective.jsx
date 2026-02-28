import React from 'react';
import styles from './Perspective.module.scss';
import Badge from '../../../../components/Badge/badge';

const Perspective = () => {

  return (
    <>
      <div className={styles.container}>
        <Badge text={"OUR PERSPECTIVE"} />
        <div className={styles.h1}>How We Think About <span className={styles.span}>Digital</span></div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            <img className={styles.img} src="/Assets/rocket.png" alt="" />
            <div className={styles.text}>
              <div className={styles.text1}>
                Outcomes Over Assets
              </div>
              <div className={styles.text2}>
                We do not just deliver websites or designs. We deliver clarity for your audience, conversions for your business, and foundations for your growth.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src="/Assets/rocket.png" alt="" />
            <div className={styles.text}>
              <div className={styles.text1}>
                Outcomes Over Assets
              </div>
              <div className={styles.text2}>
                We do not just deliver websites or designs. We deliver clarity for your audience, conversions for your business, and foundations for your growth.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src="/Assets/rocket.png" alt="" />
            <div className={styles.text}>
              <div className={styles.text1}>
                Outcomes Over Assets
              </div>
              <div className={styles.text2}>
                We do not just deliver websites or designs. We deliver clarity for your audience, conversions for your business, and foundations for your growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perspective;