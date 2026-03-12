import React, { useState } from 'react';

export default function MemberCard({ name, role, description, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '48px',
        gap: '16px',
        backgroundColor: hovered ? '#1A2147' : '#141A37',
        color: 'white',
        borderRadius: '16px',
        width: '417px',
        height: '423px',
        border: `1px solid ${hovered ? '#B123FD' : 'transparent'}`,
        boxShadow: hovered ? '0 8px 32px rgba(177, 35, 253, 0.15)' : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: 'Outfit',
        fontSize: '32px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
        color: hovered ? '#fff' : '#fff',
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'Outfit',
        fontSize: '18px',
        fontWeight: '400',
        color: '#B123FD',
        lineHeight: '152%',
        transition: 'color 0.3s ease',
        color: hovered ? '#C836F2' : '#B123FD',
      }}>
        {role}
      </div>
      <div style={{
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: '300',
        color: hovered ? 'rgba(255,255,255,0.9)' : '#fff',
        lineHeight: '152%',
        transition: 'color 0.3s ease',
      }}>
        {description}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          style={{
            width: '22px',
            height: '22px',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
            opacity: hovered ? 1 : 0.7,
          }}
          src="/Assets/reverselinkedin.png"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
}