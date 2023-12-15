// LandingPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import "./LandingPages.css"
import Footer from '../footer';

const LandingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const backgroundStyle = {
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="landler">
      <Navbar bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand href="/">Grading System</Navbar.Brand>
        </Container>
      </Navbar>
    <div  style={backgroundStyle}>
      <Container className="mt-5 text-light">
        <div>
          <h1>Welcome to the Grading System</h1>
          <p>
          A grading system is a method used by educational institutions to assess and evaluate a student's academic performance in a course or program. The primary purpose of a 
          grading system is to communicate the level of achievement or proficiency a student has reached in their coursework.
          </p>
          <Button variant="primary" onClick={handleLoginModalShow}>
            Login
          </Button>
        </div>
      </Container>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Include your login form here */}
          {/* For simplicity, let's just show a message */}
          <p>This is where your login form will go.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginModalClose}>
            Close
          </Button>
          <Button variant="primary" as={Link} to="/login">
            Go to Login Page
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default LandingPage;
