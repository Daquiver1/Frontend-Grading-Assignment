import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container className="border rounded">
        <Navbar.Brand as={Link} to="#home">Grade Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="gradereport">Grade Report</Nav.Link>
            <Nav.Link as={Link} to="help and support">Help and Support</Nav.Link>
            <Nav.Link as={Link} to="instructor contact page">Instructor Contact</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="missing grade form">Missing Grade Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
