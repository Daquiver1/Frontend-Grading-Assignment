import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Badge } from 'react-bootstrap';
import { FaBook, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';

function AppDashboard() {
  const [user ] = useState({
    name: 'Christian Dwamena',
    grade: '12',
    average: '87',
    courses: [
      { name: 'DCIT 201', grade: 'A' },
      { name: 'DCIT 203', grade: 'B' },
      { name: 'DCIT 207', grade: 'A' },
      { name: 'DCIT 206', grade: '' },
      { name: 'DCIT 205', grade: 'A' },
      { name: 'MATH 223', grade: 'A' },
      { name: 'CBAS 210', grade: '' }, // Simulating a missing grade
    ],
    achievements: [
      'The Highest Grade so far is DCIT 205',
      'Perfect Attendance for the Semester',
    ],
    recentActivity: 'Attended a Guest Lecture on Cybersecurity.',
  });

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
    <Container className="mt-4">
      {/* Welcome Message Section */}
      <Row>
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

      {/* Current Grades and Missing Grades Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="mb-4">Overview</h3>
          <Carousel fade interval={3000}>
            <Carousel.Item>
              <Card bg="info" text="white">
                <Card.Body>
                  <FaBook className="icon" />
                  <Card.Title>Current Grades</Card.Title>
                  {user.courses.map((course, index) => (
                    <p key={index}>
                      {course.name}: {course.grade}
                    </p>
                  ))}
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card bg="danger" text="white">
                <Card.Body>
                  <FaExclamationTriangle className="icon" />
                  <Card.Title>Missing Grades</Card.Title>
                  <ul>
                    {missingGrades.map((course, index) => (
                      <li key={index}>
                        {course.name}: <Badge bg="warning">Missing</Badge>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Achievements Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="mb-4">Achievements</h3>
          <Card bg="success" text="white">
            <Card.Body>
              <FaChartLine className="icon" />
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

      {/* Fun Fact Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="mb-4">Fun Fact</h3>
          <Card bg="dark" text="white">
            <Card.Body>
              <FaBook className="icon" />
              <Card.Text>{getRandomFunFact()}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="mb-4">Recent Activity</h3>
          <Card bg="secondary" text="white">
            <Card.Body>
              <FaChartLine className="icon" />
              <Card.Text>{user.recentActivity}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AppDashboard;
