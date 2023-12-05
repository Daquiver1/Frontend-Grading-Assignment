import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

// Sample data for demonstration purposes
const studentGrades = [
  { subject: 'Math', grade: 90 },
  { subject: 'English', grade: 85 },
  { subject: 'History', grade: null }, // Represents a missing grade
  // Add more subjects as needed
];

const AppMissingGradeForm = () => {
  const [missingGrades, setMissingGrades] = useState([]);

  useEffect(() => {
    // Check for missing grades on component mount
    const missing = studentGrades.filter((grade) => grade.grade === null);
    setMissingGrades(missing);
  }, []);

  return (
    <div>
      {/* Include the header component */}
      {/* Uncomment the following line when you have the AppHeader component */}
      {/* <AppHeader /> */}

      {/* Dashboard content */}
      <section id="dashboard" className="block dashboard-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Dashboard</h2>
            <div className="subtitle">Overview of student's grades</div>
          </div>

          {/* Display grades */}
          {studentGrades.map((grade, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{grade.subject}</Card.Title>
                <Card.Text>Grade: {grade.grade !== null ? grade.grade : 'Missing'}</Card.Text>
              </Card.Body>
            </Card>
          ))}

          {/* Display alerts for missing grades */}
          {missingGrades.length > 0 && (
            <Alert variant="warning">
              <strong>Alert:</strong> You have missing grades. Please check and submit.
            </Alert>
          )}
        </Container>
      </section>
    </div>
  );
};

export default AppMissingGradeForm;
