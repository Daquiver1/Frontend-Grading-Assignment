import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
    return (
        <div>
             <Navbar expand="lg" bg = "dark" variant = "dark" sticky = "top" >
      <Container>
        <Navbar.Brand href="#home">Grade Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/gradereport">Grade Report</Nav.Link>
            <Nav.Link href="/missinggradeform">Missing Grade Form</Nav.Link>
            <Nav.Link href="/landingpage">Landing Page</Nav.Link>
            <Nav.Link href="/loginpage">Login Page</Nav.Link>
            <Nav.Link href="/helpandsupport">Help And Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    )
}

export default Navigation