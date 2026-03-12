import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runFindOutAnimations = ({ badgeRef, h1Ref, pRef, airplaneRef, formRef }) => {
  const ctx = gsap.context(() => {

    // Entrance timeline on load
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
    )
    .fromTo(airplaneRef.current,
      { opacity: 0, x: 60, rotate: -20 },
      { opacity: 1, x: 0, rotate: 0, duration: 0.8, ease: 'back.out(1.4)' },
      '-=0.4'
    );

    // Form slides up on scroll
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

  });

  return ctx;
};