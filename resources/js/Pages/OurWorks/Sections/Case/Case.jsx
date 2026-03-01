import React from 'react';
import styles from './Case.module.scss';
import CaseStudy from '../../../../components/CaseStudy/CaseStudy';

const Case = () => {

  return (
    <>
      <div className={styles.container}>
        <CaseStudy
          img={'casestudykogh'}
          tags={['Visual Design', 'Visual Design', 'Visual Design']}
          title={'Coca - Tech Startup Landing Page'}
          desc={'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'}
          link={'/case-study?company=kogh'}
        />
        <CaseStudy
          img={'casestudykogh'}
          tags={['Visual Design', 'Visual Design', 'Visual Design']}
          title={'Coca - Tech Startup Landing Page'}
          desc={'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'}
          link={'/case-study?company=kogh'}
        />
        <CaseStudy
          img={'casestudykogh'}
          tags={['Visual Design', 'Visual Design', 'Visual Design']}
          title={'Coca - Tech Startup Landing Page'}
          desc={'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.'}
          link={'/case-study?company=kogh'}
        />
      </div>
    </>
  );
};

export default Case;