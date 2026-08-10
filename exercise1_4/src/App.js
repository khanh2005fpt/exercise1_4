import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ReactLogo from './components/ReactLogo';
import CourseList from './components/CourseList';
import RetailTable from './components/RetailTable';
import PromiseDemo from './components/PromiseDemo';
import PeopleList from './components/PeopleList';
import ReduceDemo from './components/ReduceDemo';
import DisplayText from './components/DisplayText';
import ShapeManager from './components/ShapeManager';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <ReactLogo />
      <Navbar />
      <DisplayText />
      <CourseList />
      <PeopleList />
      <ReduceDemo />
      <RetailTable />
      <ShapeManager />
      <PromiseDemo />

    </div>
  );
}