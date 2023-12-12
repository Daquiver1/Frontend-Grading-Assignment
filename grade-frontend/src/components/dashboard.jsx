import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Alert } from 'react-bootstrap';
import { AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';

const Dashboard = () => {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated asynchronous data fetching (replace with actual data fetching logic)
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call delay
      setTimeout(() => {
        // Simulated data for student grades
        const studentGrades = [
          { subject: 'Math', grade: 'A' },
          { subject: 'English', grade: 'B' },
          { subject: 'Science', grade: 'A+' },
          { subject: 'History', grade: 'N/A' }, // Simulate missing grade
          // Add more data as needed
        ];

        setGrades(studentGrades);
        setIsLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  const calculateOverallProgress = () => {
    // Simulated calculation of overall progress (replace with actual logic)
    const completedSubjects = grades.filter((grade) => grade.grade !== 'N/A');
    const progress = (completedSubjects.length / grades.length) * 100;
    return isNaN(progress) ? 0 : Math.min(progress, 99); // Ensure progress is never 100%
  };

  const renderGradeCard = (subject, grade) => (
    <Card key={subject} className="mb-3">
      <Card.Body>
        <Card.Title>{subject}</Card.Title>
        <Card.Text>
          Grade: {grade === 'N/A' ? 'Not Available' : grade}{' '}
          {grade !== 'N/A' ? <AiOutlineCheckCircle className="text-success" /> : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>
            <AiOutlineLoading3Quarters className={`mr-2 ${isLoading ? 'spin' : ''}`} />
            Dashboard
          </h1>
        </Col>
      </Row>
      {isLoading ? (
        <Row className="mt-4">
          <Col>
            <Alert variant="info">
              Loading student data... <AiOutlineLoading3Quarters className="spin" />
            </Alert>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="mt-4">
            <Col>
              <ProgressBar
                animated
                variant="success"
                now={calculateOverallProgress()}
                label={`Overall Progress: ${calculateOverallProgress()}%`}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h2>Current Grades</h2>
              {grades.length === 0 ? (
                <Alert variant="warning">No grades available.</Alert>
              ) : (
                grades.map(({ subject, grade }) => renderGradeCard(subject, grade))
              )}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h2>Alerts</h2>
              {/* Simulated alert for missing grades (replace with actual alert logic) */}
              {grades.some((grade) => grade.grade === 'N/A') ? (
                <Alert variant="danger">
                  You have missing grades! <AiOutlineExclamationCircle className="ml-2" />
                </Alert>
              ) : (
                <Alert variant="success">
                  All grades are up to date! <AiOutlineCheckCircle className="ml-2" />
                </Alert>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
