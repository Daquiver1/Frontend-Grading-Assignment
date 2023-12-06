import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import './DashNav.css';

const DashNav = () =>{
    return(
        <div className="NavContainer">
            <div className="DashNavContainer">
        <ReactBootStrap.Navbar expand="sm" className="bg-body-tertiary px-3 ms-auto mt-2 mt-lg-0">
      <ReactBootStrap.Container fluid>
        <ReactBootStrap.Navbar.Brand href="#">Navbar scroll</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
        <ReactBootStrap.Navbar.Collapse id="navbarScroll">
          <ReactBootStrap.Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#action2">Link</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Link" id="navbarScrollingDropdown" className="ms-auto mt-2 mt-lg-0">
              <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action4">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action5">
                Something else here
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link href="#" disabled>
              Link
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
         
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
    </div>
    </div>
    )
}

export default DashNav;