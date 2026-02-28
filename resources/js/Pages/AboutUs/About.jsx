import React from 'react';
import styles from './About.module.scss';
import Cta from '../../components/Cta/cta';
import Hero from './Sections/Hero/Hero';
import Founders from './Sections/Founders/Founders'
import Perspective from './Sections/Perspective/Perspective';

const About = () => {

  return (
    <>
      <div className={styles.homeContainer}>
        <Hero />
        <Founders />
        <Perspective />
        <Cta 
          title={"Want to Work"}
          span={'With Us?'}
          description={"If you are building something meaningful and want a team that treats your business like their own, let us talk."}
          gradientBtn={"Apply for a Discovery Call"}
        />
      </div>
    </>
  );
};

export default About;