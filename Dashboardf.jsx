// DashboardPage.js
import React from 'react';

const DashboardF = () => {
  
  const currentGrades = [
    { course: 'Math 101', grade: 'A' },
    { course: 'History 202', grade: 'B+' },
    { course: 'Physics 301', grade: 'A-' },
  ];

  const missingGrades = [
    { course: 'Chemistry 201', instructor: 'Dr. Smith' },
    
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard</h2>

      <section style={styles.section}>
        <h3>Current Grades</h3>
        <ul style={styles.list}>
          {currentGrades.map((entry, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{entry.course}:</strong> {entry.grade}
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h3>Missing Grades</h3>
        {missingGrades.length > 0 ? (
          <ul style={styles.list}>
            {missingGrades.map((entry, index) => (
              <li key={index} style={styles.listItem}>
                <strong>{entry.course}</strong> - Instructor: {entry.instructor}
              </li>
            ))}
          </ul>
        ) : (
          <p>No missing grades reported. Keep up the good work!</p>
        )}
      </section>

     
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  heading: {
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginTop: '20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '8px',
  },
};

export default DashboardF;
