// AppNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar
      style={{
        backgroundColor: '#2c3e50', // Set your preferred background color
        borderRadius: '10px', // Adjust border radius as needed
        padding: '10px', // Adjust padding as needed
      }}
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{
            fontWeight: 'bold',
            color: '#ffffff', // Set the text color to be dark
          }}
        >
          ACADEMIC RECORDS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              to="/homepage"
              style={{
                fontWeight: 'bold',
                color: '#ffffff', // Set the text color to be dark
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gradereport"
              style={{
                fontWeight: 'bold',
                color: '#ffffff', // Set the text color to be dark
              }}
            >
              Grades
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{
                fontWeight: 'bold',
                color: '#ffffff', // Set the text color to be dark
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <Link to="/login" style={{ fontWeight: 'bold', color: '#ffffff' }}>Konor Clement Cobby</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
