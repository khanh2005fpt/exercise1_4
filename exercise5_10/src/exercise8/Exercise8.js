import React from 'react';
import { Container, Form, InputGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser } from 'react-icons/fa';

const Exercise8 = () => {
    return (
        <Container className="mt-4" style={{ maxWidth: '600px' }}>
            {/* Alert ở trên cùng */}
            <Alert variant="warning" className="d-flex justify-content-between align-items-center">
                <span>Thông tin thông báo</span>
                <span>&times;</span>
            </Alert>

            {/* Header */}
            <h1 className="mb-4">Form đặt vé máy bay</h1>

            <Form>
                {/* Họ tên với Input Group (prepend + input + append) */}
                <Form.Group className="mb-3">
                    <Form.Label>Họ tên</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><FaRegUser />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Họ tên" />
                        <InputGroup.Text>vnđ</InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa....</Form.Text>
                </Form.Group>

                {/* Địa chỉ */}
                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa....</Form.Text>
                </Form.Group>

                {/* Đi từ và Đến (Sử dụng Row/Col để chia 2 cột) */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Đi từ</Form.Label>
                            <Form.Select>
                                <option>Hà nội</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Đến</Form.Label>
                            <Form.Select>
                                <option>Hà nội</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Chọn chiều đi */}
                <Form.Group className="mb-3">
                    <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
                    <Form.Check type="checkbox" label="Đi" />
                    <Form.Check type="checkbox" label="Về" />
                </Form.Group>

                {/* Nút đặt vé */}
                <Button variant="primary" type="submit" className="w-100">
                    Đặt vé
                </Button>
            </Form>
        </Container>
    );
};

export default Exercise8;