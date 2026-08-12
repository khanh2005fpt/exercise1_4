import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Carousel, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const Exercise6Layout = () => {
    return (
        <div className="bg-white min-vh-100">
            {/* 1. Navbar */}
            <Navbar bg="light" expand="lg" className="border-bottom py-2">
                <Container>
                    <Navbar.Brand href="#" className="text-secondary">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-between">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="text-secondary">Home</Nav.Link>
                            <Nav.Link href="#" className="text-secondary">Link</Nav.Link>
                            <Nav.Link href="#" className="text-secondary">Dropdown</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 rounded-0 shadow-none"
                                aria-label="Search"
                                style={{ borderColor: '#ced4da' }}
                            />
                            <Button variant="outline-primary" className="rounded-0 px-3">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* 2. Carousel Banner */}
            <Container fluid className="px-0 mb-5">
                <Carousel indicators={true} controls={true} interval={3000}>
                    <Carousel.Item>
                        <div
                            className="d-flex flex-column align-items-center justify-content-center text-secondary position-relative"
                            style={{ height: '530px', backgroundColor: '#d6d6d6' }}
                        >
                            <h1 className="fw-light display-4" style={{ letterSpacing: '2px' }}>1920 x 530</h1>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                            className="d-flex flex-column align-items-center justify-content-center text-secondary position-relative"
                            style={{ height: '530px', backgroundColor: '#cccccc' }}
                        >
                            <h1 className="fw-light display-4" style={{ letterSpacing: '2px' }}>1920 x 530 - Slide 2</h1>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                            className="d-flex flex-column align-items-center justify-content-center text-secondary position-relative"
                            style={{ height: '530px', backgroundColor: '#c2c2c2' }}
                        >
                            <h1 className="fw-light display-4" style={{ letterSpacing: '2px' }}>1920 x 530 - Slide 3</h1>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>

            {/* 3. Product Section */}
            <Container className="mb-5">
                <div className="mb-4">
                    <h3 className="text-secondary fw-normal mb-1">NEW PRODUCT</h3>
                    <p className="text-muted small mb-0">List product description</p>
                </div>

                <Row>
                    {[1, 2, 3, 4].map((item, index) => (
                        <Col md={3} sm={6} xs={12} key={item} className="mb-4">
                            <Card className="border rounded-0 shadow-none position-relative h-100">
                                {/* Nhãn Sale màu cam ở sản phẩm thứ 4 */}
                                {index === 3 && (
                                    <div
                                        className="position-absolute text-white text-center fw-bold"
                                        style={{
                                            top: '18px',
                                            right: '-32px',
                                            backgroundColor: '#ff9800',
                                            transform: 'rotate(45deg)',
                                            width: '110px',
                                            fontSize: '12px',
                                            zIndex: 2,
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        Sale
                                    </div>
                                )}

                                {/* Khung ảnh 280x280 */}
                                <div
                                    className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25 text-muted"
                                    style={{ height: '280px', width: '100%' }}
                                >
                                    <span>280 x 280</span>
                                </div>

                                <Card.Body className="px-3 py-3 d-flex flex-column justify-content-between">
                                    <div>
                                        <Card.Title className="text-secondary fs-6 mb-2">
                                            Product
                                        </Card.Title>

                                        <Card.Text className="mb-3 d-flex justify-content-between">
                                            <span className="text-muted text-decoration-line-through small">
                                                100.000 vnd
                                            </span>

                                            <span className="small fw-bold" style={{ color: 'orange' }}>
                                                80.000 vnd
                                            </span>
                                        </Card.Text>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="rounded-0 d-flex align-items-center justify-content-center me-1 px-2 py-1"
                                            style={{ backgroundColor: '#2c4a6f', borderColor: '#2c4a6f', height: '31px' }}
                                        >
                                            <FaShoppingCart />

                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            style={{ fontSize: '12px', height: '31px', borderColor: '#ced4da' }}
                                        >
                                            Xem chi tiết
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Exercise6Layout;