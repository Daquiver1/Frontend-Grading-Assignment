
import React from 'react';
import { Collapse, Container, Form, Button } from 'react-bootstrap';
import './HelpAndSupportPage.css';

const AppHelpAndSupportPage = () => {
  return (
    <>
     <div style={{ backgroundColor: 'rgba(52, 72, 68, 0.78)', padding: '20px' }}>
    <h3>Frequently Asked Questions</h3>
      <div className="list-group w-100">
        <a
          href="#faq1collapse"
          data-mdb-toggle="collapse"
          aria-expanded="false"
          aria-controls="faq1collapse"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">How do I view my student's grades?</h5>
          </div>
          <p className="mb-1">You can view your student's grades by accessing the Grade Report section in the dashboard.</p>
          <small>
            <u>Learn more</u>
          </small>

          <Collapse in={false} id="faq1collapse">
            <div className="collapse mt-3">
              To view detailed information about each subject and assignment, click on the respective entry in the Grade Report.
            </div>
          </Collapse>
        </a>

        <a
          href="#faq2collapse"
          data-mdb-toggle="collapse"
          aria-expanded="false"
          aria-controls="faq2collapse"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">How can I get help if I'm stuck?</h5>
          </div>
          <p className="mb-1">If you're stuck or need assistance, click on the "Help and Support" section in the dashboard to contact our support team.</p>
          <small className="text-muted">
            <u>Learn more</u>
          </small>

          <Collapse in={false} id="faq2collapse">
            <div className="collapse mt-3">
              Navigate to the Settings page and customize your notification preferences to stay informed about your student's academic progress.
            </div>
          </Collapse>
        </a>

        <a
          href="#faq3collapse"
          data-mdb-toggle="collapse"
          aria-expanded="false"
          aria-controls="faq3collapse"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">How can I report missing grades or errors?</h5>
          </div>
          <p className="mb-1">To report missing grades or errors, use the Missing Grade Form available in the dashboard.</p>
          <small className="text-muted">
            <u>Learn more</u>
          </small>

          <Collapse in={false} id="faq3collapse">
            <div className="collapse mt-3">
              Complete the form with the necessary details, and our support team will assist you in resolving the issue promptly.
            </div>
          </Collapse>
        </a>
      </div>
    

      {/* Contact Form */}
      <Container className="mt-4">
        <h3 className="mb-4">Still have any questions? Contact us to get your answer!</h3>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
          </Form.Group>

          <Button variant="dark" type="submit" className="button-blue">
            Send
          </Button>
        </Form>
      </Container>
      </div>
    </>
  );
};

export default AppHelpAndSupportPage;
