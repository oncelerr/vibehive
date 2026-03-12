import React, { useState } from 'react';

export default function Badge({ text, style = {} }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 16px',
                backgroundColor: hovered ? '#1E1060' : '#141A37',
                color: 'white',
                borderRadius: '50px',
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '24px',
                border: `1px solid ${hovered ? '#C836F2' : '#B123FD'}`,
                textTransform: 'uppercase',
                width: 'fit-content',
                height: '47px',
                cursor: 'default',
                transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                boxShadow: hovered ? '0 0 12px rgba(177, 35, 253, 0.4)' : 'none',
                ...style,
            }}
        >
            {text}
        </div>
    );
}