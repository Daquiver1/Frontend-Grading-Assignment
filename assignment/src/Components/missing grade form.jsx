import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MissingGradeForm = () => {
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [missingSubject, setMissingSubject] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, e.g., sending a request to the server
    console.log('Form submitted:', { studentName, course, missingSubject, reason });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2>Report Missing Grades</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="studentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="course">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the course name"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="missingSubject">
              <Form.Label>Missing Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the missing subject"
                value={missingSubject}
                onChange={(e) => setMissingSubject(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="reason">
              <Form.Label>Reason for Missing Grade</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Explain the reason for missing grades"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MissingGradeForm;
