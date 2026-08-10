import React, { useState } from 'react';

export default function PromiseDemo() {
  const [result, setResult] = useState("Đang chờ chạy promise...");

  const checkRandomNumber = () => {
    setResult("Đang xử lý...");
    const p = new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log("Generated number:", randomNumber);
      if (randomNumber > 5) {
        resolve(`Success! Number is ${randomNumber}`);
      } else {
        reject("Error");
      }
    });

    p.then(res => setResult(res))
     .catch(err => setResult(err));
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Promise Demo (Random number > 5)</h2>
      <button onClick={checkRandomNumber} style={{ padding: '8px 15px', cursor: 'pointer' }}>
        Chạy Promise
      </button>
      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Kết quả: {result}</p>
    </div>
  );
}