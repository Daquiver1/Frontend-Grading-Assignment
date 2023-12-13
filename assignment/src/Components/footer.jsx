// ComplexFooter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AppFooter = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Grade Report System</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget justo nec quam eleifend ullamcorper.
            </p>
          </Col>
          <Col md={4}>
            <h5>Important Links</h5>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <p>&copy; 2023 Grade Report System. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="list-inline">
              <li className="list-inline-item">Privacy Policy</li>
              <li className="list-inline-item">Terms of Service</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
