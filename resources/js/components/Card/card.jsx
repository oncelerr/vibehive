import React, { useState } from 'react';

export default function Card({ img, text, description }) {
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
                width: '392.33px',
                height: '515px',
                border: `1px solid ${hovered ? '#B123FD' : 'transparent'}`,
                boxShadow: hovered ? '0 8px 32px rgba(177, 35, 253, 0.15)' : 'none',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'default',
            }}
        >
            <img
                style={{
                    width: '291px',
                    height: '268px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hovered ? 'scale(1.03)' : 'scale(1)',
                }}
                src={img}
                alt=""
            />
            <div style={{
                fontFamily: 'Outfit',
                fontSize: '24px',
                fontWeight: '500',
            }}>
                {text}
            </div>
            <div style={{
                fontFamily: 'Manrope',
                fontSize: '14px',
                fontWeight: '300',
                color: hovered ? '#FFFFFF' : '#BFBFBF',
                lineHeight: '152%',
                transition: 'color 0.3s ease',
            }}>
                {description}
            </div>
        </div>
    );
}