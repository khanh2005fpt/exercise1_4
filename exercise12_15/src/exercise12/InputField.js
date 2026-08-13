import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';

const InputField = () => {
  const [text, setText] = useState("abc");
  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <div className="w-50">
        <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} className="fs-4 py-2 mb-4" />
        <h1 className="display-5 fw-normal text-center">Input text: {text}</h1>
      </div>
    </Container>
  );
};
export default InputField;