import React, { useState } from 'react';

export default function Dropdown({ text, desc, style }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{
            backgroundColor: '#141A37',
            padding: '19px 23px',
            borderRadius: '16px',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '500',
            color: 'white',
            ...style
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {text}
                <button
                    onClick={() => setOpen(!open)}
                    style={{
                        all: 'unset',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#A719F9',
                        cursor: 'pointer',
                        flexShrink: 0,
                        transition: 'transform 300ms ease',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
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
                    <hr style={{marginTop: '19px', opacity: '0.1'}}/>
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