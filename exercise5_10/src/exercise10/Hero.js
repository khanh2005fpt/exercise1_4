import React from 'react';

export default function Hero() {
  return (
    <div 
      className="position-relative text-center d-flex justify-content-center align-items-center"
      style={{
        height: '400px',
        backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
      <div className="position-relative p-4 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <h1 className="display-5 fw-bold mb-2 text-white">Neapolitan Pizza</h1>
        <p className="text-light fs-6 mb-0">Authentic Italian taste in every bite</p>
      </div>
    </div>
  );
}