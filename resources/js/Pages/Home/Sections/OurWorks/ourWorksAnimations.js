import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runOurWorksAnimations = ({ badgeRef, titleRef, descRef, carouselRef, btnRef }) => {
  const ctx = gsap.context(() => {

    // Badge, title, description stagger
    gsap.fromTo(
      [badgeRef.current, titleRef.current, descRef.current],
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

    // Carousel slides up
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Button fades in
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: btnRef.current,
          start: 'top 90%',
          once: true,
        },
      }
    );

  });

  return ctx;
};