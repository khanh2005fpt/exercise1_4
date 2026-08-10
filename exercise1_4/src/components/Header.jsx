import React from 'react';

export default function Header() {
  return (
    <div style={{ marginBottom: '20px' }}>


      <section style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '40px'
        }}>
          Hello <span style={{ color: "blue", fontSize: '45px', fontWeight: 'bold' }}>React</span>
        </h1>
      </section>
    </div>
  );
}