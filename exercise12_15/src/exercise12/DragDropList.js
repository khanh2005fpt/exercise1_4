import React, { useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const DragDropList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);
  const handleDragEnter = (index) => {
    const newItems = [...items];
    const draggedItem = newItems.splice(draggingItem, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setDraggingItem(index);
    setItems(newItems);
  };

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      <ListGroup style={{ width: '300px' }} className="bg-transparent">
        {items.map((item, index) => (
          <ListGroup.Item 
            key={index} 
            draggable 
            onDragStart={() => handleDragStart(index)} 
            onDragEnter={() => handleDragEnter(index)} 
            onDragEnd={() => setDraggingItem(null)}
            className="bg-transparent text-white fs-3 border-0 text-center my-2"
            style={{ cursor: 'grab' }}
          >
            • {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
export default DragDropList;