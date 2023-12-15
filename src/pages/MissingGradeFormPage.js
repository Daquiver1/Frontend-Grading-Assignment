// MissingGradeFormPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaPaperPlane, FaGraduationCap } from "react-icons/fa";
import Navigation from "../components/Navigation";
import "./MissingGradeFormPage.css";
import VideoMissing from "../components/VideoMissing";

function MissingGradeFormPage() {
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate reporting a missing grade
    if (course && instructor && expectedGrade && explanation) {
      // Report successful
      setSuccess(true);
      setError("");
      // Redirect to dashboard after 3 seconds
      setTimeout(() => {
        navigator.push("/DashboardPage");
      }, 10000);
    } else {
      // Report failed
      setSuccess(false);
      setError("Please fill out all the fields.");
    }
  };

  return (
    <div>
      <div className="Navig-tion">
        {" "}
        <Navigation />{" "}
      </div>
      <div>
        {" "}
        <VideoMissing />
      </div>
      <Container className="d-flex-container">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={6}>
            <h1 className="display-3">Missing Grade Reporting System</h1>
            <p className="lead">
              A system designed to help students track and report grades that
              are not recorded in their academic profiles.
            </p>
          </Col>
        </Row>
        <Row className="p-4">
          <Col md={12}>
            <Form onSubmit={handleSubmit} className="missing-grade-form">
              <h2 className="text-center">Report a Missing Grade</h2>
              <Form.Group controlId="course">
                <Form.Label>
                  <FaGraduationCap /> Course Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the course name"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="instructor">
                <Form.Label>
                  <FaGraduationCap /> Instructor Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the instructor name"
                  value={instructor}
                  onChange={(e) => setInstructor(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="expectedGrade">
                <Form.Label>
                  <FaGraduationCap /> Expected Grade
                </Form.Label>
                <Form.Control
                  as="select"
                  value={expectedGrade}
                  onChange={(e) => setExpectedGrade(e.target.value)}
                  required
                >
                  <option value="">Select your expected grade</option>
                  <option>A</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B</option>
                  <option>B-</option>
                  <option>C+</option>
                  <option>C</option>
                  <option>C-</option>
                  <option>D+</option>
                  <option>D</option>
                  <option>D-</option>
                  <option>F</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="explanation">
                <Form.Label>
                  <FaGraduationCap /> Explanation
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter the reason for the missing grade"
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                <FaPaperPlane /> Report
              </Button>
              {success && (
                <Alert variant="success" className="mt-3">
                  Your report has been submitted successfully. You will be
                  redirected to the dashboard in 3 seconds.
                </Alert>
              )}
              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MissingGradeFormPage;
