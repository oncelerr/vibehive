import React, { useState } from 'react';

export default function Feedback({ comment, name, company }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                width: '522px',
                height: '217px',
                flexDirection: 'column',
                gap: '0',
                transition: 'transform 0.3s ease',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
        >
            <img
                style={{
                    width: '40px',
                    height: '30px',
                    marginBottom: '18.02px',
                    transition: 'opacity 0.3s ease',
                    opacity: hovered ? 1 : 0.7,
                }}
                src="/Assets/quote.png"
                alt=""
            />
            <div style={{
                width: '100%',
                display: 'flex',
                gap: '29px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '32px',
            }}>
                <div style={{
                    width: '8px',
                    height: '83px',
                    backgroundColor: '#EB55EC',
                    transition: 'box-shadow 0.3s ease',
                    boxShadow: hovered ? '0 0 12px rgba(235, 85, 236, 0.6)' : 'none',
                }} />
                <div style={{
                    color: hovered ? '#fff' : 'rgba(255,255,255,0.8)',
                    fontFamily: 'Outfit',
                    fontSize: '18px',
                    fontWeight: '300',
                    transition: 'color 0.3s ease',
                }}>
                    "{comment}"
                </div>
            </div>
            <div style={{
                color: '#fff',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '20px',
                fontWeight: '600',
                margin: '0',
                padding: '0',
                transition: 'color 0.3s ease',
                color: hovered ? '#C836F2' : '#fff',
            }}>
                {name}
            </div>
            <div style={{
                color: '#EB55EC',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '14px',
                fontWeight: '400',
                marginTop: '0px',
                padding: '0',
                transition: 'opacity 0.3s ease',
                opacity: hovered ? 1 : 0.8,
            }}>
                {company}
            </div>
        </div>
    );
}