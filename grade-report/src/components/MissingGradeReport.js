// MissingGradeForm.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './MissingGradeForm.css';

const AppMissingGradeForm = () => {
  return (
    <section className="missing-grade-form">
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-5">Report Missing Grade</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formStudentName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter the subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGrade">
                <Form.Label>Missing Grade</Form.Label>
                <Form.Control type="text" placeholder="Enter the missing grade" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formReason">
                <Form.Label>Reason for Missing Grade</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Explain the reason" />
              </Form.Group>

              <Button variant="dark" type="submit" className="btn-block">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppMissingGradeForm;