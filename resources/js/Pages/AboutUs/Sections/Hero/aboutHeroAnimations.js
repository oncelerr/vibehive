import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runAboutHeroAnimations = ({ badgeRef, h1Ref, teamRef }) => {
  const ctx = gsap.context(() => {

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(h1Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.3'
    )
    .fromTo(teamRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    );

  });

  return ctx;
};