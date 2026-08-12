import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Hero from './Hero';
import MenuItem from './MenuItem';
import BookingSection from './BookingSection';

function Exercise10() {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      oldPrice: "$20.00",
      newPrice: "$14.00",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
      sale: true,
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      oldPrice: "$22.00",
      newPrice: "$17.00",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80",
      sale: false,
    },
    {
      id: 3,
      name: "Hawaiian Pizza",
      oldPrice: "$19.00",
      newPrice: "$16.00",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
      sale: true,
    },
    {
      id: 4,
      name: "Pesto Pizza",
      oldPrice: "$23.00",
      newPrice: "$17.00",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80",
      sale: true,
    },
  ];

  return (
    <div style={{ backgroundColor: '#2b2b2b', color: '#ffffff', minHeight: '100vh' }}>
      <Header />
      <Hero />

      {/* Menu Section */}
      <Container className="py-5 text-center">
        <h2 className="mb-4 fw-normal fs-3">Our Menu</h2>
        <Row className="justify-content-center g-4">
          {menuItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={3} className="d-flex justify-content-center">
              <MenuItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>

      <BookingSection />
    </div>
  );
}

export default Exercise10;