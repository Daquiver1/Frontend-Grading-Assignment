// Homepage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LandingPage.css';

const AppHome = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col>
          <h1>Welcome to EduGuard</h1>
          <p className="lead">
            EduGuard is your comprehensive solution for efficient student grade management. With a focus on simplicity and functionality,
            our system empowers teachers and administrators to enhance the educational experience.
          </p>
          <p>
            <Button variant="primary" href="#learn-more" className="btn-center">
              Learn more
            </Button>
          </p>
        </Col>
      </Row>

      {/* How It Works Section */}
      <Row className="mt-5">
        <Col>
          <h2>How It Works</h2>
          <p>
            EduGuard streamlines the process of managing student grades. Teachers can easily input and update grades,
            view historical performance, and generate insightful reports. Administrators gain access to comprehensive
            analytics for data-driven decision-making.
          </p>
        </Col>
      </Row>

      {/* Contact Us Section */}
      <Row className="mt-5">
        <Col>
          <h2>Contact Us</h2>
          <p>
            Have questions or need support? Contact our team at <a href="mailto:info@eduguard.com">amamontford1@eduguard.com</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AppHome;
