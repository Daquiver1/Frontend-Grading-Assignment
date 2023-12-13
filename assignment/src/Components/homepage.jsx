import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const LandingPage = () => {
  return (
    <Container className="mt-5">
     
        <h1>Welcome to Our System</h1>
        <p>
          This is a brief overview of our system. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          <Link to="/dashboard">
            <Button variant="primary">Go to Dashboard</Button>
          </Link>
          {' '}
          <Link to="/grade-report">
            <Button variant="secondary">View Grade Report</Button>
          </Link>
          {' '}
          <Link to="/help-and-support">
            <Button variant="info">Get Help & Support</Button>
          </Link>
        </p>
      
    </Container>
  );
};

export default LandingPage;
