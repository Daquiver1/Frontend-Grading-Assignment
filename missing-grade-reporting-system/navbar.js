import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavigationBar = () => {
    return (
       <Navbar bg="light" expand="lg">
         <Container>
           <Navbar.Brand href="#home">MGRS</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link href="#Landing Page">Landing Page</Nav.Link>
               <Nav.Link href="#Login">Login</Nav.Link>
               <Nav.Link href="#dashboard">Dashboard</Nav.Link>
               <Nav.Link href="#grade-report">Grade Report</Nav.Link>
               <Nav.Link href="#missing-grade-form">Report Missing Grade</Nav.Link>
               <Nav.Link href="#instructor-contact">Instructor Contact</Nav.Link>
               <Nav.Link href="#help-and-support">Help and Support</Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
    );
   };


   export default NavigationBar;