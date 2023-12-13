import React, { useState } from 'react';
import { Container, Table, Form } from 'react-bootstrap';

const GradeReportPage = () => {
  const [semesterFilter, setSemesterFilter] = useState('');

  // Mock data for courses and grades
  const gradeData = [
    { course: 'Mathematics', grade: 'A', semester: 'Spring 2022' },
    { course: 'Physics', grade: 'B+', semester: 'Spring 2022' },
    { course: 'History', grade: 'A-', semester: 'Fall 2021' },
    { course: 'Computer Science', grade: 'A+', semester: 'Fall 2021' },
    // Add more courses as needed
  ];

  const filteredData = semesterFilter
    ? gradeData.filter((entry) => entry.semester === semesterFilter)
    : gradeData;

  return (
    <Container className="mt-5">
      <h2>Grade Report</h2>

      {/* Semester Filter */}
      <Form className="mb-3">
        <Form.Group controlId="formSemesterFilter">
          <Form.Label>Filter by Semester/Academic Year</Form.Label>
          <Form.Control
            as="select"
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="">All Semesters</option>
            <option value="Spring 2022">Spring 2022</option>
            <option value="Fall 2021">Fall 2021</option>
            {/* Add more semester options as needed */}
          </Form.Control>
        </Form.Group>
      </Form>

      {/* Grade Report Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.course}</td>
              <td>{entry.grade}</td>
              <td>{entry.semester}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GradeReportPage;
