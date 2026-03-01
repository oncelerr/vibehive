import React from 'react';

export default function MemberCard({ name, role, description, link }) {

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
        width: '417px',
        height: '423px',
      }}>
        <div style={{
          fontFamily: 'Outfit',
          fontSize: '32px',
          fontWeight: '500'
        }}>{name}</div>
        <div style={{
          fontFamily: 'Outfit',
          fontSize: '18px',
          fontWeight: '400',
          color: '#B123FD',
          lineHeight: '152%'
        }}>{role}</div>
        <div style={{
          fontFamily: 'Manrope',
          fontSize: '16px',
          fontWeight: '300',
          color: '#fff',
          lineHeight: '152%'
        }}>{description}</div>
        <img style={{
          width: '22px',
          height: '22px',
        }} src="/Assets/reverselinkedin.png" alt="" />
      </div >
    </>
  );
};