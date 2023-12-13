// Dashboard.js
import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Dashboardpage = () => {
  // Mock data for student grades
  const grades = [
    { id: 1, subject: 'Math', score: 'A' },
    { id: 2, subject: 'English', score: 'B' },
    { id: 3, subject: 'Science', score: 'C' },
    // Add more mock data as needed
  ];

  // Function to check if there are missing grades
  const hasMissingGrades = () => {
    return grades.some(grade => grade.status === 'missing');
  };

  return (
    <Container className="mt-5">
      <h2>Student Dashboard</h2>
      <Row>
        <Col md={8}>
          {/* Display current grades */}
          {grades.map(grade => (
            <Alert key={grade.id} variant="success">
              <strong>{grade.subject}:</strong> {grade.score}
            </Alert>
          ))}
        </Col>
        <Col md={4}>
          {/* Display alerts for missing grades */}
          {hasMissingGrades() && (
            <Alert variant="danger">
              <strong>Alert:</strong> You have missing grades. Please check and submit.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboardpage;
