import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exercise12 from './exercise12/Exercise12';
import Exercise13 from './exercise13/Exercise13';
import Exercise14 from './exercise14/Exercise14';
import Exercise15 from './exercise15/Exercise15';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercise12" element={<Exercise12 />} />
        <Route path="/exercise13" element={<Exercise13 />} />
        <Route path="/exercise14" element={<Exercise14 />} />
        <Route path="/exercise15" element={<Exercise15 />} />


      </Routes>
    </BrowserRouter>
  );
}