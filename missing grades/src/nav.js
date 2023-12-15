import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MyNav() {
  return (
    <div className="nav-list">
      <Navbar variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
          <Image src="/images/logo.png" alt="Logo" height="40" className="d-inline-block align-top" />
          &nbsp; 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-reed">
              <Nav.Link href="/"className='header-text'>Home</Nav.Link>
              <Nav.Link href="/gradeReport" className='header-text'>Grade Report</Nav.Link>
              <Nav.Link href="/missingGradeForm" className='header-text'>Report Missing Grades</Nav.Link>
              <Nav.Link href="/Dashboard" className='header-text'>Dashboard</Nav.Link>
              <Nav.Link href="/instructorContact" className='header-text'>Contact Instructor</Nav.Link>
              <Nav.Link href="/faq" className='header-text'>FAQs</Nav.Link>
              <Nav.Link href="/login" className="login">Log In</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

      
    </div>
  );
}

export default MyNav;
