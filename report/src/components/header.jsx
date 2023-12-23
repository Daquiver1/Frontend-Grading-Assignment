import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  const navbarStyle = {
    background: 'linear-gradient(to right, #4e54c8, #8f94fb)', 
    borderRadius: '0 0 15px 15px',
    marginBottom: '20px',
    color: 'white', 
  };

  return (
    <Navbar style={navbarStyle} variant="dark" expand="lg">
      <Container>
        <div className="left-side">
          <Navbar.Brand>Academic Navigator</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="right-side">
            <Nav className="mr-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/grade report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/missing grade form">Missing Grade Form</Nav.Link>
              <Nav.Link as={Link} to="/instructor">Contact</Nav.Link>
              <Nav.Link as={Link} to="/help and support">FAQs</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
