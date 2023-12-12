// GradeReportPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './GradeReport.css';

function AppGradeReport () {
  // State to manage selected academic year and semester
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [grades, setGrades] = useState([]);

  const academicYears = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const semesters = ['1st Semester', '2nd Semester'];

  const handleGradeReportUpdate = () => {
    // Add logic to fetch and update grades based on selectedYear and selectedSemester
    const dummyGrades = getDummyGrades(selectedYear);
    setGrades(dummyGrades);
  };

  const getDummyGrades = (year) => {
    // Dummy data for courses based on the selected academic year
    switch (year) {
      case '1st Year':
        return [
          { course: 'DCIT 101', grade: 'A' },
          { course: 'Math 121', grade: 'B' },
          { course: 'Physics 111', grade: 'C' },
          { course: 'Math 101', grade: 'A' },
          { course: 'Stat 101', grade: 'B' },
          { course: 'Programming 101', grade: 'A' },
        ];
      case '2nd Year':
        return [
          { course: 'DCIT 201', grade: 'B' },
          { course: 'Math 221', grade: 'A' },
          { course: 'Physics 211', grade: 'B' },
          { course: 'Math 201', grade: 'A' },
          { course: 'Stat 201', grade: 'C' },
          { course: 'Programming 201', grade: 'A' },
        ];
        case '3rd Year':
        return [
          { course: 'DCIT 301', grade: 'B' },
          { course: 'Math 321', grade: 'A' },
          { course: 'Physics 311', grade: 'B' },
          { course: 'Math 301', grade: 'A' },
          { course: 'Stat 301', grade: 'C' },
          { course: 'Programming 301', grade: 'A' },
        ];
        case '4th Year':
        return [
          { course: 'DCIT 401', grade: 'B' },
          { course: 'Math 421', grade: 'A' },
          { course: 'Physics 411', grade: 'B' },
          { course: 'Math 401', grade: 'A' },
          { course: 'Stat 401', grade: 'C' },
          { course: 'Programming 401', grade: 'A' },
        ];

      default:
        return [];
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Grade Report</h1>

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
                <option value="" disabled>
                  Select Academic Year
                </option>
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
                <option value="" disabled>
                  Select Semester
                </option>
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        
      </Form>

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

      <Button variant="primary" onClick={handleGradeReportUpdate}>
          Update Grade Report
        </Button>
    </Container>
  );
}

export default AppGradeReport;
