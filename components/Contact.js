import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Modal, Form } from 'react-bootstrap';

const instructorData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  // Add more instructors as needed
];

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState({});
  const [message, setMessage] = useState('');

  const handleShowModal = (instructor) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstructor({});
    setMessage('');
  };

  const handleSendMessage = () => {
    // Simulated action - you can replace this with actual email sending logic
    console.log(`Sending message to ${selectedInstructor.name}: ${message}`);
    handleCloseModal();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Instructor Contact Page</h1>

      <div className="row">
        {instructorData.map((instructor) => (
          <div key={instructor.id} className="col-md-4 mb-4">
            <Card bg="light" text="dark" className="h-100">
              <Card.Body>
                <Card.Title className="text-center">{instructor.name}</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>Email: {instructor.email}</ListGroupItem>
                <ListGroupItem className="text-center">
                  <Button variant="primary" onClick={() => handleShowModal(instructor)}>
                    Send Message
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Contact {selectedInstructor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="message">
            <Form.Label>Your Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
