import React, { useState } from 'react';
import ProductTable from './components/ProductTable';
import ProductStats from './components/ProductStats';
import ProductSortedList from './components/ProductSortedList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // Dữ liệu đầu vào theo đề bài
  const [products] = useState([
    { id: 1, name: "Laptop ASUS", inputPrice: 15000, outPrice: 18500, stock: 5, image: "/images/Laptop.jpg" },
    { id: 2, name: "Chuột", inputPrice: 300, outPrice: 450, stock: 0, image: "/images/Mouse.jpg" },
    { id: 3, name: "Bàn phím", inputPrice: 800, outPrice: 1200, stock: 10, image: "/images/Keyboard.jpg" },
    { id: 4, name: "Màn hình Dell", inputPrice: 3500, outPrice: 4200, stock: 2, image: "/images/Monitor.jpg" }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      <section style={{ marginBottom: '30px' }}>
        <h3>1. Danh sách sản phẩm & Trạng thái</h3>
        <ProductTable products={products} />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3>2. Sản phẩm có giá bán lớn nhất & nhỏ nhất</h3>
        <ProductStats products={products} />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3>3. Sắp xếp danh sách theo lợi nhuận giảm dần</h3>
        <ProductSortedList products={products} />
      </section>
    </div>
  );
}

export default App;