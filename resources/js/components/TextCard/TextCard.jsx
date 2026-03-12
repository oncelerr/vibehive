import React, { useState } from 'react';

export default function Card({ text, description }) {
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
        width: '605.5px',
        height: '196px',
        border: `1px solid ${hovered ? '#B123FD' : 'transparent'}`,
        boxShadow: hovered ? '0 8px 32px rgba(177, 35, 253, 0.15)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: 'Outfit',
        fontSize: '32px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
        color: hovered ? '#C836F2' : '#fff',
      }}>
        {text}
      </div>
      <div style={{
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: '300',
        color: hovered ? 'rgba(255,255,255,0.9)' : '#BFBFBF',
        lineHeight: '152%',
        transition: 'color 0.3s ease',
      }}>
        {description}
      </div>
    </div>
  );
}