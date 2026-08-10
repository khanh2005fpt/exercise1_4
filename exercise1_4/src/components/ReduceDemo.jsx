import React from 'react';

export default function ReduceDemo() {
  var array = [1, 2, 3, 4];

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Reduce & Arrow Functions Demo</h2>
      <p><b>Mảng ban đầu:</b> [ {array.join(', ')} ]</p>

      <div style={{ marginTop: '15px' }}>
        <p><b>Tổng các phần tử (Sum):</b> {sum}</p>
        <p><b>Tích các phần tử (Product):</b> {product}</p>
      </div>
    </div>
  );
}