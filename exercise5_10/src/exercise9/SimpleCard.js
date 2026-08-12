import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function SimpleCard() {
  return (
    <Container className="my-5">

      {/* Phiên bản thực tế (FPT Example) */}
      <Card className="shadow-sm p-3 mb-5">
        <Row className="align-items-center">

          <Col md={6} className="text-start">
            <img
              src="../../images/FPTlogo.svg"
              alt="FPT Logo"
              className="img-fluid"
              style={{ maxWidth: '150px' }}
            />
          </Col>

          <Col
            md={6}
            className="text-md-end text-start mt-3 mt-md-0"
          >
            <h5 className="fw-bold mb-1" style={{ color: '#333' }}>
              Hoai Nguyen - FPT DaNang
            </h5>

            <p className="text-muted m-0">
              Mobile: 0982827763
            </p>
          </Col>

        </Row>
      </Card>


      {/* Phiên bản khung cơ bản */}
      <div
        className="p-3 bg-white rounded"
        style={{
          border: '2px solid blue',
          maxWidth: '600px'
        }}
      >
        <Row className="g-0 align-items-center">

          {/* Cột ảnh / IMG */}
          <Col
            xs={4}
            className="p-2 text-center"
            style={{
              backgroundColor: '#fdf3c7',
              border: '1px solid orange'
            }}
          >
            <span
              className="fw-bold fs-3"
              style={{ color: '#d4ac0d' }}
            >
              IMG
            </span>
          </Col>

          {/* Cột tiêu đề và mô tả */}
          <Col xs={8}>

            <div
              className="p-2"
              style={{ borderBottom: '1px solid orange' }}
            >
              <h4
                className="fw-bold m-0"
                style={{ color: '#e67e22' }}
              >
                A Title
              </h4>
            </div>

            <div
              className="p-2"
              style={{ borderBottom: '1px solid #ccc' }}
            >
              <p className="text-secondary m-0">
                The description goes here.
              </p>
            </div>

          </Col>

        </Row>
      </div>

    </Container>
  );
}

export default SimpleCard;