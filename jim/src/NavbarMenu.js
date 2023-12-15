// NavbarMenu.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png" // Change this to the correct path in the public folder
          alt="UG Logo"
          width="40"
          height=""
          className="d-inline-block align-top"
        />{' '}
        Your Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="./Login">Login</Nav.Link>
          <Nav.Link href="./dashboard">Dashboard</Nav.Link>
          <Nav.Link href="./HelpAndSupport">Help</Nav.Link>
          <Nav.Link href="./grade-report">Grade Report</Nav.Link>
          <Nav.Link href="./missing-grade-form">Missing Grade Form</Nav.Link>
           <Nav.Link href="./InstructorContact">InstructorContact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
