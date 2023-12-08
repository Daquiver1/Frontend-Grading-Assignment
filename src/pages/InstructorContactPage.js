// InstructorContactPage.js
import { FaPaperPlane } from "react-icons/fa";
import { Alert } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
  // Add this import statement
} from "react-bootstrap";
import { FaGraduationCap, FaEnvelope } from "react-icons/fa";
import Navigation from "../components/Navigation";
import "./InstructorContactPage.css";
import VideoDash from "../components/VideoDash";
function InstructorContactPage() {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    // Simulate fetching instructors from an API
    setInstructors([
      {
        name: "John Smith",
        email: "jsmith@university.edu",
        phone: "+1-234-567-8901",
        office: "Room 101, Building A",
        officeHours: "Mon, Wed, Fri 10:00-12:00",
      },
      {
        name: "Jane Doe",
        email: "jdoe@university.edu",
        phone: "+1-345-678-9012",
        office: "Room 102, Building A",
        officeHours: "Tue, Thu 11:00-13:00",
      },
      {
        name: "Bob Lee",
        email: "blee@university.edu",
        phone: "+1-456-789-0123",
        office: "Room 103, Building A",
        officeHours: "Mon, Wed, Fri 14:00-16:00",
      },
      {
        name: "Alice Wong",
        email: "awong@university.edu",
        phone: "+1-567-890-1234",
        office: "Room 104, Building A",
        officeHours: "Tue, Thu 15:00-17:00",
      },
    ]);
  }, []);

  // Helper function to handle selecting an instructor
  const handleSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
  };

  // Helper function to handle sending an email
  const handleSend = (e) => {
    e.preventDefault();
    // Simulate sending an email
    if (emailSubject && emailBody) {
      // Email sent
      setEmailSent(true);
      // Close the modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
        setEmailSent(false);
        setEmailSubject("");
        setEmailBody("");
      }, 3000);
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
        <VideoDash />
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
            <Card className="instructor-contact-card">
              <Card.Header>
                <FaGraduationCap /> Contact Your Instructors
              </Card.Header>
              <Card.Body>
                <Card.Title>List of Instructors</Card.Title>
                <ListGroup variant="flush">
                  {instructors.map((instructor, index) => (
                    <ListGroup.Item key={index}>
                      <p>
                        <strong>Name:</strong> {instructor.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {instructor.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {instructor.phone}
                      </p>
                      <p>
                        <strong>Office:</strong> {instructor.office}
                      </p>
                      <p>
                        <strong>Office Hours:</strong> {instructor.officeHours}
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => handleSelect(instructor)}
                      >
                        <FaEnvelope /> Send Email
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FaEnvelope /> Send Email to {selectedInstructor?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSend} className="email-form">
              <Form.Group controlId="emailSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the email subject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="emailBody">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter the email body"
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                <FaPaperPlane /> Send
              </Button>
              {emailSent && (
                <Alert variant="success" className="mt-3">
                  Your email has been sent successfully. The modal will close in
                  3 seconds.
                </Alert>
              )}
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default InstructorContactPage;
