import { gsap } from 'gsap';

export const runPortfolioHeroAnimations = ({ badgeRef, h1Ref, pRef }) => {
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
    .fromTo(pRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    );

  });

  return ctx;
};