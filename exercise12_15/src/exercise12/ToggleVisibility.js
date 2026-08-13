import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ToggleVisibility = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <Button variant="light" className="px-5 py-2 mb-4 fs-3" onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </Button>
      {visible && <h1 className="display-4 fw-normal">Toggle me!</h1>}
    </Container>
  );
};
export default ToggleVisibility;