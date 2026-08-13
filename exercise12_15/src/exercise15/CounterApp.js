import React, { useReducer } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

export default function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 mb-4">Count: {state.count}</h1>
      <Stack direction="horizontal" gap={3}>
        <Button variant="light" className="px-4 py-2 fs-5" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
        <Button variant="light" className="px-4 py-2 fs-5" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
        <Button variant="secondary" className="px-4 py-2 fs-5" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
      </Stack>
    </Container>
  );
}