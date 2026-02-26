import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Hero from './Hero';
import System from './System';

const Home = () => {

  return (
    <>
      <div className={styles.homeContainer}>
        <Hero />
        <System />
      </div>
    </>
  );
};

export default Home;