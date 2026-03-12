import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runFaqsAnimations = ({ headerRef, dropdownRefs }) => {
  const ctx = gsap.context(() => {

    // Header fades in
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Dropdowns stagger in one by one
    gsap.fromTo(
      dropdownRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: dropdownRefs.current[0],
          start: 'top 85%',
          once: true,
        },
      }
    );

  });

  return ctx;
};