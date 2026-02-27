import React from 'react';

export default function Badge({ text , style = {}}) {

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 16px',
                backgroundColor: '#141A37',
                color: 'white',
                borderRadius: '50px',
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '24px',
                border: '1px solid #B123FD',
                textTransform: 'uppercase',
                width: 'fit-content',
                height: '47px',
                ...style
            }}>
                {text}
            </div >
        </>
    );
};