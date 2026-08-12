import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function BookingSection() {
  return (
    <Container className="py-5 text-center" style={{ maxWidth: '800px' }}>
      {/* CSS tùy chỉnh màu placeholder cho sáng lên */}
      <style>{`
        .custom-dark-input::placeholder {
          color: #adb5bd !important;
          opacity: 1;
        }
      `}</style>

      <h2 className="mb-4 fw-normal fs-3">Book Your Table</h2>
      <Form>
        <Row className="g-3 mb-3 justify-content-center">
          <Col md={4} className="text-center">
            <Form.Label className="text-light" style={{ fontSize: '12px' }}>Your Name *</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              className="bg-dark text-white border-secondary text-center custom-dark-input"
              style={{ fontSize: '13px' }}
            />
          </Col>
          <Col md={4} className="text-center">
            <Form.Label className="text-light" style={{ fontSize: '12px' }}>Date *</Form.Label>
            <Form.Control 
              type="date" 
              className="bg-dark text-white border-secondary text-center custom-dark-input"
              style={{ fontSize: '13px' }}
            />
          </Col>
          <Col md={4} className="text-center">
            <Form.Label className="text-light" style={{ fontSize: '12px' }}>Select a Service *</Form.Label>
            <Form.Select 
              className="bg-dark text-white border-secondary text-center"
              style={{ fontSize: '13px' }}
            >
              <option className="text-dark" value="">Choose service...</option>
            </Form.Select>
          </Col>
        </Row>

        <div className="text-center mb-4">
          <Form.Label className="text-light d-block text-center" style={{ fontSize: '12px' }}>Please share your message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="Write your message..." 
            className="bg-dark text-white border-secondary custom-dark-input"
            style={{ fontSize: '13px', resize: 'none' }}
          />
        </div>

        <Button 
          type="submit" 
          className="fw-bold border-0 text-dark px-4 py-2" 
          style={{ backgroundColor: '#f1c40f', fontSize: '13px' }}
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
}