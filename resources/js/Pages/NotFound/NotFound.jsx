import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const NotFound = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const glitchRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(glitchRef.current,
        { opacity: 0, y: 60, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9 }
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(btnRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      );

      // Floating orbit animation
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 12,
        ease: 'none',
        repeat: -1,
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#080816',
      backgroundImage: `url('/assets/gridbg.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Glow circles */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(177,35,253,0.15) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235,85,236,0.1) 0%, transparent 70%)',
        bottom: '10%',
        right: '10%',
        pointerEvents: 'none',
      }} />

      {/* Orbiting ring */}
      <div ref={orbitRef} style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(177,35,253,0.15)',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#B123FD',
          top: '-5px',
          left: '50%',
          boxShadow: '0 0 12px rgba(177,35,253,0.8)',
        }} />
      </div>

      {/* 404 */}
      <div ref={glitchRef} style={{ opacity: 0, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'Outfit',
          fontSize: '180px',
          fontWeight: '800',
          lineHeight: 1,
          background: 'linear-gradient(to right, #BA2FFC 0%, #B123FD 32%, #A617F8 75%, #EB55EC 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          userSelect: 'none',
          filter: 'drop-shadow(0 0 40px rgba(177,35,253,0.4))',
        }}>
          404
        </div>
      </div>

      {/* Text */}
      <div ref={subRef} style={{ opacity: 0, textAlign: 'center', zIndex: 1, marginTop: '16px' }}>
        <div style={{
          fontFamily: 'Outfit',
          fontSize: '32px',
          fontWeight: '600',
          color: 'white',
          marginBottom: '12px',
        }}>
          Lost in the Digital Void
        </div>
        <p style={{
          fontFamily: 'Manrope',
          fontSize: '16px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '420px',
          lineHeight: '1.6',
          margin: '0 auto',
        }}>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
      </div>

      {/* Button */}
      <div ref={btnRef} style={{ opacity: 0, marginTop: '40px', zIndex: 1, display: 'flex', gap: '16px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            all: 'unset',
            cursor: 'pointer',
            padding: '12px 32px',
            borderRadius: '50px',
            background: 'linear-gradient(to right, #BA2FFC 0%, #B123FD 32%, #A617F8 75%, #EB55EC 100%)',
            color: 'white',
            fontFamily: 'Outfit',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.88';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(177,35,253,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Back to Home →
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{
            all: 'unset',
            cursor: 'pointer',
            padding: '12px 32px',
            borderRadius: '50px',
            border: '1px solid rgba(177,35,253,0.4)',
            color: 'white',
            fontFamily: 'Outfit',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'border-color 0.25s ease, transform 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#B123FD';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(177,35,253,0.4)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Go Back
        </button>
      </div>

    </div>
  );
};

export default NotFound;