// src/InstructorContact.js
import React from 'react';
import { Container, ListGroup, Button, Modal, Form } from 'react-bootstrap';

const InstructorContact = () => {
  const instructors = [
    { id: 1, name: 'Dr. Smith', email: 'drsmith@ug.com' },
    { id: 2, name: 'Prof. Johnson', email: 'profjohnson@ug.com' },
    // Add more instructor data as needed
  ];

  const [selectedInstructor, setSelectedInstructor] = React.useState(null);
  const [emailModalShow, setEmailModalShow] = React.useState(false);
  const [emailSubject, setEmailSubject] = React.useState('');
  const [emailBody, setEmailBody] = React.useState('');

  const handleEmailClick = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailModalShow(true);
  };

  const handleSendEmail = () => {
    // Simulated email sending logic (console.log for demonstration purposes)
    console.log(`Sending email to ${selectedInstructor.email}`);
    console.log(`Subject: ${emailSubject}`);
    console.log(`Body: ${emailBody}`);
    setEmailModalShow(false);
    // Reset form fields
    setEmailSubject('');
    setEmailBody('');
  };

  return (
    <Container>
      <h2>Instructor Contact</h2>
      <ListGroup>
        {instructors.map((instructor) => (
          <ListGroup.Item key={instructor.id}>
            {instructor.name} - {instructor.email}
            <Button
              className="ml-2"
              variant="primary"
              size="sm"
              onClick={() => handleEmailClick(instructor)}
            >
              Send Email
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Email Modal */}
      <Modal show={emailModalShow} onHide={() => setEmailModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email to {selectedInstructor?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="emailSubject">
              <Form.Label>Subject:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email subject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="emailBody">
              <Form.Label>Body:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter email body"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEmailModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendEmail}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default InstructorContact;
