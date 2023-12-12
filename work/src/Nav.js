import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo and Title on Top */}
          <Navbar.Brand href="/">
            <img
              src="images/logo.jpg"
              alt="Logo"
              className="d-inline-block align-top"
              style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '10px' }}
            />
            Missing Grade Reporting System
          </Navbar.Brand>

          {/* Navbar Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Collapsible Content */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Menu */}
            <MyNavbar />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Rest of your content */}
      <div className='bg-dark main'>
        {/* ... */}
      </div>
    </div>
  );
};

export default MyNavbar;
