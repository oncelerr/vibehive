import React from 'react';

export default function Feedback({ comment, name, company }) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '522px',
                    height: '217px',
                    flexDirection: 'column',
                    gap: '0'
                }}
            >
                <img style={{ width: '40px', height: '30px', marginBottom: '18.02px' }} src="/Assets/quote.png" alt="" />
                <div style={{
                    width: '100%', display: 'flex', gap: '29px', justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '32px'
                }}>
                    <div style={{ width: '8px', height: '83px', backgroundColor: '#EB55EC' }} />
                    <div style={{ color: "#fff", fontFamily: 'Outfit', fontSize: '18px', fontWeight: '300' }}> "{comment}" </div>
                </div>
                <div style={{color: "#fff", fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '600', margin: '0', padding: '0'}}>{name}</div>\
                <div style={{color: "#EB55EC", fontFamily: 'Plus Jakarta Sans', fontSize: '14px', fontWeight: '400', marginTop: '-15px', padding: '0'}}>{company}</div>
            </div>
        </>
    );
}