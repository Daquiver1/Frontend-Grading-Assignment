import React from 'react';
import { Container, Accordion, Card, Button, Form } from 'react-bootstrap';

const Faqsection = () => {
  return (
    <Container className="mt-5">
      <h1>Help and Support</h1>

      {/* FAQ Section */}
      <Accordion className="mt-4">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How can I view my grades for a specific semester?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              You can use the semester filter on the Grade Report page to view grades for a specific semester.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              What do the different grade letters mean?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Grades are typically represented by letters such as A, B, C, etc. Each letter corresponds to a
              certain level of performance, with A being the highest and F being the lowest.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* Add more FAQ items as needed */}
      </Accordion>

      {/* Contact Form for Technical Support */}
      <h2 className="mt-5">Contact Technical Support</h2>
      <Form className="mt-4">
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Faqsection;
