import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runSystemAnimations = ({ badgeRef, h3Ref, pRef, cardContRef }) => {
  const ctx = gsap.context(() => {

    // Badge, heading, paragraph stagger on scroll
    gsap.fromTo(
      [badgeRef.current, h3Ref.current, pRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Cards stagger on scroll
    gsap.fromTo(
      cardContRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardContRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

  });

  return ctx;
};