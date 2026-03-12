import React, { useEffect, useRef, useState } from 'react';
import styles from './Perspective.module.scss';
import Badge from '../../../../components/Badge/badge';
import { runPerspectiveAnimations } from './perspectiveAnimations';

const cards = [
  {
    img: '/Assets/rocket.png',
    title: 'Outcomes Over Assets',
    desc: 'We do not just deliver websites or designs. We deliver clarity for your audience, conversions for your business, and foundations for your growth.',
  },
  {
    img: '/Assets/rocket.png',
    title: 'Outcomes Over Assets',
    desc: 'We do not just deliver websites or designs. We deliver clarity for your audience, conversions for your business, and foundations for your growth.',
  },
  {
    img: '/Assets/rocket.png',
    title: 'Outcomes Over Assets',
    desc: 'We do not just deliver websites or designs. We deliver clarity for your audience, conversions for your business, and foundations for your growth.',
  },
];

const PerspectiveCard = ({ img, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? '#B123FD' : 'transparent'}`,
        backgroundColor: hovered ? '#1A2147' : '#141A37',
        boxShadow: hovered ? '0 8px 32px rgba(177, 35, 253, 0.15)' : 'none',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      }}
    >
      <img
        className={styles.img}
        src={img}
        alt=""
        style={{
          transition: 'transform 0.3s ease',
          transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
        }}
      />
      <div className={styles.text}>
        <div
          className={styles.text1}
          style={{
            transition: 'color 0.3s ease',
            color: hovered ? '#C836F2' : 'white',
          }}
        >
          {title}
        </div>
        <div
          className={styles.text2}
          style={{
            transition: 'color 0.3s ease',
            color: hovered ? 'rgba(255,255,255,0.9)' : 'white',
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

const Perspective = () => {
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const cardContRef = useRef(null);

  useEffect(() => {
    const ctx = runPerspectiveAnimations({ badgeRef, h1Ref, cardContRef });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <div ref={badgeRef} style={{ opacity: 0 }}>
        <Badge text="OUR PERSPECTIVE" />
      </div>
      <div ref={h1Ref} className={styles.h1} style={{ opacity: 0 }}>
        How We Think About <span className={styles.span}>Digital</span>
      </div>
      <div ref={cardContRef} className={styles.cardCont}>
        {cards.map((card, i) => (
          <div key={i} style={{ opacity: 0 }}>
            <PerspectiveCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perspective;