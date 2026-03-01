import React from 'react';
import styles from './OurWorks.module.scss';
import Cta from '../../components/Cta/cta'
import Hero from './Sections/Hero/Hero';
import Case from './Sections/Case/Case';

const OurWorks = () => {

  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Case />
      </div>
    </>
  );
};

export default OurWorks;