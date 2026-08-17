// User.js
import React from 'react';

export default function User({ usersPromise }) {
  const users = usersPromise();

  return (
    <div className="container mt-4">
      <div className="p-4 mb-4 text-white bg-dark text-center rounded">
        <h2>👥 Users</h2>
      </div>
      {users.map((user) => (
        <div key={user.id} className="card mb-3 p-3 shadow-sm">
          <h4>{user.name}</h4>
          <p className="text-muted mb-0">{user.email}</p>
        </div>
      ))}
    </div>
  );
}