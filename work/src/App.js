import React from 'react';
import MyNavbar from './Nav';
import { Container } from 'react-bootstrap';
import './App.css';
//import MyFooter from './MyFooter';

const App = () => {
  return (
    <div>
      <MyNavbar />
      {/*<MyFooter />*/}
      <div className=' main'>
        <h1 className="text-white text-center">Welcome to the Missing Grade Reporting System</h1>
        <p className="text-white text-center">Empowering students to manage their grades effectively</p>

        <Container>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/front.webp"
                className="img-fluid increased-size"
                alt="System Overview Image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center text-white">System Overview</h2>
              <p className="text-white">
                The Missing Grade Reporting System is a user-friendly platform
                designed to help students track and report missing grades that
                are not recorded in their academic profiles. Whether you need to
                view your grades, report missing ones, or communicate with your
                instructors, this system has you covered.
              </p>
              <h2 className="text-white">Key Features</h2>
              <ul className="text-white">
                <li>Responsive design for seamless user experience</li>
                <li>Secure login for students using Student ID and PIN</li>
                <li>Detailed dashboard with current grades and missing grade alerts</li>
                <li>Filterable Grade Report by semester/academic year</li>
                <li>Easy-to-use form to report missing grades</li>
                <li>Contact information for instructors with a simulated email option</li>
                <li>Help and support section with FAQs and technical support contact form</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default App;
