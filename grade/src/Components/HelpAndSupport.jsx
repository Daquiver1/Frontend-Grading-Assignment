import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './HelpAndSupport.css';

function AppFAQ() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <div className="support-contact-form">
        <h2>Contact Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>FAQ</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I report a missing grade?</Accordion.Header>
          <Accordion.Body>
            To report a missing grade, navigate to the "Missing Grade Form" section and fill out the required information, including the subject, date, and any additional details about the missing grade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I view all my reported missing grades?</Accordion.Header>
          <Accordion.Body>
            Yes, you can view all your reported missing grades in the "My Reported Grades" section of the dashboard. This section provides a comprehensive list of all the missing grades you have reported along with their current status.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How long does it take to resolve a reported missing grade?</Accordion.Header>
          <Accordion.Body>
            The time taken to resolve a reported missing grade may vary depending on the nature of the issue and the administrative process. However, our team strives to resolve reported missing grades as promptly as possible.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AppFAQ;
