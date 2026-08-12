import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Breadcrumb
} from 'react-bootstrap';

function StudentsDetail() {
  const students = [
    {
      id: 'DE160182',
      name: 'Nguyễn Hữu Quốc Khánh',
      location: 'DaNang',
      img: '../../images/sinhvien1.png'
    },
    {
      id: 'DE160377',
      name: 'Choy Vĩnh Thiện',
      location: 'QuangNam',
      img: '../../images/sinhvien2.png'
    },
    {
      id: 'DE160547',
      name: 'Đỗ Nguyên Phúc',
      location: 'QuangNam',
      img: '../../images/sinhvien3.png'
    },
    {
      id: 'DE170049',
      name: 'Lê Hoàng Minh',
      location: 'DaNang',
      img: '../../images/sinhvien4.png'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>

      {/* Top Navbar */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: '#e28316' }}
        className="py-2"
      >
        <Container fluid>

          <img src='../../images/FPTlogo.svg' style={{ width: '100px'}}/>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="gap-3">
              <Nav.Link href="#home" className="text-white">
                🏠 Trang chủ
              </Nav.Link>

              <Nav.Link href="#majors" className="text-white">
                ℹ️ Ngành học
              </Nav.Link>

              <Nav.Link href="#admission" className="text-white">
                🎫 Tuyển sinh
              </Nav.Link>

              <Nav.Link href="#students" className="text-white">
                📋 Sinh viên
              </Nav.Link>
            </Nav>

            <Form className="d-flex ms-auto">
              <Form.Label className="text-white me-2 mt-2">
                Search:
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Search..."
              />
            </Form>
          </Navbar.Collapse>

        </Container>
      </Navbar>


      {/* Banner */}
      <div
        className="py-3 mb-3"
        style={{ backgroundColor: '#f39c12' }}
      >
        <Container>
          <img
            src="../../images/sinhvien.jpg"
            alt="FPT Students"
            className="img-fluid w-100 rounded"
          />
        </Container>
      </div>


      {/* Main Content */}
      <Container className="mb-4">

        {/* Breadcrumb */}
        <Breadcrumb className="bg-light p-2 rounded">
          <Breadcrumb.Item href="#home" className="text-decoration-none">
            Home
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            Students
          </Breadcrumb.Item>
        </Breadcrumb>


        <h2 className="text-center fw-bold mb-4">
          Students Detail
        </h2>


        {/* Student Cards */}
        <Row className="g-4">

          {students.map((student, index) => (

            <Col md={6} key={student.id}>

              <Card className="shadow-sm text-center h-100">

                <Card.Body>

                  <Card.Img
                    variant="top"
                    src={student.img}
                    alt={student.name}
                    style={{
                      maxHeight: '300px',
                      objectFit: 'cover'
                    }}
                  />

                  <Card.Title className="text-muted mt-3">
                    {student.id}
                  </Card.Title>

                  <div className="d-flex justify-content-between align-items-center px-4 mb-3">

                    <span>
                      {student.name}
                    </span>

                    <span className="text-muted">
                      {student.location}
                    </span>

                  </div>


                  {/* Attendance */}
                  <div className="d-flex justify-content-around mb-3">

                    <Form.Check
                      type="radio"
                      label="Absent"
                      name={`attendance-${index}`}
                      id={`absent-${index}`}
                    />

                    <Form.Check
                      type="radio"
                      label="Present"
                      name={`attendance-${index}`}
                      id={`present-${index}`}
                      defaultChecked
                    />

                  </div>


                  <Button
                    variant="warning"
                    className="text-white w-50"
                  >
                    Submit
                  </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>


      {/* Footer */}
      <footer
        className="text-dark py-4 mt-5"
        style={{ backgroundColor: '#f39c12' }}
      >

        <Container>

          <Row>

            {/* Address */}
            <Col md={6}>

              <h5>Our Address</h5>

              <p className="m-0">
                Khu đô thị FPT Đà Nẵng
              </p>

              <p className="m-0">
                📞 +84023111111
              </p>

              <p className="m-0">
                📠 +852 8765 4321
              </p>

              <p className="m-0">
                ✉️ fptudn@fpt.edu.vn
              </p>

            </Col>


            {/* Social */}
            <Col
              md={6}
              className="text-md-end align-self-center"
            >

              <div className="d-flex justify-content-md-end gap-3 fs-4">

                <a
                  href="#google"
                  className="text-dark text-decoration-none"
                >
                  G+
                </a>

                <a
                  href="#facebook"
                  className="text-dark text-decoration-none"
                >
                  f
                </a>

                <a
                  href="#linkedin"
                  className="text-dark text-decoration-none"
                >
                  in
                </a>

                <a
                  href="#twitter"
                  className="text-dark text-decoration-none"
                >
                  🐦
                </a>

                <a
                  href="#youtube"
                  className="text-dark text-decoration-none"
                >
                  ▶
                </a>

                <a
                  href="#email"
                  className="text-dark text-decoration-none"
                >
                  ✉
                </a>

              </div>

            </Col>

          </Row>


          {/* Copyright */}
          <div className="text-center mt-3 pt-3 border-top border-light">
            <p className="m-0">
              © Copyright 2023
            </p>
          </div>

        </Container>

      </footer>

    </div>
  );
}

export default StudentsDetail;