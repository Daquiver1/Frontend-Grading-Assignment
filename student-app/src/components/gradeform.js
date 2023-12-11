import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Modal } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./footer";

function GradeIssueForm() {
  const [issueType, setIssueType] = useState("");
  const [issueType2, setIssueType2] = useState("");
  const [issueType3, setIssueType3] = useState("");
  const [courseName, setCourseName] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [details, setDetails] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!issueType || !courseName || !details) {
      alert("Please fill out all required fields.");
      return;
    }

    // Simulate submission and open modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
        <MyNavbar />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h2>Report a Grade Issue</h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Issue Type</Form.Label>
                  <Form.Select value={issueType} onChange={(event) => setIssueType(event.target.value)}>
                    <option value="">Select issue type...</option>
                    <option value="grading_error">Grading error</option>
                    <option value="missing_grade">Missing grade</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Course Level</Form.Label>
                  <Form.Select value={issueType2} onChange={(event) => setIssueType2(event.target.value)}>
                    <option value="">Select level...</option>
                    <option value="grading_error">LEVEL 100</option>
                    <option value="missing_grade1">LEVEL 200</option>
                    <option value="missing_grade2">LEVEL 300</option>
                    <option value="missing_grade3">LEVEL 400</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Expected Grade</Form.Label>
                  <Form.Select value={issueType3} onChange={(event) => setIssueType3(event.target.value)}>
                    <option value="">Select expected grade...</option>
                    <option value="exp_grade">A</option>
                    <option value="exp_grade2">B+</option>
                    <option value="exp_grade3">B</option>
                    <option value="exp_grade4">C+</option>
                    <option value="exp_grade5">C</option>
                    <option value="exp_grade6">D+</option>
                    <option value="exp_grade7">D</option>
                    <option value="exp_grade8">E</option>
                    <option value="exp_grade9">F</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the course name"
                    value={courseName}
                    onChange={(event) => setCourseName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Lecturer's Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Lecturer's name"
                    value={lecturerName}
                    onChange={(event) => setLecturerName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe the issue in detail"
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit Report
                </Button>
              </Form>

              {showModal && (
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Grade Issue Reported</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Your grade issue report has been successfully submitted. We will review your report and contact you shortly.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
}

export default GradeIssueForm;
