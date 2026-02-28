import React, { useState } from 'react';
import styles from './Testimonials.module.scss';
import Badge from '../../../../components/Badge/badge';
import ArrowButton from '../../../../components/ArrowButton/arrowbtn';
import Feedback from '../../../../components/Feedback/feedback';

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
  const [startIndex, setStartIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [offset, setOffset] = useState(0);

  const slide = (dir) => {
    if (sliding) return;
    setOffset(dir === 'right' ? -50 : 50);
    setSliding(true);

    setTimeout(() => {
      setStartIndex((prev) =>
        dir === 'right'
          ? (prev + 1) % feedbackData.length
          : (prev - 1 + feedbackData.length) % feedbackData.length
      );
      setOffset(0);
      setSliding(false);
    }, 420);
  };

  const indices = [
    (startIndex - 1 + feedbackData.length) % feedbackData.length,
    startIndex,
    (startIndex + 1) % feedbackData.length,
    (startIndex + 2) % feedbackData.length,
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Badge text={"TESTIMONIALS"} style={{ marginBottom: '8px' }} />
            <div className={styles.title}>Feedback From Our Clients</div>
          </div>
          <div className={styles.right}>
            <ArrowButton position={'left'} func={() => slide('left')} />
            <ArrowButton position={'right'} func={() => slide('right')} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(calc(-25% + ${offset}%))`,
                transition: sliding ? 'transform 420ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              {indices.map((dataIndex, i) => (
                <div key={i} className={styles.carouselSlide}>
                  <Feedback
                    comment={feedbackData[dataIndex].comment}
                    name={feedbackData[dataIndex].name}
                    company={feedbackData[dataIndex].company}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;