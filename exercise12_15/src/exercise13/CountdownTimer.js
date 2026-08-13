import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const CountdownTimer = ({ initialValue = 60 }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 fw-normal">Time Remaining: {timeRemaining}</h1>
    </Container>
  );
};
export default CountdownTimer;