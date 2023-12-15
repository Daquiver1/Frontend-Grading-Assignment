// src/GradeReport.js
import React, { useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

const AppGradeReport = () => {
  const [filter, setFilter] = useState('');

  // Sample data for grades
  const grades = [
    { id: 1, student: 'John Doe', semester: 'Fall 2022', course: 'Math 101', grade: 'A' },
    { id: 2, student: 'Jane Smith', semester: 'Fall 2022', course: 'English 102', grade: 'B' },
    // Add more sample data as needed
  ];

  const filteredGrades = filter
    ? grades.filter((grade) => grade.semester.includes(filter))
    : grades;

  return (
    <Container>
      <h2>Grade Report</h2>
      <Form>
        <Form.Group controlId="filterForm">
          <Form.Label>Filter by Semester or Academic Year:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter semester or academic year"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Semester</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.id}</td>
              <td>{grade.student}</td>
              <td>{grade.semester}</td>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AppGradeReport;
