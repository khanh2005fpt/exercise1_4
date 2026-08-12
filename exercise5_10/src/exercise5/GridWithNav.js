import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function GridWithNav() {
  return (
    <Container className="my-4">

      {/* Header */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1 className="display-5 fw-bold">
          Let's test the grid!
        </h1>
      </div>

      {/* Navigation */}
      <Nav className="mb-4">
        <Nav.Item>
          <Nav.Link href="#active" active>
            Active
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#link">
            Link
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#link">
            Link
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Grid structure */}
      <div className="p-3" style={{ width: '90%',  margin: '0 auto'}}>

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
      <footer className="text-center py-4 bg-secondary bg-opacity-25 rounded">
        <h3 className="m-0 fw-bold">
          Created by ABC!
        </h3>
      </footer>

    </Container>
  );
}

export default GridWithNav;