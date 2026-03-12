import React, { useState } from 'react';

export default function Dropdown({ text, desc, style }) {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered || open ? '#1A2147' : '#141A37',
                padding: '19px 23px',
                borderRadius: '16px',
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: '500',
                color: 'white',
                border: `1px solid ${open ? '#B123FD' : hovered ? 'rgba(177, 35, 253, 0.3)' : 'transparent'}`,
                boxShadow: open ? '0 8px 32px rgba(177, 35, 253, 0.12)' : 'none',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                ...style,
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
            }}
                onClick={() => setOpen(!open)}
            >
                <span style={{
                    transition: 'color 0.3s ease',
                    color: open ? '#C836F2' : hovered ? 'rgba(255,255,255,0.9)' : 'white',
                }}>
                    {text}
                </span>
                <button
                    style={{
                        all: 'unset',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: open ? '#C836F2' : '#A719F9',
                        cursor: 'pointer',
                        flexShrink: 0,
                        transition: 'transform 300ms ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        boxShadow: open ? '0 0 12px rgba(200, 54, 242, 0.5)' : 'none',
                    }}
                >
                    <img src="/Assets/chevrondown.png" alt="" />
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateRows: open ? '1fr' : '0fr',
                transition: 'grid-template-rows 300ms ease',
            }}>
                <div style={{ overflow: 'hidden' }}>
                    <hr style={{ marginTop: '19px', opacity: '0.1' }} />
                    <p style={{
                        margin: 0,
                        paddingTop: '16px',
                        fontSize: '15px',
                        fontWeight: '400',
                        color: '#9CA3AF',
                        lineHeight: '1.6',
                    }}>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}