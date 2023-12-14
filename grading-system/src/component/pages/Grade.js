import React, { useState } from 'react';

const Dashboard = () => {
  const semesters = [
    {
      name: <b><mark>'Semester 1'</mark></b>,
      courses: [
        { course: 'Office Productivity Tools', grade: 'A' },
        { course: 'Introduction to Computer Science', grade: 'B+' },
        { course: 'Algebra and Trigonometry', grade: 'A-' },
        { course: 'Vectors and Geometry', grade: 'A' },
        { course: 'Statistics and probability I', grade: 'A' },
        { course: 'Academic Writing', grade: 'A' },
      ],
    },
    {
      name: <b><mark>'Semester 2'</mark></b>,
      courses: [
        { course: 'DCIT 104', grade: 'B' },
        { course: 'DCIT 102', grade: 'A' },
        { course: 'Vectors and Geometry II', grade: 'B-' },
        { course: 'Calculus I', grade: 'A' },
        { course: 'Statistics and Probability II', grade: 'A' },
        { course: 'Critical Thinking', grade: 'A' },
      ],
    },
    {
      name: <b><mark>'Semester 3'</mark></b>,
      courses: [
        { course: 'DCIT 201', grade: 'A+' },
        { course: 'DCIT 203', grade: 'C' },
        { course: 'DCIT 205', grade: 'B+' },
        { course: 'DCIT 207', grade: 'A' },  
        { course: 'Math 223', grade: 'A' },
        { course: 'CBAS', grade: 'A' },
    ],
    },
  ];

  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome, Bawah Josephus</h2>
      <h3>These are Your Results for the respective semesters, 1,2 & 3</h3>

      <div style={styles.semesterTabs}>
        {semesters.map((semester, index) => (
          <button
            key={index}
            onClick={() => handleSemesterClick(semester)}
            style={{
              ...styles.semesterTab,
              backgroundColor:
                semester === selectedSemester ? '#ddd' : 'transparent',
            }}
          >
            {semester.name}
          </button>
        ))}
      </div>

      <div style={styles.section}>
        <h3>Your Current Grades - {selectedSemester.name}</h3>
        <ul>
          {selectedSemester.courses.map((item, index) => (
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
  semesterTabs: {
    display: 'flex',
    marginBottom: '10px',
  },
  semesterTab: {
    padding: '8px',
    marginRight: '10px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
};

export default Dashboard;
