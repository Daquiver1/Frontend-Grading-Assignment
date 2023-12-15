import React from "react";
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { withRouter, Link } from "react-router-dom";

import { getUserInfo, isAuthenticated, destroySession } from "../../utils/auth";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      studentID: "",
      firstname: "",
      lastname: "",
    };
  }

  handleLogout = () => {
    destroySession();
    this.props.history.push("/login");
    //Implement your logout simulation here
    // for simplicity, we will jst isLoggedIn to false
    this.setState({
      isLoggedIn: false,
      username: "",
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    let navbar = (
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            University of Ghana
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

    if (isAuthenticated()) {
      const user = getUserInfo();

      navbar = (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">University of Ghana</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="">
                <Nav.Link as={Link} to="/">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/studenthome">
                  Menu
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link className="ml" disabled>
                  <span id="name">
                    Signed in as: {user.getfirstName()} {user.getLastName()}
                  </span>
                </Nav.Link>
                <Nav.Link onClick={this.handleLogout} href="/login">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    return navbar;
  }
}

export default withRouter(Header);
