import React, { useState } from 'react';

export default function RetailTable() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  const allCompanyNames = [];
  companies.forEach(company => {
    allCompanyNames.push(company.name);
  });

  const companiesAfter1987 = [];
  companies
    .filter(company => company.start > 1987)
    .forEach(company => {
      companiesAfter1987.push(company.name);
    });

  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

  const sortedAges = [...ages].sort((a, b) => b - a);

  const totalAges = ages.reduce((acc, age) => acc + age, 0);

  // 7. Object restructuring & method print[cite: 1]
  const { name, category } = companies[0];
  const newCompanyObj = {
    name,
    category,
    print() {
      return `Name: ${this.name}, Category: ${this.category}`;
    }
  };

  // 8. Function sum numbers[cite: 1]
  const sumNumbers = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);
  const sumResult = sumNumbers(10, 20, 30, 40);

  // 9. Function flatten args[cite: 1]
  const flattenAndAddArgs = (...args) => {
    let result = [];
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        result.push(...arg);
      } else {
        result.push(arg);
      }
    });
    return result;
  };
  const flattenedArray = flattenAndAddArgs(1, [2, 3], 'hello', [4, 5]);

  // 10. Destructuring street[cite: 1]
  const { address: { street } } = person;

  // 11. Counter function[cite: 1]
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(prev => prev + 1);

  // 12. Parse query params[cite: 1]
  const sampleUrl = "https://example.com/?name=John&age=25&city=Hanoi";
  const parseQueryParams = (url) => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    const params = new URLSearchParams(queryString);
    const result = {};
    for (const [key, value] of params.entries()) {
      result[key] = value;
    }
    return result;
  };
  const queryParamsObj = parseQueryParams(sampleUrl);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px' }}>
      <h2>Companies & ES6 Results Display</h2>

      {/* 3. Retail Companies Table[cite: 1] */}
      <div style={{ marginBottom: '20px' }}>
        <h3>3. Retail Companies (Start + 1)[cite: 1]</h3>
        <div style={{ border: '1px solid #ccc' }}>
          {companies
            .filter(c => c.category === "Retail")
            .map(c => ({ ...c, start: c.start + 1 }))
            .map((company, index) => (
              <div key={index} style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '10px' }}>
                <p style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', margin: 0 }}>{company.name}</p>
                <p style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', margin: 0 }}>{company.start}</p>
                <p style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', margin: 0 }}>{company.end}</p>
              </div>
            ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* 1 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>1. Tên tất cả các công ty (forEach)[cite: 1]:</b>
          <p>{allCompanyNames.join(', ')}</p>
        </div>

        {/* 2 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>2. Công ty bắt đầu sau năm 1987[cite: 1]:</b>
          <p>{companiesAfter1987.join(', ')}</p>
        </div>

        {/* 4 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>4. Sắp xếp công ty theo end date tăng dần[cite: 1]:</b>
          <ul>
            {sortedCompanies.map((c, i) => (
              <li key={i}>{c.name} (End: {c.end})</li>
            ))}
          </ul>
        </div>

        {/* 5 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>5. Sắp xếp độ tuổi (ages) giảm dần[cite: 1]:</b>
          <p>{sortedAges.join(', ')}</p>
        </div>

        {/* 6 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>6. Tổng tất cả các độ tuổi (reduce)[cite: 1]:</b>
          <p>{totalAges}</p>
        </div>

        {/* 7 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>7. Object mới từ companies[0] & method print[cite: 1]:</b>
          <p>{newCompanyObj.print()}</p>
        </div>

        {/* 8 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>8. Tổng các số bất kỳ (Rest parameters - truyền 10, 20, 30, 40)[cite: 1]:</b>
          <p>{sumResult}</p>
        </div>

        {/* 9 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>9. Gộp mảng/phần tử bất kỳ (Flatten args)[cite: 1]:</b>
          <p>[ {flattenedArray.join(', ')} ]</p>
        </div>

        {/* 10 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>10. Destructuring property street[cite: 1]:</b>
          <p>{street}</p>
        </div>

        {/* 11 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>11. Hàm tăng dần mỗi khi gọi (Counter)[cite: 1]:</b>
          <p>Giá trị hiện tại: {count}</p>
          <button onClick={handleIncrement} style={{ padding: '5px 10px', cursor: 'pointer' }}>Tăng số</button>
        </div>

        {/* 12 */}
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd' }}>
          <b>12. Destructors query parameters từ URL ({sampleUrl})[cite: 1]:</b>
          <pre style={{ margin: 0 }}>{JSON.stringify(queryParamsObj, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}