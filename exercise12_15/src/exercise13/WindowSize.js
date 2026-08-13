import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <h2 className="display-5">Window size: {windowSize.width} x {windowSize.height}</h2>
    </Container>
  );
};
export default WindowSize;