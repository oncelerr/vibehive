import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runTestimonialsAnimations = ({ headerRef, carouselRef }) => {
  const ctx = gsap.context(() => {

    // Header left and right slide in from opposite sides
    gsap.fromTo(
      headerRef.current.children[0], // left (badge + title)
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      headerRef.current.children[1], // right (arrow buttons)
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Carousel fades up
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, y: 50 },
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

  });

  return ctx;
};