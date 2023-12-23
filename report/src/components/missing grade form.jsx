import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    course: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // I will add a form submission logic here right
    console.log('Form submitted:', formData);
    // I  will use a data to submit the form to my backend
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Missing Grade Report Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="studentName">
              <Form.Label>Student Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="course">
              <Form.Label>Course:</Form.Label>
              <Form.Control
                as="select"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select Course</option>
                <option value="math">DCIT 201</option>
                <option value="history">DCIT 203</option>
                <option value="science">DCIT 205</option>
                <option value="science">DCIT 207</option>
                <option value="science">MATH 223</option>
                <option value="science">CBAS 210</option>
                
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="reason">
              <Form.Label>Reason for Missing Grade:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter the reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default MissingGradeForm;
