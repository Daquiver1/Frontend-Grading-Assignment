import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import login from './Login';

const MyNavbar = () => {
  return (
    <Navbar bg="info" expand="lg" variant="dark">
      <Container>
       
        <Navbar.Brand href="#home">
        <Image src="images/legon.png" 
        alt="Logo" 
        fluid style={{ maxWidth: '50px', maxHeight: '50px' }} />

          {' '}
           Missing Grade Reporting System 
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/landing.js">Home</Nav.Link>
            <Nav.Link href="/login.js">Log In</Nav.Link>
            <Nav.Link href="#about">Dashboard</Nav.Link>
            <Nav.Link href="#contct">Grade Report</Nav.Link>
            <Nav.Link href="#cntact">Missing Grade Form</Nav.Link>
            <Nav.Link href="#ontact">Instructor Contact</Nav.Link>
            <Nav.Link href="#conact">Help and Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
