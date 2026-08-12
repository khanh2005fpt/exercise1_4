import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';

function ProductTable({ products }) {
  const [productList, setProductList] = useState(products);

  const handleBuyNow = (id) => {
    setProductList(prev =>
      prev.map(item =>
        item.id === id && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item
      )
    );
  };
  return (
    <Row>
      {productList.map((item) => {
        const isAvailable = item.stock > 0;

        return (
          <div key={item.id} style={{ flex: '1 0 21%', margin: '10px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: isAvailable ? '#e8f4fd' : '#f8d7da' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h5><strong>{item.name}</strong></h5>
            <p><b>Giá nhập:</b> {item.inputPrice}$</p>
            <p><b>Giá bán:</b> {item.outPrice}$</p>
            <p><b>Tồn kho:</b> {item.stock}</p>
            <Button style={{ backgroundColor: isAvailable ? 'green' : 'red', fontWeight: 'bold' }} onClick={() => handleBuyNow(item.id)} disabled={!isAvailable}>
              {isAvailable ? 'Mua ngay' : 'Hết hàng'}
            </Button>
          </div>
        );
      })}
    </Row>
  );
}

export default ProductTable;

