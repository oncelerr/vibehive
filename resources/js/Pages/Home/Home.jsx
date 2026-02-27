import React from 'react';
import styles from './Home.module.scss';
import Hero from './Sections/Hero/Hero';
import System from './Sections/System/System';
import HowWeWork from './Sections/HowWeWork/HowWeWork';
import OurWorks from './Sections/OurWorks/OurWorks';

const Home = () => {

  return (
    <>
      <div className={styles.homeContainer}>
        <Hero />
        <System />
        <HowWeWork />
        <OurWorks />
      </div>
    </>
  );
};

export default Home;