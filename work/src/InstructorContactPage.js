import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MyNavbar from './Nav';
import './ic.css'

const InstructorContactPage = () => {
  // Sample data for instructors
  const instructors = [
    { name: 'Mark Atta Mensah', email: 'mma@st.ug.edu.gh' },
    { name: 'Micheal Soli', email: 'ms@st.ug.edu.gh' },
    { name: 'Joe Metle', email: 'joemetle@gmail.com' },
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailSend = () => {
    // Simulate sending an email (replace this with your actual logic)
    if (selectedInstructor) {
      alert(`Email sent to ${selectedInstructor.name}`);
      // You can add additional logic here, such as clearing the form fields
    }
  };

  return (
    <div>
      <MyNavbar />
    <Container className="mt-5">
      <h2 className="text-center text-white">Instructor Contact</h2>

      <Row className="mt-3 text-white">
        <Col md={4}>
          <h4>Instructors</h4>
          <ul>
            {instructors.map((instructor, index) => (
              <li key={index} onClick={() => handleInstructorSelect(instructor)}>
                {instructor.name}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={8}>
          {selectedInstructor ? (
            <div>
              <h4>Contact Details</h4>
              <p>
                <strong>Name:</strong> {selectedInstructor.name}
                <br />
                <strong>Email:</strong> {selectedInstructor.email}
              </p>

              <Form>
                <Form.Group controlId="emailSubject">
                  <Form.Label>Email Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="emailBody">
                  <Form.Label>Email Body</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter email body"
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleEmailSend}>
                  Send Email
                </Button>
              </Form>
            </div>
          ) : (
            <p>Select an instructor to view contact details and send an email.</p>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default InstructorContactPage;
