import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home() {
  const image = require('../assets/images/img-hero1.jpg');
  return (
    <div>
      {/* Header */}
      <Container>
        
          <h1 className="display-4">Excellence in Education</h1>
          <p className="lead">
            Welcome to Grade Report, your go-to platform for tracking academic excellence.
          </p>
          <hr className="my-4" />
          <p>
            Log in to access your grades, view your dashboard, and stay on top of your academic performance.
          </p>
          <p className="lead">
            <Button as={Link} to="/login" variant="primary">Log In</Button>
          </p>
      </Container>

      {/* Image Section */}
      <Container>
      <img src={image} alt="Dr. Doe" />
    </Container>

      {/* Additional Content Section (You can add more sections as needed) */}
      <Container>
        <h2 className="mt-5">Explore Our Features</h2>
        <p>
          Discover the various tools and features designed to enhance your educational journey.
        </p>
        {/* Add more content or features here */}
      </Container>
    </div>
  );
}

export default Home;
