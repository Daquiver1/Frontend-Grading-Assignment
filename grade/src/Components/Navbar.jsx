import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const AppHead = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className='navbar'>
        <Container className='container'>
          <Navbar.Brand as={Link} to="#home">GRADETRACK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/GradeReport">Grade Report</Nav.Link>
            <Nav.Link as={Link} to="/MissingGradeForm">Missing Grade Form</Nav.Link>
            <Nav.Link as={Link} to="/HelpAndSupport">Help & Support</Nav.Link>
            <Nav.Link as={Link} to="/login"><button>Log In</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default AppHead;