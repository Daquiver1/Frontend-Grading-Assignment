import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Missing Grade Reporting App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/form">Form</Nav.Link>
          <Nav.Link as={Link} to="/report">Report</Nav.Link>
          <Nav.Link as={Link} to="/support">Support</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
