import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { users } from './mockData';

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <Container>User not found!</Container>;

  return (
    <Container className="mt-5">
      <h1 className="display-4">
        {user.firstName} {user.lastName} : {user.age}
      </h1>
    </Container>
  );
}