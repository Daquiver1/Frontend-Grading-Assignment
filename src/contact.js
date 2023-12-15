import React, { useState } from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  // Sample instructor data
  const instructors = [
    { id: 1, name: 'Michael Agbo Tettey Soli', email: 'msoli@ug.edu.gh',   number: '0243598172' },
    { id: 2, name: 'Dwumfuor Adbullai Aziz', email: 'adwumn@ug.edu.gh',   number: '0523568712' },
    { id: 3, name: 'Paul Ammah', email: 'paul@ug.edu.gh', number: '05923512357' },
    { id: 4, name: 'Ferdinand Katsriku', email: 'katsp@ug.edu.gh',  number: '0559812521' },
    
  ];

  const [emailContent, setEmailContent] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = () => {
    // You can add logic here to handle the simulated email sending
    // For now, let's just log the email content to the console
    console.log('Simulated Email Content:', emailContent);
    handleCloseModal();
  };

  const renderInstructors = () => {
    return instructors.map((instructor) => (
      <ListGroup.Item key={instructor.id} action onClick={() => handleShowModal(instructor)}>
        <div>
          <strong>Name:</strong> {instructor.name}
        </div>
        <div>
          <strong>Email:</strong> {instructor.email}
        </div>
        <div>
          <strong>Number:</strong> {instructor.number}
        </div>
      </ListGroup.Item>
    ));
  };
  

    return(
        <><><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-top" />{' '}
  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} id='active' to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
       <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Header className="text-center">Instructor Contact</Card.Header>
              <Card.Body>
                <ListGroup>{renderInstructors()}</ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="emailContent" className="form-label">
                Email Content
              </label>
              <textarea
                className="form-control"
                id="emailContent"
                rows="5"
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button id='btn' onClick={handleSendEmail}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal></>
        <br></br><br></br>
        <footer>
          <p>&copy; 2023 Missing Grade System. All rights reserved.</p>
        </footer></>
    )
};

export default Contact;
