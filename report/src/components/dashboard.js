import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function Dashboard() {
  // Replace with actual user data or fetch it from your backend
  const user = {
    name: 'John Doe',
    grade: '12',
    average: '87',
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
    <Container>
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
            <Alert variant="warning" className="rounded-3">
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

      {/* Cards Section */}
      <Row className="mt-4">
        <Col>
          <h3>Your Courses</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            {user.courses.map((course, index) => (
              <Col key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>Grade: {course.grade || 'Missing'}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
