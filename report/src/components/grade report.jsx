// GradeReportPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const GradeReportPage = () => {
  // State to manage selected academic year and semester
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  // State to manage student's grades (dummy data for illustration)
  const [grades, setGrades] = useState([
    { course: 'Math', grade: 'A' },
    { course: 'History', grade: 'B' },
    // Add more courses as needed
  ]);

  // Dummy data for academic years and semesters
  const academicYears = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const semesters = ['1st Semester', '2nd Semester'];

  // Function to handle grade report update based on selected year and semester
  const handleGradeReportUpdate = () => {
    // Add logic to fetch and update grades based on selectedYear and selectedSemester
    // For now, we'll just use dummy data
    setGrades([
      { course: 'Math', grade: 'A' },
      { course: 'History', grade: 'B' },
      // Add more courses as needed
    ]);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Grade Report</h1>

      {/* Year and Semester Selection Form */}
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="academicYear">
              <Form.Label>Select Academic Year:</Form.Label>
              <Form.Control
                as="select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="" disabled>Select Academic Year</option>
                {academicYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="semester">
              <Form.Label>Select Semester:</Form.Label>
              <Form.Control
                as="select"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                <option value="" disabled>Select Semester</option>
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" onClick={handleGradeReportUpdate}>
          Update Grade Report
        </Button>
      </Form>

      {/* Display Grade Report Table */}
      <Row className="mt-4">
        <Col>
          <h2>Grade Report for {selectedYear} - {selectedSemester}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.course}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default GradeReportPage;
