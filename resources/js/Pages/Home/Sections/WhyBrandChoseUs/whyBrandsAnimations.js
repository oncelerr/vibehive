import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runWhyBrandsAnimations = ({ titleRef, rowRefs }) => {
  const ctx = gsap.context(() => {

    // Title fade in
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Each row of cards staggers in
    rowRefs.current.forEach((row) => {
      if (!row) return;

      gsap.fromTo(
        row.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

  });

  return ctx;
};