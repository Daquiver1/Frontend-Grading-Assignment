import React from "react";
import './PagesHeading.css'
import * as ReactBootStrap from "react-bootstrap";



const PagesHeading = () => {
    return(
        <div className='parent-container'>
      <div className='content-wrap'> 
  

      <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="bg-body-tertiary">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">Student Self Service</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
          {/*  <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link> */}
            <ReactBootStrap.NavDropdown title="Dashboard" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Grade report</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Missing grade form
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Instructor Contact</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/Pages/Login">Login</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="/Pages/Support">
              Support
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>

            </div>
            </div>
    )
}

export default PagesHeading;
