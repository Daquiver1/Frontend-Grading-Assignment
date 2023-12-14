// Dashboard.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Table, Alert } from 'react-bootstrap/';
import './Dashboard.css';

function AppDashboard() {
  // Replace with actual user data or fetch it from your backend
  const user = {
    name: 'George Barclay',
    grade: '300',
    average: '3.33',
    courses: [
      { name: 'DCIT 201', grade: 'A' },
      { name: 'DCIT 203', grade: 'B' },
      { name: 'DCIT 207', grade: 'A-' },
      { name: 'DCIT 206', grade: 'B+' },
      { name: 'MATH 223', grade: 'A' },
      { name: 'CBAS 210', grade: '' }, // Simulating a missing grade
    ],
  };

  const missingGrades = user.courses.filter((course) => !course.grade);

  return (
    <Container >
      {/* User Information Section */}
      <Row className="mt-4">
        <Col>
          <h2>Welcome, {user.name}!</h2>
          <p>Grade: {user.grade}</p>
          <p>Average Grade: {user.average}</p>
        </Col>
      </Row>

      {/* Grade Information Section */}
      <Row className="mt-4">
        <Col>
          <h3>Your Grades</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {user.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.grade || 'Missing'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Missing Grades Alert */}
      {missingGrades.length > 0 && (
        <Row className="mt-4">
          <Col>
            {/* Updated to use the red danger variant */}
            <Alert variant="danger" className="rounded-3">
              <strong>Missing Grades:</strong>
              <ul className="mb-0">
                {missingGrades.map((course, index) => (
                  <li key={index}>{course.name}</li>
                ))}
              </ul>
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default AppDashboard;
