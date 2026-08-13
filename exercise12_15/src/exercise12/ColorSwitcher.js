import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';

const ColorSwitcher = () => {
  const [color, setColor] = useState("");
  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <div className="w-25">
        <Form.Select className="fs-4 mb-4" onChange={(e) => setColor(e.target.value)}>
          <option>Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </Form.Select>
        {color && <div style={{ backgroundColor: color, width: '100%', height: '250px' }}></div>}
      </div>
    </Container>
  );
};
export default ColorSwitcher;