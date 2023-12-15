import React from 'react';
import { Container, Row, Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './nav.css'


function MyNav() {
  return (
    <div className="App">
      <Navbar bg="info" variant="dark" expand="md">
        <Container className="ten">
          <Navbar.Brand href="/">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png?20200927212755" alt="Logo" height="40" className="d-inline-block align-top" />
          &nbsp; Missing Grade
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/grades">View Grades</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/landingpage">Dashboard</Nav.Link>
              <Nav.Link href="/missing-grade-form">Report Missing Grades</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/faq">Help And Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          
        </Row>
      </Container>

      
    </div>
  );
}

export default MyNav;
