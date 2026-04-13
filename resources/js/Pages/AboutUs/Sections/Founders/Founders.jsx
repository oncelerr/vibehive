import React, { useEffect, useRef } from 'react';
import styles from './Founders.module.scss';
import MemberCard from '../../../../components/MemberCard/membercard';
import { runFoundersAnimations } from './foundersAnimations';

const Founders = () => {
  const h1Ref = useRef(null);
  const founderRef = useRef(null);
  const teamTitleRef = useRef(null);
  const teamCardRef = useRef(null);

  useEffect(() => {
    const ctx = runFoundersAnimations({ h1Ref, founderRef, teamTitleRef, teamCardRef });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <div ref={h1Ref} className={styles.h1} style={{ opacity: 0 }}>
        The <span className={styles.span}>Founders</span>
      </div>
      <div ref={founderRef} className={styles.founder}>
        <MemberCard
          name="Aoi"
          role="Strategy, Systems & Quality Control"
          description="The one that works across strategy and operations so things don't feel harder than they should. Focused on keeping work organized, aligned, and moving forward bringing clarity, consistency, and systems that simply work."
          link="https://www.linkedin.com/in/vibewithaoi/"
        />
        <MemberCard
          name="Ino"
          role="Vision, Sales & Client Relations"
          description="Ino leads client relationships and business development at Vibe Hive, bringing relevant experience to ensure every engagement delivers real results. His approach: listen first, advise honestly, and only commit to projects where Vibe Hive can genuinely add value."
          link="https://www.linkedin.com/in/catalino-giron-a69094255/"
        />
      </div>
      <div ref={teamTitleRef} className={styles.h12} style={{ opacity: 0 }}>
        <div className={styles.hr} />
        The <span className={styles.span1}>Team</span>
        <div className={styles.hr2} />
      </div>
      <div ref={teamCardRef} className={styles.teamCard} style={{ opacity: 0 }}>
        <img className={styles.teamImg1} src="/Assets/team.png" alt="" />
        <img className={styles.teamImg2} src="/Assets/team1.png" alt="" />
        <p className={styles.teamP}>
          Behind every Vibe Hive project is a dedicated team of specialists: <span style={{ fontWeight: 'bold' }}>UI/UX designers</span> who obsess over user experience, <span style={{ fontWeight: 'bold' }}>developers</span> who write clean and performant code, <span style={{ fontWeight: 'bold' }}>SEO strategists</span> who build for visibility, and <span style={{ fontWeight: 'bold' }}>project managers</span> who keep everything running smoothly.
          <br /><br />
          We are small by design. This means every client works directly with the people doing the work, not layers of account managers.
        </p>
      </div>
    </div>
  );
};

export default Founders;