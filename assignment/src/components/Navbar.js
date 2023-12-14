import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  const navbarStyles = {
    backgroundColor: '#f8f9fa', 
    borderBottom: '1px solid #dee2e6', 
    padding: '10px', 
  };

  const brandStyles = {
    color: '#004080', 
    fontSize: '24px', 
  };

  const linkStyles = {
    color: '#495057', 
    marginLeft: '10px', 
    transition: 'color 0.3s ease',
  };

  linkStyles[':hover'] = {
    color: '#6c757d', 
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" style={navbarStyles}>
      <Container>
        <div className="left-side">
          <Navbar.Brand style={brandStyles}>AcademiaTracker</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="right-side">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/Landing" style={linkStyles}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard" style={linkStyles}>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/Login" style={linkStyles}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/GradeReport" style={linkStyles}>
                Grade Report
              </Nav.Link>
              <Nav.Link as={Link} to="/MissingGradeForm" style={linkStyles}>
                Missing Grade Form
              </Nav.Link>
              <Nav.Link as={Link} to="/InstructorContact" style={linkStyles}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/HelpAndSupport" style={linkStyles}>
                FAQs
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
