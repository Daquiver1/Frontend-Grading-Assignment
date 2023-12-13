import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconImage from '../images/icon.png'

function Navigation() {
  return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" style={{ display: 'flex', justifycontent: 'spaces around' }}>
          <img
            src={iconImage}
            alt="Logo"
            style={{ width: '100px', height: 'auto', marginRight: '10px' }}
          />
          <span style={{ fontSize:'80px'}}> MGRS
          </span>
        </Navbar.Brand>
        <Nav className="me-auto" style={{ marginLeft: '50px', marginTop: '65px' }}>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/grade report">Grade Report</Nav.Link>
          <Nav.Link as={Link} to="/form">Missing Grade Form</Nav.Link>
          <Nav.Link as={Link} to="/instructor">Instructor</Nav.Link>
          <Nav.Link as={Link} to="/help">Help & Support</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default Navigation;