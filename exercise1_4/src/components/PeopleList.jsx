import React from 'react';

export default function PeopleList() {
  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 }, 
    { name: 'John', age: 40 }, 
    { name: 'Ann', age: 19 }, 
    { name: 'Elisabeth', age: 16 }
  ];

  const firstTeenager = people.find(p => p.age >= 10 && p.age <= 20);

  const allTeenagers = people.filter(p => p.age >= 10 && p.age <= 20);

  const isEveryTeenager = people.every(p => p.age >= 10 && p.age <= 20);

  const isAnyTeenager = people.some(p => p.age >= 10 && p.age <= 20);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>People Analysis (Teenager Check)</h2>

      <div>
        <h4>People List:</h4>
        <ul>
          {people.map((p, index) => (
            <li key={index}>{p.name} - {p.age} tuổi</li>
          ))}
        </ul>
      </div>


      <div>
        <h4>1. First Teenager (age 10 - 20):</h4>
        <p>{firstTeenager ? `${firstTeenager.name} (${firstTeenager.age} tuổi)` : "Không có"}</p>
      </div>

      <div>
        <h4>2. All Teenagers:</h4>
        <ul>
          {allTeenagers.map((p, index) => (
            <li key={index}>{p.name} - {p.age} tuổi</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>3. Is every person a teenager? </h4>
        <p><b>{isEveryTeenager ? "true" : "false"}</b></p>
      </div>

      <div>
        <h4>4. Is any person a teenager?</h4>
        <p><b>{isAnyTeenager ? "true" : "false"}</b></p>
      </div>
    </div>
  );
}