import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3">
      <Container fluid>
        <style>{`
          .custom-dark-input::placeholder {
            color: #adb5bd !important;
            opacity: 1;
          }
        `}</style>
        <Navbar.Brand href="#" className="fw-bold fs-5">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="bg-dark text-white border-secondary shadow-none custom-dark-input"
                style={{ fontSize: '13px', width: '150px', height: '32px' }}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}