import React, { useState } from 'react';
import { Container, Accordion, Card, Form, Button } from 'react-bootstrap';

const HelpAndSupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Mock-up: Log the form data to the console
    console.log('Contact Form submitted:', { name, email, message });
    // Mock-up: Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container className="mt-5">
      <h2>Help and Support</h2>

      <Accordion defaultActiveKey="0">
        {/* FAQ Section */}
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Frequently Asked Questions (FAQ)
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>How can I report missing grades?</li>
                <li>What do I do if I encounter an error while accessing my grades?</li>
                <li>Is there a deadline for grade reporting?</li>
                {/* Add more FAQ items as needed */}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {/* Contact Form Section */}
      <h3 className="mt-4">Contact Technical Support</h3>
      <Form onSubmit={handleContactSubmit}>
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
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default HelpAndSupportPage;
