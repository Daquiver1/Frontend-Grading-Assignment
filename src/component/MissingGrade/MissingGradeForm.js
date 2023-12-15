// MissingGradeForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './MissingGradeForm.css'; // Import your CSS file for styling
import Navbar from '../Navbar';
import Footer from '../footer';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentID: '',
    email: '',
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle the form submission (e.g., send data to a server)
    // Simulate a successful submission
    setShowSuccessAlert(true);
    // Reset the form fields
    setFormData({
      name: '',
      studentID: '',
      email: '',
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
    });
  };

  return (
    <div>
      <Navbar/>
    <div className="container mt-5 form-container">
      <h1 className="mb-4">Missing Grade Form</h1>

      {/* Success alert */}
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          Form submitted successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Your Information</h2>

          <Form.Group controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formStudentID">
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your student ID"
              name="studentID"
              value={formData.studentID}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>

        <div className="form-section">
          <h2>Course Information</h2>

          <Form.Group controlId="formCourseName">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course name"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formInstructorName">
            <Form.Label>Instructor Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter instructor name"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formExpectedGrade">
            <Form.Label>Expected Grade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expected grade"
              name="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formExplanation">
            <Form.Label>Explanation</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Provide an explanation"
              name="explanation"
              rows={4}
              value={formData.explanation}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default MissingGradeForm;
