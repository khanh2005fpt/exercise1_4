import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Counter = () => {
  const [count, setCount] = useState(6);
  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <Button variant="light" className="px-4 py-2 mb-4 fs-4" onClick={() => setCount(count + 1)}>Increment</Button>
      <h1 className="display-4 fw-normal">Count: {count}</h1>
    </Container>
  );
};
export default Counter;