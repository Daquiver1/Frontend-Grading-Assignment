import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import MyFooter from './MyFooter';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <MyFooter />
      <h1>Welcome to the Missing Grade Reporting System</h1>
      
    </div>
  );
};


export default LandingPage;
