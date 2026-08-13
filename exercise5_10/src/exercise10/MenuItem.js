import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function MenuItem({ item }) {
  return (
    <Card className="text-white border-0 position-relative" style={{ backgroundColor: '#1a1a1a', width: '230px' }}>
      {item.sale && (
        <span 
          className="position-absolute top-0 start-0 m-2 px-2 py-1 fw-bold rounded" 
          style={{ backgroundColor: '#f1c40f', color: '#000', fontSize: '10px', zIndex: 2 }}
        >
          SALE
        </span>
      )}
      <Card.Img 
        variant="top" 
        src={item.image} 
        style={{ height: '150px', objectFit: 'cover' }} 
      />
      <Card.Body className="text-center p-3">
        <Card.Title className="fs-6 fw-normal mb-2">{item.name}</Card.Title>
        <div className="mb-3" style={{ fontSize: '13px' }}>
          <span className="text-decoration-line-through me-2" style={{ color: '#adb5bd' }}>
            {item.oldPrice}
          </span>
          <span className="fw-bold" style={{ color: '#f1c40f', fontSize: '20px' }}>{item.newPrice}</span>
        </div>
        <Button 
          className="w-100 border-0 text-white" 
          style={{ backgroundColor: '#333333', fontSize: '13px' }}
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}