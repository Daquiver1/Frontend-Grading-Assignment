import React, { useState } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

const GradeReport = () => {
  const [selectedSemester, setSelectedSemester] = useState('all');

  const data = [
    { course: 'Introduction to Computer Science', grade: 'A', semester: 'fall2023' },
    { course: 'Mathematics for Computer Science', grade: 'B+', semester: 'fall2023' },
    { course: 'Data Structures', grade: 'A-', semester: 'spring2024' },
    // Add more data as needed
  ];

  const filteredData = selectedSemester === 'all'
    ? data
    : data.filter(item => item.semester === selectedSemester);

  return (
    <Container className="mt-5">
      <h1>Grade Report</h1>
      <Form className="mb-4">
        <Form.Group controlId="semesterSelect">
          <Form.Label>Select Semester:</Form.Label>
          <Form.Control as="select" value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
            <option value="all">All Semesters</option>
            <option value="fall2023">Fall 2023</option>
            <option value="spring2024">Spring 2024</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>
      </Form>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.course}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default GradeReport;
