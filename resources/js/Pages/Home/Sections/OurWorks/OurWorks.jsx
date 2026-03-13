import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './OurWorks.module.scss';
import Badge from '../../../../components/Badge/badge';
import GradientButton from '../../../../components/GradientButton/button';
import ArrowButton from '../../../../components/ArrowButton/arrowbtn';
import { runOurWorksAnimations } from './ourWorksAnimations';

const worksData = [
  {
    id: 1,
    image: '/Assets/kogh_mockup.png',
    tags: ['UX Research', 'Wireframe', 'Visual Design'],
    title: 'Coca - Tech Startup Landing Page',
    description: 'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.',
  },
  {
    id: 2,
    image: '/Assets/pcs_mockup.png',
    tags: ['Development', 'Laravel', 'React'],
    title: 'VibeHive - Agency Portfolio',
    description: 'A full-stack web application built with Laravel and React, featuring a modern design and seamless user experience.',
  },
  {
    id: 3,
    image: '/Assets/vts.png',
    tags: ['Branding', 'UI Design'],
    title: 'PremiumCorp - Service Management',
    description: 'Enterprise service request management system with a clean, intuitive interface designed for maximum productivity.',
  },
];

const OurWorks = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = React.useState(0);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const carouselRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = runOurWorksAnimations({ badgeRef, titleRef, descRef, carouselRef, btnRef });
    return () => ctx.revert();
  }, []);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
    beforeChange: (_, next) => setCurrent(next),
  };

  return (
    <div className={styles.ourWorksContainer}>
      <div className={styles.glowBar} />

      <div ref={badgeRef} style={{ opacity: 0 }}>
        <Badge text="Our Works" />
      </div>
      <h3 ref={titleRef} className={styles.ourWorksTitle} style={{ opacity: 0 }}>
        Systems We Have <span className={styles.ourWorksTitleSpan}>Built</span>
      </h3>
      <p ref={descRef} className={styles.ourWorksDescription} style={{ opacity: 0 }}>
        Real businesses. Real challenges. Real results.
      </p>

      <div className={styles.ourWorksCarousel} ref={carouselRef} style={{ opacity: 0 }}>
        <div className={styles.ourWorksCarouselMain}>
          <ArrowButton position="left" func={() => sliderRef.current.slickPrev()} />

          <div style={{ overflow: 'hidden', width: '1045px', height: '714px' }}>
            <Slider ref={sliderRef} {...settings}>
              {worksData.map((work) => (
                <div key={work.id}>
                  <div className={styles.ourWorksCarouselContent}>
                    <div className={styles.ourWorksCarouselContentTop}>
                      <img src={work.image} alt={work.title} />
                    </div>
                    <div className={styles.ourWorksCarouselContentBottom}>
                      <div className={styles.ourWorksCarouselContentBottomTags}>
                        {work.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            text={tag}
                            style={{
                              marginBottom: '0',
                              backgroundColor: 'transparent',
                              color: '#B123FD',
                              height: '34px',
                              textTransform: 'none',
                            }}
                          />
                        ))}
                      </div>
                      <div className={styles.ourWorksCarouselContentBottomTitle}>{work.title}</div>
                      <div className={styles.ourWorksCarouselContentBottomDescription}>{work.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <ArrowButton position="right" func={() => sliderRef.current.slickNext()} />
        </div>

        <div className={styles.ourWorksCarouselBreadcrumbs}>
          {worksData.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                setCurrent(index);
              }}
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

      <div ref={btnRef} style={{ opacity: 0 }}>
        <GradientButton text="View All Projects" color="gradient" hasArrow="true" />
      </div>
    </div>
  );
};

export default OurWorks;