import React from 'react';

export default function Navbar() {
  return (
    <div>

      <nav style={{ backgroundColor: '#444', padding: '15px 20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <a href="#home" style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px 15px', textDecoration: 'none' }}>Home</a>
        <a href="#search" style={{ color: 'white', textDecoration: 'none' }}>Search</a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        <a href="#login" style={{ backgroundColor: 'black', color: 'white', padding: '10px 15px', textDecoration: 'none' }}>Login</a>
      </nav>
    </div>
  );
}