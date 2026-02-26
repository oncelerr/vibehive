import React from 'react';

export default function Card({ img, text, description }) {

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
                width: '392.33px',
                height: '515px',
            }}>
                <img style={{
                    width: '291px',
                    height: '268px',
                    objectFit: 'cover'
                }} src={img} alt="" />
                <div style={{
                    fontFamily: 'Outfit',
                    fontSize: '24px',
                    fontWeight: '500'
                }}>{text}</div>
                <div style={{
                    fontFamily: 'Manrope',
                    fontSize: '14px',
                    fontWeight: '300',
                    color: '#BFBFBF',
                    lineHeight: '152%'
                }}>{description}</div>
            </div >
        </>
    );
};