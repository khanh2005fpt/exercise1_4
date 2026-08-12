import React from 'react';

function ProductSortedList({ products }) {

  const sortedProducts = [...products].map(item => ({
    ...item,
    profit: item.outPrice - item.inputPrice
  })).sort((a, b) => b.profit - a.profit);

  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'center' }}>
          <th>ID</th>
          <th>Tên sản phẩm</th>
          <th>Giá nhập</th>
          <th>Giá bán</th>
          <th>Lợi nhuận (outPrice - inputPrice)</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((item) => (
          <tr key={item.id} style={{ textAlign: 'center' }}>
            <td>{item.id}</td>
            <td style={{ textAlign: 'left' }}>{item.name}</td>
            <td>{item.inputPrice}</td>
            <td>{item.outPrice}</td>
            <td style={{ fontWeight: 'bold', color: 'blue' }}>{item.profit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductSortedList;