import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Testimonials.module.scss';
import Badge from '../../../../components/Badge/badge';
import ArrowButton from '../../../../components/ArrowButton/arrowbtn';
import Feedback from '../../../../components/Feedback/feedback';
import { runTestimonialsAnimations } from './testimonialsAnimations';

const feedbackData = [
  {
    comment: "Their team was trustworthy and reliable from start to finish, consistently communicating and delivering on every promise. No challenge was too big, and the results proved that every peso spent was absolutely worth it.",
    name: "Cherry G.",
    company: "Premium Corporate Solutions"
  },
  {
    comment: "They bring great energy to the project and are truly ready to collaborate to achieve objectives. We saw an increase in web traffic and improved brand awareness after launch.",
    name: "Caio Y.",
    company: "KOGH Cloud"
  },
  {
    comment: "The team at Vibe Hive was open to suggestions but still brought forward ideas that made the website stand out. Young, talented professionals who know how to collaborate effectively.",
    name: "Sang H.",
    company: "Vertical Talent Solutions"
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth <= 769 ? 1 : 2);

  useEffect(() => {
    const ctx = runTestimonialsAnimations({ headerRef, carouselRef });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handler = () => setSlidesToShow(window.innerWidth <= 769 ? 1 : 2);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} ref={headerRef}>
        <div className={styles.left} style={{ opacity: 0 }}>
          <Badge text="TESTIMONIALS" style={{ marginBottom: '8px' }} />
          <div className={styles.title}>Feedback From Our Clients</div>
        </div>
        <div className={styles.right} style={{ opacity: 0 }}>
          <ArrowButton position="left" func={() => sliderRef.current.slickPrev()} />
          <ArrowButton position="right" func={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      <div className={styles.content} ref={carouselRef} style={{ opacity: 0 }}>
        <Slider ref={sliderRef} {...settings} className={styles.slider}>
          {feedbackData.map((item, i) => (
            <div key={i} className={styles.slide}>
              <Feedback
                comment={item.comment}
                name={item.name}
                company={item.company}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;