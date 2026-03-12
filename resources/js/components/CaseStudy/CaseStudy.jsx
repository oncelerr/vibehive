import React, { useState } from 'react';
import styles from './CaseStudy.module.scss';
import Badge from '../Badge/badge';
import GradientButton from '../GradientButton/button';
import { useNavigate } from 'react-router-dom';

export default function CaseStudy({ img, tags = [], title, desc, link }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className={styles.img}
        src={`/Assets/${img}.png`}
        alt=""
        style={{
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.4s ease',
          boxShadow: hovered ? '0 12px 40px rgba(177, 35, 253, 0.2)' : 'none',
        }}
      />
      <div className={styles.right}>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              text={tag}
              style={{
                marginBottom: '0',
                backgroundColor: '#141A37',
                color: '#fff',
                height: '34px',
                textTransform: 'none',
              }}
            />
          ))}
        </div>
        <div
          className={styles.title}
          style={{
            transition: 'color 0.3s ease',
            color: hovered ? '#C836F2' : 'white',
          }}
        >
          {title}
        </div>
        <p
          className={styles.desc}
          style={{
            transition: 'color 0.3s ease',
            color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
          }}
        >
          {desc}
        </p>
        <GradientButton
          text="View Case Study"
          color="white"
          hasArrow="true"
          func={() => navigate(link)}
        />
      </div>
    </div>
  );
}