// DashboardPage.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ProgressBar, Button, Table, Alert } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Navbar from './Navbar';
import Footer from './footer';

const DashboardPage = () => {
  const [gradeData, setGradeData] = useState([
    { course: 'Math', grade: 'A', percentage: 90 },
    { course: 'English', grade: 'B', percentage: 80 },
    { course: 'Physics', grade: 'A-', percentage: 88 },
    // Add more data as needed
  ]);

  const [missingGrades, setMissingGrades] = useState([
    { course: 'History' },
    // Add more data as needed
  ]);

  const calculateOverallProgress = () => {
    const totalCourses = gradeData.length;
    const completedCourses = totalCourses - missingGrades.length;
    return (completedCourses / totalCourses) * 100;
  };

  const calculateOverallGPA = () => {
    // You can implement a GPA calculation logic based on the grades
    // For simplicity, let's assume A=4, B=3, etc.
    const totalPoints = gradeData.reduce((acc, grade) => {
      switch (grade.grade) {
        case 'A':
          return acc + 4;
        case 'B':
          return acc + 3;
        case 'C':
          return acc + 2;
        case 'D':
          return acc + 1;
        default:
          return acc;
      }
    }, 0);

    const gpa = totalPoints / gradeData.length;
    return isNaN(gpa) ? 0 : gpa;
  };

  const alertAnimation = useSpring({
    opacity: missingGrades.length > 0 ? 1 : 0,
    transform: `translateY(${missingGrades.length > 0 ? 0 : -20}px)`,
  });

  useEffect(() => {
    // Fetch grade data and missing grades
    // For simplicity, we're using static data in this example
  }, []);

  const handleDownloadTranscript = () => {
    // Implement logic to download student transcript
    console.log('Downloading Transcript...');
  };

  return (
    <div>
      <Navbar/>
    <Container className="mt-5"> 
      <h1 className="mb-4">Student Dashboard</h1>

      <Row>
        <Col md={8}>
          {/* Overall Grade Progress */}
          <Card className="mb-4">
            <Card.Body>
              <h3 className="mb-3">Overall Grade Progress</h3>
              <ProgressBar animated now={calculateOverallProgress()} label={`${calculateOverallProgress()}%`} />
            </Card.Body>
          </Card>

          {/* Individual Course Grades */}
          <Card className="mb-4">
            <Card.Body>
              <h3 className="mb-3">Individual Course Grades</h3>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeData.map((grade, index) => (
                    <tr key={index}>
                      <td>{grade.course}</td>
                      <td>{grade.grade}</td>
                      <td>{grade.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Overall GPA */}
          <Card className="mb-4">
            <Card.Body>
              <h3 className="mb-3">Overall GPA</h3>
              <h1>{calculateOverallGPA().toFixed(2)}</h1>
            </Card.Body>
          </Card>
        </Col>

        {/* Alerts for Missing Grades */}
        <Col md={4}>
          <animated.div style={alertAnimation} className="mb-4">
            <Alert variant="danger">
              <Alert.Heading>Alerts</Alert.Heading>
              {missingGrades.length > 0 ? (
                <ul>
                  {missingGrades.map((missingGrade, index) => (
                    <li key={index}>Missing grade for {missingGrade.course}</li>
                  ))}
                </ul>
              ) : (
                <p>No missing grades!</p>
              )}
            </Alert>
          </animated.div>

          {/* Download Transcript Button */}
          <Button variant="primary" onClick={handleDownloadTranscript} className="mt-3">
            Download Transcript
          </Button>
        </Col>
      </Row>
    </Container>
    <div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default DashboardPage;
