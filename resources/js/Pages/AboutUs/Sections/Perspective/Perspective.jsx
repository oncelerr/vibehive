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
    title: 'Honesty Over Hype',
    desc: 'We will tell you what works, what does not, and what you actually need. If we are not the right fit for your project, we will say so upfront.',
  },
  {
    img: '/Assets/rocket.png',
    title: 'Systems Over Services',
    desc: 'A beautiful website that does not convert is just an expensive brochure. We build complete systems where strategy, design, development, and optimization work together.',
  },
];

const PerspectiveCard = ({ img, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.hovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className={styles.img} src={img} alt="" />
      <div className={styles.text}>
        <div className={styles.text1}>{title}</div>
        <div className={styles.text2}>{desc}</div>
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