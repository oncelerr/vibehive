import React from 'react';

export default function Card({ text, description }) {

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '48px',
                gap: '16px',
                backgroundColor: '#141A37',
                color: 'white',
                borderRadius: '16px',
                width: '605.5px',
                height: '196px',
            }}>
                <div style={{
                    fontFamily: 'Outfit',
                    fontSize: '32px',
                    fontWeight: '500'
                }}>{text}</div>
                <div style={{
                    fontFamily: 'Manrope',
                    fontSize: '16px',
                    fontWeight: '300',
                    color: '#BFBFBF',
                    lineHeight: '152%'
                }}>{description}</div>
            </div >
        </>
    );
};