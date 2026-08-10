import React from 'react';

function ProductTable({ products }) {
  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th>ID</th>
          <th>Tên sản phẩm</th>
          <th>Giá nhập</th>
          <th>Giá bán</th>
          <th>Tồn kho</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => {
          const isAvailable = item.stock > 0;
          return (
            <tr key={item.id} style={{ textAlign: 'center' }}>
              <td>{item.id}</td>
              <td style={{ textAlign: 'left' }}>{item.name}</td>
              <td>{item.inputPrice}</td>
              <td>{item.outPrice}</td>
              <td>{item.stock}</td>
              <td>
                <span style={{ 
                  color: isAvailable ? 'green' : 'red', 
                  fontWeight: 'bold' 
                }}>
                  {isAvailable ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;