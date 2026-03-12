import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runHowWeWorkAnimations = ({ headerRef, timelineRef, bubbleRefs, cardRefs, connectorRefs, footerRef }) => {
  const ctx = gsap.context(() => {

    // Header fade in
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 40 },
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

    // Footer fade in
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          once: true,
        },
      }
    );

    // Bubble + card meteorite entrance
    bubbleRefs.current.forEach((bubble, i) => {
      const card = cardRefs.current[i];
      if (!bubble || !card) return;

      const fromX = i % 2 === 0 ? -120 : 120;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bubble,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1.5,
        },
      });

      tl.fromTo(bubble,
        { opacity: 0, x: fromX, y: -80, scale: 0.4, rotation: i % 2 === 0 ? -45 : 45 },
        { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, ease: 'power3.out', duration: 1 }
      )
      .fromTo(card,
        { opacity: 0, x: fromX * 0.5, y: 30 },
        { opacity: 1, x: 0, y: 0, ease: 'power3.out', duration: 0.8 },
        '-=0.4'
      );
    });

    // Connector line draw animation
    connectorRefs.current.forEach((connector) => {
      if (!connector) return;

      const line = connector.firstElementChild;
      if (!line) return;

      gsap.fromTo(line,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: connector,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 1,
          },
        }
      );
    });

  });

  return ctx;
};