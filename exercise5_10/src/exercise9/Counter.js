import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Counter: {count}</h3>
      <Button variant="success" onClick={() => setCount(count + 1)} className="me-2">
        Increment (+)
      </Button>
      <Button variant="danger" onClick={() => setCount(count - 1)}>
        Decrement (-)
      </Button>
    </div>
  );
};