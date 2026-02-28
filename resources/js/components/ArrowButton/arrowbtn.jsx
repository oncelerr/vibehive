import React from 'react';

export default function ArrowButton({ position, func }) {
    return (
        <button style={{
            all: 'unset',
            cursor: 'pointer',
            width: '48px',
            height: '48px',
            backgroundColor: '#333333',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }} onClick={func}>
            <img src={`/Assets/${position}arrow.png`} alt={`${position} arrow`} />
        </button>
    );
}