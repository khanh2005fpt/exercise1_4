import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dishes } from './mockData';

export default function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return <div style={{ padding: '20px' }}>Dish not found!</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', maxWidth: '500px' }}>
      <img 
        src={dish.image} 
        alt={dish.name} 
        style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '15px', borderRadius: '4px' }} 
      />
      
      <h3>{dish.name} ({dish.label || dish.category})</h3>
      <p><strong>Price:</strong> ${dish.price}</p>
      <p><strong>Category:</strong> {dish.category}</p>
      <p><strong>Description:</strong> {dish.description}</p>
      
      <button onClick={() => navigate('/exercise21')} className="mt-3">
        Back to Dishes Menu
      </button>
    </div>
  );
}