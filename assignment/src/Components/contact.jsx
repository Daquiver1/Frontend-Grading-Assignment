import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactInstructor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending a request to the server
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container className="mt-5">
      <h2>Contact Instructor</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default ContactInstructor;
