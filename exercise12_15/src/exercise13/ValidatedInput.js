import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';

const ValidatedInput = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Ví dụ hàm kiểm tra: Input hợp lệ khi có ít nhất 6 ký tự
  const validationFunction = (val) => val.length >= 6;
  const errorMessage = "Input must be at least 6 characters long.";

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value]);

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <div className="w-50">
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`fs-4 mb-2 ${!isValid ? 'border-danger' : ''}`}
          placeholder="Type something..."
        />
        {!isValid && <p className="text-danger fs-5">{errorMessage}</p>}
      </div>
    </Container>
  );
};
export default ValidatedInput;