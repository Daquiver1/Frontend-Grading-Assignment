import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar  expand="lg" variant="dark">
      <Container>
       
        <Navbar.Brand href="#home">
        
            
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/LoginPage">Login</Nav.Link>
            <Nav.Link href="/DashboardPage">Dashboard</Nav.Link>
            <Nav.Link href="/GradeReportPage">Grade Report</Nav.Link>
            <Nav.Link href="/MissingGradeForm">Missing Grade Form</Nav.Link>
            <Nav.Link href="/InstructorContactPage">Instructor Contact</Nav.Link>
            <Nav.Link href="/HelpAndSupportPage">Help and Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
  );
};

export default MyNavbar;