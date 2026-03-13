import React, { useEffect, useRef } from 'react';
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
    comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    name: "Christine M.",
    company: "Kogh Cloud INC."
  },
  {
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John D.",
    company: "Tech Solutions Ltd."
  },
  {
    comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    name: "Sarah K.",
    company: "Creative Studio Co."
  },
  {
    comment: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.",
    name: "Mark T.",
    company: "Venture Labs"
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = runTestimonialsAnimations({ headerRef, carouselRef });
    return () => ctx.revert();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,   // using our own ArrowButton
    dots: false,
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