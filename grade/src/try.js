import React from 'react';
import { Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt="UG logo"
              src="images/legon-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span>Missing Grade Reporting System</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Dashboard</Nav.Link>
              <Nav.Link href="#">Grade Report</Nav.Link>
              <Nav.Link href="#">Missing Grade Form</Nav.Link>
              <Nav.Link href="#">Instructor Contact</Nav.Link>
              <Nav.Link href="#">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Jumbotron fluid>
        <Container>
          <h1>Welcome to the Missing Grade Reporting System</h1>
          <p>Empowering students to manage their grades effectively</p>
        </Container>
      </Jumbotron>

      <Container>
        <div className="row">
          <div className="col-lg-6 order-lg-1">
            <img
              src="images/confused.jpg"
              className="img-fluid"
              alt="System Overview Image"
            />
          </div>
          <div className="col-lg-6 order-lg-2">
            <section id="system-overview">
              <h2 className="text-center">System Overview</h2>
              <p>
                The Missing Grade Reporting System is a user-friendly platform
                designed to help students track and report missing grades that
                are not recorded in their academic profiles. Whether you need to
                view your grades, report missing ones, or communicate with your
                instructors, this system has you covered.
              </p>
            </section>
          </div>
          <div className="col-12 order-3">
            <img
              src="images/confused2.jpg"
              className="img-fluid d-lg-none"
              alt="System Overview Image"
            />
          </div>
        </div>
      </Container>

      <section id="features">
        <Container>
          <h2>Key Features</h2>
          <ul>
            <li>Responsive design for seamless user experience</li>
            <li>Secure login for students using Student ID and PIN</li>
            <li>Detailed dashboard with current grades and missing grade alerts</li>
            <li>Filterable Grade Report by semester/academic year</li>
            <li>Easy-to-use form to report missing grades</li>
            <li>Contact information for instructors with a simulated email option</li>
            <li>Help and support section with FAQs and technical support contact form</li>
          </ul>
        </Container>
      </section>

      <section id="get-started">
        <Container>
          <h2>Get Started</h2>
          <p>
            Ready to take control of your grades? Log in now to access the features
            of the Missing Grade Reporting System.
          </p>
          <a href="login.html" className="cta-button">
            <div className="container mt-5">
              <div className="text-center">
                <button id="loginButton" className="btn btn-primary">
                  <i className="bi bi-lock"></i> Log In
                </button>
              </div>
            </div>
          </a>
        </Container>
      </section>

      <footer className="bg-dark text-light text-center py-4">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <p>&cop y; 2023 Missing Grade Reporting System. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light"><i className="bi bi-envelope"></i></a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
