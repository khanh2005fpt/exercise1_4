import React from 'react';

export default function CourseList() {
  const courses = ['React', 'ReactNative', 'NodeJs'];

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Course names</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}