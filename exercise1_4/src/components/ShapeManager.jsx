import React, { useState } from 'react';

export default function ShapeManager() {
  // 1. Định nghĩa các lớp theo sơ đồ UML
  class Shape {
    constructor(color) {
      this.color = color;
    }
    getArea() {
      throw new Error("Method 'getArea()' must be implemented.");
    }
    toString() {
      return `Shape [color=${this.color}]`;
    }
  }

  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
    getArea() {
      return this.length * this.width;
    }
    toString() {
      return `Rectangle [color=${this.color}, length=${this.length}, width=${this.width}, area=${this.getArea()}]`;
    }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
    getArea() {
      return 0.5 * this.base * this.height;
    }
    toString() {
      return `Triangle [color=${this.color}, base=${this.base}, height=${this.height}, area=${this.getArea()}]`;
    }
  }

  // 2. Khởi tạo các đối tượng mẫu để hiển thị
  const rect = new Rectangle("Red", 10, 5);
  const tri = new Triangle("Blue", 8, 4);

  // State để test thêm đối tượng động nếu muốn
  const [shapes] = useState([rect, tri]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px'}}>
      <h2>UML Classes Implementation (Shape, Rectangle, Triangle)</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {shapes.map((shape, index) => (
          <div key={index} style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', background: '#f9f9f9' }}>
            <p><b>Loại đối tượng:</b> {shape.constructor.name}</p>
            <p><b>Màu sắc (color):</b> {shape.color}</p>
            <p><b>Diện tích (getArea):</b> {shape.getArea()}</p>
            <p><b>Thông tin (toString):</b> {shape.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}