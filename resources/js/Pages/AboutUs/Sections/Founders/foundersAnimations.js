import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runFoundersAnimations = ({ h1Ref, founderRef, teamTitleRef, teamCardRef }) => {
  const ctx = gsap.context(() => {

    gsap.fromTo(h1Ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: h1Ref.current, start: 'top 85%', once: true },
      }
    );

    gsap.fromTo(
      founderRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: founderRef.current, start: 'top 85%', once: true },
      }
    );

    gsap.fromTo(teamTitleRef.current,
      { opacity: 0, scaleX: 0.8 },
      {
        opacity: 1, scaleX: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: teamTitleRef.current, start: 'top 85%', once: true },
      }
    );

    gsap.fromTo(teamCardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: teamCardRef.current, start: 'top 85%', once: true },
      }
    );

  });

  return ctx;
};