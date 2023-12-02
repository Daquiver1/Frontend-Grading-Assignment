import React from 'react';
import MyNavbar from './nav';
import MyFooter from './MyFooter';
import login from './Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';



const App = () => {
  return (
    <div>
      <MyNavbar />
      
      <MyFooter />


        <Container>
          <h1>Welcome to the Missing Grade Reporting System</h1>
          <p>Empowering students to manage their grades effectively</p>
        </Container>
     

      <Container>
        <div >
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






          </div>
  );
};

export default App;
