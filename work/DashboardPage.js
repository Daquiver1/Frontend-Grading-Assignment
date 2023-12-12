import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import MyNavbar from './src/Nav';

const DashboardPage = () => {
  // Sample data for current grades and missing grade alerts
  const currentGrades = [
    { course: 'Math', grade: 'A' },
    { course: 'Science', grade: 'B' },
    { course: 'History', grade: 'C' },
  ];

  const missingGrades = [
    { course: 'English', assignment: 'Essay' },
    { course: 'Physics', assignment: 'Lab Report' },
  ];

  return (
    <div>
      <MyNavbar />
    <Container className="mt-5">
      <h2 className="text-center">Dashboard</h2>

      <Row className="mt-3">
        <Col>
          <h4>Current Grades</h4>
          {currentGrades.length === 0 ? (
            <p>No grades available</p>
          ) : (
            <ul>
              {currentGrades.map((grade, index) => (
                <li key={index}>
                  {grade.course}: {grade.grade}
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h4>Missing Grade Alerts</h4>
          {missingGrades.length === 0 ? (
            <p>No missing grade alerts</p>
          ) : (
            <ul>
              {missingGrades.map((alert, index) => (
                <li key={index}>
                  <Alert variant="warning">
                    {alert.course}: Missing {alert.assignment}
                  </Alert>
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default DashboardPage;
