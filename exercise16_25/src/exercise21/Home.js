import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Route (ResourceID) Exercises</h2>
      <ul>
        <li><Link to="/exercise21/users">Exercise 1: Users List</Link></li>
        <li><Link to="/exercise21/dishes">Exercise 2: Dishes List</Link></li>
      </ul>
    </div>
  );
}