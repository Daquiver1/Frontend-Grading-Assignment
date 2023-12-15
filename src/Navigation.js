
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/*import NavDropdown from 'react-bootstrap/NavDropdown';*/
import React from 'react';
import Trinity from './icons/trinity.PNG';


function Navigation() {
  return (
<div>
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" >
    <Container>
    <img
              alt=""
              src={Trinity}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/gradereport">Grade Report</Nav.Link>
          <Nav.Link href="/gradereportform">Missing Grade Form</Nav.Link>
          <Nav.Link href="/help">Help and Support</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/login">Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default Navigation


