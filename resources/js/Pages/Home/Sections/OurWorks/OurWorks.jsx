import React,{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OurWorks.module.scss';
import Badge from '../../../../components/Badge/badge';
import GradientButton from '../../../../components/GradientButton/button';
import ArrowButton from '../../../../components/ArrowButton/arrowbtn';

const worksData = [
  {
    id: 1,
    image: '/Assets/kogh.png',
    tags: ['UX Research', 'Wireframe', 'Visual Design'],
    title: 'Coca - Tech Startup Landing Page',
    description: 'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.',
  },
  {
    id: 2,
    image: '/Assets/kogh.png',
    tags: ['Development', 'Laravel', 'React'],
    title: 'VibeHive - Agency Portfolio',
    description: 'A full-stack web application built with Laravel and React, featuring a modern design and seamless user experience.',
  },
  {
    id: 3,
    image: '/Assets/kogh.png',
    tags: ['Branding', 'UI Design'],
    title: 'PremiumCorp - Service Management',
    description: 'Enterprise service request management system with a clean, intuitive interface designed for maximum productivity.',
  },
];

const OurWorks = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 👈 1 = next, -1 = prev

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? worksData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === worksData.length - 1 ? 0 : prev + 1));
  };

  const handleDot = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const activeWork = worksData[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <>
      <div className={styles.ourWorksContainer}>
        <div className={styles.glowBar} />
        <Badge text="Our Works" />
        <h3 className={styles.ourWorksTitle}>Systems We Have <span className={styles.ourWorksTitleSpan}>Built</span></h3>
        <p className={styles.ourWorksDescription}>Real businesses. Real challenges. Real results.</p>

        <div className={styles.ourWorksCarousel}>
          <div className={styles.ourWorksCarouselMain}>
            <ArrowButton position={"left"} func={handlePrev}/>

            {/* 👇 Wrap content with overflow hidden to clip the slide */}
            <div style={{ overflow: 'hidden', width: '1045px', height: '714px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className={styles.ourWorksCarouselContent}
                >
                  <div className={styles.ourWorksCarouselContentTop}>
                    <img src={activeWork.image} alt={activeWork.title} />
                  </div>
                  <div className={styles.ourWorksCarouselContentBottom}>
                    <div className={styles.ourWorksCarouselContentBottomTags}>
                      {activeWork.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          text={tag}
                          style={{
                            marginBottom: '0',
                            backgroundColor: 'transparent',
                            color: '#B123FD',
                            height: '34px',
                            textTransform: 'none'
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.ourWorksCarouselContentBottomTitle}>{activeWork.title}</div>
                    <div className={styles.ourWorksCarouselContentBottomDescription}>{activeWork.description}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <ArrowButton position={"right"} func={handleNext}/>
          </div>

          <div className={styles.ourWorksCarouselBreadcrumbs}>
            {worksData.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDot(index)}
                className={
                  index === current
                    ? styles.ourWorksCarouselBreadcrumbsActive
                    : styles.ourWorksCarouselBreadcrumbsInactive
                }
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>

        <GradientButton text="View All Projects" color="gradient" hasArrow="true"/>
      </div>
    </>
  );
};

export default OurWorks;