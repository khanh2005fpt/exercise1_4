import React from 'react';
import { Link } from 'react-router-dom';
import { users } from './mockData';

export default function UsersList() {
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/exercise21">← Back to Home</Link>
      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ margin: '10px 0' }}>
            <Link to={`/exercise21/users/${user.id}`}>
              {user.firstName} {user.lastName} (ID: {user.id})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}