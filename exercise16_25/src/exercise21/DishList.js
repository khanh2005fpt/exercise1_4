import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dishes } from './mockData';

export default function DishesList() {
  return (
    <Container className="mt-4">
      <h4 className="text-center mb-4">Home</h4>
      <Row className="justify-content-center">
        {dishes.map((dish) => (
          <Col key={dish.id} xs={12} md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={dish.image} 
                alt={dish.name} 
                style={{ height: '300px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>
                  <Link to={`/exercise21/dishes/${dish.id}`} className="text-decoration-none">
                    {dish.name}
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}