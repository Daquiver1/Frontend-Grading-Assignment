import React, { useState } from 'react';

const DashboardSemester3 = () => {
  const semester3 = {
    name: <b><mark>'Semester 3'</mark></b>,
    courses: [
      { course: 'DCIT 201', grade: 'A+' },
      { course: 'DCIT 203', grade: 'C' },
      { course: 'DCIT 205', grade: 'B+' },
      { course: 'DCIT 207', grade: 'A' },  
      { course: 'Math 223', grade: 'A' },
      { course: 'CBAS', grade: 'A' },
    ],
  };

  return (
    <div style={styles.container}>
      <h2><mark>Welcome, Bawah Josephus</mark></h2>
      <h3>Your Results for Semester 3</h3>

      <div style={styles.section}>
        <h3>Your Current Grades - {semester3.name}</h3>
        <ul>
          {semester3.courses.map((item, index) => (
            <li key={index}>
              {item.course}: {item.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    margin: '20px 0',
  },
};

export default DashboardSemester3;
