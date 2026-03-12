import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runPerspectiveAnimations = ({ badgeRef, h1Ref, cardContRef }) => {
  const ctx = gsap.context(() => {

    gsap.fromTo(
      [badgeRef.current, h1Ref.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: badgeRef.current, start: 'top 85%', once: true },
      }
    );

    gsap.fromTo(
      cardContRef.current.children,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: cardContRef.current, start: 'top 85%', once: true },
      }
    );

  });

  return ctx;
};