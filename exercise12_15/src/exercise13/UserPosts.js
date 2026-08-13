import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Form } from 'react-bootstrap';

const UserPosts = ({ userId = 1 }) => {
  const [posts, setPosts] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(userId);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUserId}`);
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [currentUserId]);

  return (
    <Container fluid className="vh-100 bg-dark text-white p-4 overflow-auto">
      <div className="w-50 mx-auto mb-4">
        <Form.Label>Select User ID:</Form.Label>
        <Form.Control 
          type="number" 
          value={currentUserId} 
          onChange={(e) => setCurrentUserId(e.target.value)} 
          min="1" 
          max="10"
        />
      </div>
      <div className="w-75 mx-auto">
        {posts.map((post) => (
          <Card key={post.id} className="bg-secondary text-white mb-3 shadow">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>  
        ))}
      </div>
    </Container>
  );
};
export default UserPosts;