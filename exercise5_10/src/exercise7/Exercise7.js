import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercise7 = () => {
  // Danh sách cấu hình cho 3 thẻ card
  const cardData = [
    { bg: 'primary', text: 'Some text inside the first card' },
    { bg: 'warning', text: 'Some text inside the first card' },
    { bg: 'danger', text: 'Some text inside the first card' },
  ];

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Cards Columns</h2>
      <Row>
        {cardData.map((data, index) => (
          <Col md={4} key={index}>
            <Card className={`text-white bg-${data.bg} border-0`}>
              <Card.Body>
                {/* Placeholder cho ảnh xe */}
                <div className="bg-white p-2 mb-3">
                  <img 
                    src="../../images/Toyota.png" 
                    alt="Car" 
                    className="card-img-top" 
                  />
                </div>
                <Card.Text className="text-center text-dark">
                  {data.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Exercise7;