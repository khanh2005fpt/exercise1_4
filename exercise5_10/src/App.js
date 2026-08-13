import React from 'react';

import Exercise5 from './exercise5/Exercise5';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exercise6 from './exercise6/Exercise6';
import Exercise7 from './exercise7/Exercise7';
import Exercise8 from './exercise8/Exercise8';
import Exercise9 from './exercise9/Exercise9';
import Exercise10 from './exercise10/Exercise10';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercise5" element={<Exercise5 />} />
        <Route path="/exercise6" element={<Exercise6 />} />
        <Route path="/exercise7" element={<Exercise7 />} />
        <Route path="/exercise8" element={<Exercise8 />} />
        <Route path="/exercise9" element={<Exercise9 />} />
        <Route path="/exercise10" element={<Exercise10 />} />
      </Routes>
    </BrowserRouter>
  );
}