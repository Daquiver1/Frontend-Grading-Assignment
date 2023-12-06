
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'


function Navigation() {
  return (
<div>
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" >
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/dashboard.js">Dashboard</Nav.Link>
          <Nav.Link href="/gradereport">Grade Report</Nav.Link>
          <NavDropdown title="Dropdown" bg="dark" variant="dark">
            <NavDropdown.Item href="#action/3.1">Missing Grade Form</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Instructor Contact
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Help and Support</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default Navigation


