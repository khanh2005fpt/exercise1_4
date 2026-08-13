import React, { useState } from 'react';
import { Button, Container, Form, ListGroup, Card, Stack } from 'react-bootstrap';

const TodoList = () => {
  const [todos, setTodos] = useState(["Học lập trình .NET", "Học lập trình Java"]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input) setTodos([...todos, input]);
    setInput("");
  };

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex justify-content-center align-items-center">
      <div className="d-flex w-100 justify-content-around align-items-start">
        <Stack direction="horizontal" gap={3} className="w-50">
          <Form.Control value={input} onChange={(e) => setInput(e.target.value)} placeholder="Please input a Task" className="py-2" />
          <Button variant="danger" className="px-4" onClick={add}>Add Todo</Button>
        </Stack>
        <Card style={{ width: '24rem' }} className="text-dark shadow">
          <Card.Header className="text-center bg-white border-bottom-0 pt-3">
            <h4><strong>Todo List</strong></h4>
          </Card.Header>
          <ListGroup variant="flush" className="p-3">
            {todos.map((todo, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center mb-2 border rounded">
                <span className="fs-5">{todo}</span>
                <Button variant="danger" size="sm" onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Delete</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </Container>
  );
};
export default TodoList;