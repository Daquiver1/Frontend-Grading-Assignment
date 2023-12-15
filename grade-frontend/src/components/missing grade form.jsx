import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MissingGradesForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    courseName: '',
    missingGrade: '',
    additionalDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Data Submitted:', formData);
    // You can send the data to your server or perform any other necessary actions
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Missing Grade Form</h2>

            <Form.Group controlId="studentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="missingGrade">
              <Form.Label>Missing Grade</Form.Label>
              <Form.Control
                type="text"
                name="missingGrade"
                value={formData.missingGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="additionalDetails">
              <Form.Label>Additional Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit Report
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MissingGradesForm;
