import React from 'react';

function ProductStats({ products }) {
  if (!products || products.length === 0) return null;

  const maxPriceProduct = products.reduce((max, p) => p.outPrice > max.outPrice ? p : products[0], products[0]);
  
  const minPriceProduct = products.reduce((min, p) => p.outPrice < min.outPrice ? p : products[0], products[0]);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1, padding: '15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#e8f4fd' }}>
        <h4> Giá bán lớn nhất</h4>
        <p><b>Tên:</b> {maxPriceProduct.name}</p>
        <p><b>Giá bán:</b> {maxPriceProduct.outPrice}</p>
      </div>

      <div style={{ flex: 1, padding: '15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#fef7e0' }}>
        <h4> Giá bán nhỏ nhất</h4>
        <p><b>Tên:</b> {minPriceProduct.name}</p>
        <p><b>Giá bán:</b> {minPriceProduct.outPrice}</p>
      </div>
    </div>
  );
}

export default ProductStats;