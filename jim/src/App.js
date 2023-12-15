import './App.css';
import MyNavbar from './nav'
import React, { useState } from 'react';
import {  Container, Jumbotron } from 'react-bootstrap';


const App = () => {



  return (
    <div >
     <MyNavbar />
     <Container className="mt-4 text-light bg-secondary">
      <div className="jumbotron">
        <h1 className="display-4">Missing Grade Reporting System</h1>
        <p className="lead">
          Welcome to the Missing Grade Reporting System, designed to help students track and report
          grades that are not recorded in their academic profiles.
        </p>
        <hr className="my-4" />
        <p>
          Features:
          <ul>
            <li>Effortless Reporting: Report missing grades with a simple and intuitive form.</li>
            <li>Course Details: Provide course name, instructor name, expected grade, and an explanation.</li>
            <li>Track Progress: Keep track of submitted reports and their status.</li>
          </ul>
        </p>
        <p className="lead">
          To get started, head over to the reporting page and fill out the form to report any missing grades.
        </p>
      </div>
    </Container>
    </div>
  );
};

export default App;
