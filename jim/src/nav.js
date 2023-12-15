import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './nav.css'
import login from './Login';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar  bg='dark'  expand="lg" variant="dark">
      <Container>
       
        <Navbar.Brand href="#home">
        <Image className='legon' src="logo.png" 
        alt="Logo" 
        fluid  />

          {' '}
           Missing Grade Reporting System 
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/GradeReport">Grade Report</Nav.Link>
            <Nav.Link href="/MissingGradeForm">Missing Grade Form</Nav.Link>
            <Nav.Link href="/InstructorContact">Instructor Contact</Nav.Link>
            <Nav.Link href="/HelpAndSupport">Help and Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
