import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const dishesData = [
  {
    id: 0,
    name: "Uthappizza",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza."
  },
  {
    id: 1,
    name: "Zucchipakoda",
    price: "1.99",
    description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter."
  },
  {
    id: 2,
    name: "Vadonut",
    price: "1.99",
    description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    price: "2.99",
    description: "A delectable, semi-sweet New York Style Cheese Cake."
  }
];

export default function DishesList() {
  const { addToCart, totalItems, totalValue } = useCart();

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Menu Dishes</h2>
        <div>
          <span className="me-3">Items: <Badge bg="secondary">{totalItems}</Badge></span>
          <span>Total: <Badge bg="success">${totalValue}</Badge></span>
        </div>
      </div>
      <Row>
        {dishesData.map((dish) => (
          <Col md={6} lg={3} key={dish.id} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{dish.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${dish.price}</Card.Subtitle>
                <Card.Text className="small">{dish.description}</Card.Text>
                <Button variant="primary" className="mt-auto" onClick={() => addToCart(dish)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}