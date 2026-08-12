import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GridTest() {
  return (
    <Container className="my-4">

      {/* Header section */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1 className="display-5 fw-bold">
          Let's test the grid!
        </h1>
      </div>

      {/* Grid structure */}
      <div className="mb-4">

        {/* 2 columns */}
        <Row>
          <Col md={6} className="border bg-light py-3">
            First col
          </Col>

          <Col md={6} className="border bg-light py-3">
            Second col
          </Col>
        </Row>

        {/* 3 columns */}
        <Row>
          <Col md={4} className="border bg-light py-3">
            col
          </Col>

          <Col md={4} className="border bg-light py-3">
            col
          </Col>

          <Col md={4} className="border bg-light py-3">
            col
          </Col>
        </Row>

        {/* 4 columns */}
        <Row>
          <Col md={3} className="border bg-light py-3">
            col
          </Col>

          <Col md={3} className="border bg-light py-3">
            col
          </Col>

          <Col md={3} className="border bg-light py-3">
            col
          </Col>

          <Col md={3} className="border bg-light py-3">
            col
          </Col>
        </Row>

      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-secondary rounded">
        <h3 className="m-0 fw-bold" style={{ color: '#333' }}>
          Created by ABC!
        </h3>
      </footer>

    </Container>
  );
}

export default GridTest;