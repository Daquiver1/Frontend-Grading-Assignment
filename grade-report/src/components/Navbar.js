import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function AppNavigation() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <div className="left-side">
          <Navbar.Brand>EduGuard</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="right-side">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/LandingPage">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/LoginPage">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/GradeReport">
                Grade Report
              </Nav.Link>
              <Nav.Link as={Link} to="/MissingGradeReport">
                Missing Grade Form
              </Nav.Link>
              <Nav.Link as={Link} to="/InstructorContact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/HelpAndSupportPage">
                FAQs
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigation;
