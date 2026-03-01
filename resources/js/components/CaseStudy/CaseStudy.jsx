import React from 'react';
import styles from './CaseStudy.module.scss';
import Badge from '../Badge/badge';
import GradientButton from '../GradientButton/button';
import { useNavigate } from 'react-router-dom';

export default function CaseStudy({ img, tags = [], title, desc, link }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={`/Assets/${img}.png`} alt="" />
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
                  textTransform: 'none'
                }}
              />
            ))}
          </div>
          <div className={styles.title}>{title}</div>
          <p className={styles.desc}>{desc}</p>
          <GradientButton
            text="View Case Study"
            color="white"
            hasArrow="true"
            func={() => navigate(link)}
          />
        </div>
      </div>
    </>
  );
};