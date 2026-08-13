import React, { useState } from 'react';
import { Form, Container, ListGroup } from 'react-bootstrap';

const SearchFilter = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [query, setQuery] = useState("");
  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <div className="w-50">
        <Form.Control placeholder="Search..." className="fs-4 mb-3" onChange={(e) => setQuery(e.target.value)} />
        <ListGroup>
          {items.filter(i => i.toLowerCase().includes(query.toLowerCase())).map(i => (
            <ListGroup.Item key={i} className="fs-5">{i}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};
export default SearchFilter;