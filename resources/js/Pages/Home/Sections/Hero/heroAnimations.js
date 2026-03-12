import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runHeroAnimations = ({ h1Ref, pRef, btnRef, worksRef, transitionWrpRef, countRefs, stats }) => {
  const ctx = gsap.context(() => {

    // Hero entrance animations (on load)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(h1Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9 }
    )
    .fromTo(pRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.5'
    )
    .fromTo(btnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    );

    // Stats count-up on scroll
    countRefs.current.forEach((el, i) => {
      const target = stats[i].value;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: worksRef.current,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.floor(obj.val)}${stats[i].suffix}`;
        },
      });
    });

    // Stats items fade in on scroll
    gsap.fromTo(
      worksRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: worksRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Transition section fade in on scroll
    gsap.fromTo(
      transitionWrpRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: transitionWrpRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

  });

  return ctx;
};