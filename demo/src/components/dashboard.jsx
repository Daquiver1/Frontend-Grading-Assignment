// src/Dashboard.jsx
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

const Dashboard = () => {
  // Mock data for current grades and missing grades
  const currentGrades = [
    { course: 'Math 101', grade: 'A' },
    { course: 'English 102', grade: 'B' },
    // Add more mock data as needed
  ];

  const missingGrades = [
    { course: 'History 201', semester: 'Fall 2022' },
    { course: 'Science 301', semester: 'Fall 2022' },
    // Add more mock data as needed
  ];

  // Simulate fetching data or other asynchronous tasks
  const fetchData = () => {
    // Add any necessary asynchronous logic here (e.g., API calls)
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2>Student Dashboard</h2>

      {/* Display current grades */}
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Current Grades</Card.Header>
            <Card.Body>
              {currentGrades.map((grade, index) => (
                <p key={index}>
                  <strong>{grade.course}:</strong> {grade.grade}
                </p>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Display alerts for missing grades */}
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Header as="h5">Missing Grades Alerts</Card.Header>
            <Card.Body>
              {missingGrades.length === 0 ? (
                <Alert variant="success">No missing grades alerts.</Alert>
              ) : (
                missingGrades.map((missingGrade, index) => (
                  <Alert key={index} variant="danger">
                    <strong>{missingGrade.course}:</strong> Missing grade for {missingGrade.semester}
                  </Alert>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
