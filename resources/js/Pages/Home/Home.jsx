import React from 'react';
import styles from './Home.module.scss';
import Hero from './Sections/Hero/Hero';
import System from './Sections/System/System';
import HowWeWork from './Sections/HowWeWork/HowWeWork';
import OurWorks from './Sections/OurWorks/OurWorks';
import WhyBrandChoseUs from './Sections/WhyBrandChoseUs/WhyBrandChoseUs';
import Testimonials from './Sections/Testimonials/Testimonials'
import FAQs from './Sections/FAQs/FAQs';
import Cta from '../../components/Cta/cta'

const Home = () => {

  return (
    <>
      <div className={styles.homeContainer}>
        <Hero />
        <System />
        <HowWeWork />
        <OurWorks />
        <WhyBrandChoseUs />
        <Testimonials />
        <FAQs />
        <Cta 
          title={"Ready to build your"}
          span={'Solution?'}
          description={"Book a free 30-minute discovery call. No pitch, no pressure. Just a real conversation about your business and whether we can help."}
          gradientBtn={"Start a project with us"}
          whiteBtn={"contact us"}
        />
      </div>
    </>
  );
};

export default Home;