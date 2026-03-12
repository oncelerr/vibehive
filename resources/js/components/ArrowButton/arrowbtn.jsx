import React, { useState } from 'react';

export default function ArrowButton({ position, func }) {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            style={{
                all: 'unset',
                cursor: 'pointer',
                width: '48px',
                height: '48px',
                backgroundColor: hovered ? '#B123FD' : '#333333',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.25s ease, transform 0.25s ease',
                transform: hovered
                    ? position === 'left' ? 'scale(1.1) translateX(-2px)' : 'scale(1.1) translateX(2px)'
                    : 'scale(1)',
            }}
            onClick={func}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={`/Assets/${position}arrow.png`}
                alt={`${position} arrow`}
                style={{
                    transition: 'transform 0.25s ease',
                    transform: hovered
                        ? position === 'left' ? 'translateX(-2px)' : 'translateX(2px)'
                        : 'translateX(0)',
                }}
            />
        </button>
    );
}