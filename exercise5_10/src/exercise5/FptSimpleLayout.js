import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col
} from 'react-bootstrap';

function FptSimpleLayout() {
  return (
    <div>
      {/* Header / Banner */}
      <header className="text-center py-4" style={{ background: 'orange'}}>
        <img src='../../images/FPTlogo.svg' style={{ background: 'white'}}/>

        <Navbar>
          <Container className="justify-content-center">
            <Nav className="gap-4">
              <Nav.Link
                href="#home"
                className="text-white fw-bold"
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about"
                className="text-white fw-bold"
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className="text-white fw-bold"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      {/* Main Content */}
      <Container className="text-center my-5">
        <Row>
          <Col>
            <section id="about" className="mb-5">
              <h2 className="fw-bold mb-3">
                About
              </h2>

              <p>
                This is the about section of the website.
              </p>
            </section>
          </Col>
        </Row>

        <Row>
          <Col>
            <section id="contact">
              <h2 className="fw-bold mb-3">
                Contact
              </h2>

              <p>
                For any inquiries, please contact us at
                example@example.com.
              </p>
            </section>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3 bg-warning">
        <p className="m-0 text-light">
          © 2023 Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default FptSimpleLayout;