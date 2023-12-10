import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 function AppDashboard() {
  // Replace with actual user data or fetch it from your backend
  const user = {
    name: 'Christian Dwamena',
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
    achievements: [
      'Highest Grade in DCIT 207',
      'Perfect Attendance for the Semester',
    ],
    recentActivity: 'Attended a Guest Lecture on Cybersecurity.',
  };

  const missingGrades = user.courses.filter((course) => !course.grade);

  const getRandomFunFact = () => {
    const funFacts = [
      'Did you know? The first computer programmer was Ada Lovelace in the 19th century!',
      'The term "bug" in computer science originated from an actual insect causing a malfunction.',
      'The world’s first website was created at CERN by Tim Berners-Lee in 1991.',
    ];
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  };

  return (
    <Container>
      {/* Welcome Message Section */}
      <Row className="mt-4">
        <Col>
          <h2>Welcome, {user.name}!</h2>
          <p>Grade: {user.grade}</p>
          <p>Average Grade: {user.average}</p>
        </Col>
      </Row>

      {/* Quick Links Section */}
      <Row className="mt-4">
        <Col>
          <Button variant="primary" href="/missing-grades" className="me-2">
            Missing Grade Form
          </Button>
          <Button variant="primary" href="/grade-report">
            Grade Report
          </Button>
        </Col>
      </Row>

      {/* Summary Cards Section */}
      <Row className="mt-4">
        <Col>
          <h3>Summary</h3>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Missing Grades</Card.Title>
                  <Card.Text>{missingGrades.length} grades are currently missing.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Achievements</Card.Title>
                  <ul>
                    {user.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Fun Fact Section */}
      <Row className="mt-4">
        <Col>
          <h3>Fun Fact</h3>
          <Card>
            <Card.Body>
              <Card.Text>{getRandomFunFact()}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity Section */}
      <Row className="mt-4">
        <Col>
          <h3>Recent Activity</h3>
          <Card>
            <Card.Body>
              <Card.Text>{user.recentActivity}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AppDashboard;