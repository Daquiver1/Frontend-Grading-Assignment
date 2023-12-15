// src/MissingGradeForm.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AppMissingGradeForm = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [semester, setSemester] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add logic to handle the form submission (e.g., API call to report missing grade)
    // For demonstration purposes, we'll log the form data to the console
    console.log('Form submitted:', { studentName, courseName, semester, reason });

    // TODO: Add further logic as needed, such as clearing form fields, showing a success message, etc.
  };

  return (
    <Container>
      <h2>Report Missing Grade</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="studentName">
          <Form.Label>Student Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="courseName">
          <Form.Label>Course Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="semester">
          <Form.Label>Semester:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="reason">
          <Form.Label>Reason for Missing Grade:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AppMissingGradeForm;
