import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand >Grade Report</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-3">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/grade report">Grade Report</Nav.Link>
            <Nav.Link as={Link} to="/missing grade form">Missing Grade Form</Nav.Link>
            <Nav.Link as={Link} to="/instructor">Contact</Nav.Link>
            <Nav.Link as={Link} to="/help and support">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;

