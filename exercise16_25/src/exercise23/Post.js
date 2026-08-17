// Post.js
import React from 'react';

export default function Post({ postsPromise }) {
  const posts = postsPromise();

  return (
    <div className="container mt-4">
      <div className="p-4 mb-4 text-white bg-dark text-center rounded">
        <h2>📄 Posts</h2>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="card h-100 p-3 shadow-sm">
              <h5>{post.title}</h5>
              <p className="text-muted">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}