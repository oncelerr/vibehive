import React from 'react';
import styles from './Founders.module.scss';
import MemberCard from '../../../../components/MemberCard/membercard';

const Founders = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.h1}>The <span className={styles.span}>Founders</span></div>
        <div className={styles.founder}>
          <MemberCard
            name={"Aoi"}
            role={"Strategy, Systems & Quality Control"}
            description={"The one that works across strategy and operations so things don’t feel harder than they should. Focused on keeping work organized, aligned, and moving forward bringing clarity, consistency, and systems that simply work."}
            link={"/"}
          />
          <MemberCard
            name={"Ino"}
            role={"Vision, Sales & Client Relations"}
            description={"Ino leads client relationships and business development at Vibe Hive, bringing [relevant experience] to ensure every engagement delivers real results. His approach: listen first, advise honestly, and only commit to projects where Vibe Hive can genuinely add value. If it's not the right fit, he'll tell you upfront."}
            link={"/"}
          />
        </div>
        <div className={styles.h12}><div className={styles.hr} />The <span className={styles.span1}>Team</span><div className={styles.hr2} /></div>
        <div className={styles.teamCard}>
          <img src="/Assets/team.png" alt="" />
          <p className={styles.teamP}>Behind every Vibe Hive project is a dedicated team of specialists: UI/UX designers who obsess over user experience, developers who write clean and performant code, SEO strategists who build for visibility, and project managers who keep everything running smoothly.
            <br /><br />
            We are small by design. This means every client works directly with the people doing the work, not layers of account managers.</p>
        </div>
      </div>
    </>
  );
};

export default Founders;