import React from 'react'
import {Link} from 'react-router-dom';
import logo from './img/logo.png';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const MyNavbar = () =>{
    return (
        <><><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src={logo}
                width="60"
                height="50"
                className="d-inline-block align-top" />{' '}
    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center">
              <Nav.Link  as={Link} id='active' to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
        <Card >
          <Card.Header className="text-center">MGS Features</Card.Header>
          <Card.Body>
          <Card.Title  className="text-center">About Missing Grade System</Card.Title>
          <Card.Text>
          MGS is 7-page website that acts as the front for a
           "Missing Grade Reporting System". 
           This system is designed to help students
            track and report grades that are not recorded
             in their academic profiles. The goal is to create an interactive, 
             user-friendly interface that enables students to view their grades,
              report missing grades, and communicate with their instructors or academic administration.
  
          </Card.Text>
          <br></br>
            <Card.Title>Features</Card.Title>
            <Card.Text>
  
            <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Landing Page</ListGroup.Item>
            <ListGroup.Item as="li">Login Page</ListGroup.Item>
            <ListGroup.Item as="li">Dashboard Page</ListGroup.Item>
            <ListGroup.Item as="li">Grade Report Page</ListGroup.Item>
            <ListGroup.Item as="li">Missing Grade Form Page</ListGroup.Item>
            <ListGroup.Item as="li">Instructor Contact Page</ListGroup.Item>
            <ListGroup.Item as="li">Help and Support Page</ListGroup.Item>
           
           </ListGroup>
  
            </Card.Text>
  
          </Card.Body>
         
        </Card></>
          <br></br><br></br>
          <footer>
            <p>&copy; 2023 Missing Grade System. All rights reserved.</p>
          </footer></>
      );
} 