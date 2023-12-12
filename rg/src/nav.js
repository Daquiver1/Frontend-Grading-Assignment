import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MyNav() {
  return (
    <div className="App">
      <Navbar bg="info" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
          <Image src="/images/logo.jpg" alt="Logo" height="40" className="d-inline-block align-top" />
          &nbsp; Missing Grade System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/gradeReport">View Grades</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/missingGradeForm">Report Missing Grades</Nav.Link>
              <Nav.Link href="/instructorContact">Contact Us</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/faq">FAQs</NavDropdown.Item>
                <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/privacy-policy">Privacy Policy</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     

      
    </div>
  );
}

export default MyNav;
