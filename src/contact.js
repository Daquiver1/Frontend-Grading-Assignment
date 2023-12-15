import React, { useState } from 'react';
import { Col, Card, Button, Form } from 'react-bootstrap';
import Navigation from './Navigation';


const ContactPage = () => {
  const [instructors] = useState([
    { id: 1, name: 'Mark Attah Mensah', email: 'mamensah@staff.edu.ug.gh' },
    { id: 2, name: 'Michael Soli', email: 'michaelsoli@staff.edu.ug.gh' },
    { id: 2, name: 'Aziz Dwumfuor', email: 'azizdwumfuor@staff.edu.ug.gh' },
    { id: 2, name: 'Paul Nii Ammah', email: 'paulammah@staff.edu.ug.gh' },
    { id: 2, name: 'Nana Kwame Asomoah', email: 'nanakwame@staff.edu.ug.gh' },
    // Add more instructors as needed
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    // Simulate sending an email (update state to show email sent)
    setEmailSent(true);
    // You can add further functionality here like API calls or actions upon "sending" the email.
  };

  return (
    <div  className="background">
        <Navigation/>
        <h1 className="acc-head">Instructor Contact Page</h1>
        <div className="login-div">
        <Col md={4}>
          <h2 className="message">Instructors</h2>
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="mb-3">
              <Card.Body>
                <Card.Title>{instructor.name}</Card.Title>
                <Card.Text>Email: {instructor.email}</Card.Text>
                <Button onClick={() => setSelectedInstructor(instructor)}>Select</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
    <div className="banku">
        
          <h2 className='message'>Email Instructor</h2>
          {selectedInstructor && (
            <div>
              <h3 className='message'>{selectedInstructor.name}</h3>
              <Form>
                <Form.Group controlId="emailContent">
                  <Form.Label><h2 className='message'>Message</h2></Form.Label>
                  <Form.Control className="e-area" as="textarea" rows={5} value={emailContent} onChange={(e) => setEmailContent(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleSendEmail}>Send Email</Button>
                {emailSent && <p className="mt-3">Email sent to {selectedInstructor.email}.</p>}
              </Form>
            </div>
          )}
        
        </div>
        </div>
      
    
    
    </div>
   
  );
};

export default ContactPage;
