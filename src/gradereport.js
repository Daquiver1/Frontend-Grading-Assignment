import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Navigation from './Navigation';

const GradeReportPage = () => {
  const courses = [
    { id: 1, name: 'MATH002', grade: 'A', year: 2022 },
    { id: 2, name: 'UGRC150', grade: 'B', year: 2022 },
    { id: 3, name: 'DCIT201', grade: 'C', year: 2022 },
    { id: 4, name: 'CDIT442', grade: 'A', year: 2022 },
    { id: 5, name: 'GYAL442', grade: 'B+', year: 2022 },
    { id: 6, name: 'MATH123', grade: 'A', year: 2022 },
    // Add more courses as needed
  ];

  // Calculate GPA
  const calculateGPA = () => {
    const gradePoints = {
      'A': 4.0,
      
      'B+': 3.3,
      'B': 3.0,
      'C': 2.0,
      
    };

    const totalCourses = courses.length;
    let totalGradePoints = 0;

    courses.forEach((course) => {
      totalGradePoints += gradePoints[course.grade];
    });

    const gpa = totalGradePoints / totalCourses;
    return gpa.toFixed(2); 
  };


  const calculateAveragePerformance = () => {
    const totalCourses = courses.length;
    let totalGrades = 0;

    courses.forEach((course) => {
      totalGrades += parseInt(course.grade); 
    });

    const averagePerformance = totalGrades / totalCourses;
    return averagePerformance.toFixed(2); 
  };

  return (
    <div className="report" >
      <Navigation />
      <h1 className="mb-4">Grade Report</h1>
      <Container className="mt-5">
        
        
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.grade}</td>
                    <td>{course.year}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        
        <Row className="mt-4">
          
        </Row>
      </Container>
      <Col>
            <h4>GPA: {calculateGPA()}</h4>
            <h4>Average Performance: {calculateAveragePerformance()}</h4>
          </Col>

          <Container className="mt-5">
        
        
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.grade}</td>
                    <td>{course.year}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        
        <Row className="mt-4">
          
        </Row>
      </Container>
      <Col>
            <h4>GPA: {calculateGPA()}</h4>
            <h4>Average Performance: {calculateAveragePerformance()}</h4>
          </Col>


          <Container className="mt-5">
        
        
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.grade}</td>
                    <td>{course.year}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        
        <Row className="mt-4">
          
        </Row>
      </Container>
      <Col>
            <h4>GPA: {calculateGPA()}</h4>
            <h4>Average Performance: {calculateAveragePerformance()}</h4>
          </Col>
    </div>
  );
};

export default GradeReportPage;
