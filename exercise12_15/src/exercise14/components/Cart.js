import React from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, totalItems, totalValue } = useCart();

  return (
    <Container className="my-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Shopping Cart</h4>
          <div>
            <span className="me-3">Total Items: {totalItems}</span>
            <span>Total Value: ${totalValue}</span>
          </div>
        </Card.Header>
        <Card.Body>
          {cartItems.length === 0 ? (
            <p className="text-muted text-center my-3">Your cart is empty.</p>
          ) : (
            <>
              <ListGroup variant="flush" className="mb-3">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1">{item.name}</h5>
                      <small className="text-muted">${item.price} x {item.quantity}</small>
                    </div>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Button variant="outline-danger" onClick={clearCart}>
                Clear Cart
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}