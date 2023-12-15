// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-5 bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@universityofghana.edu
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +123 456 7890
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              University Road, Legon, Accra, Ghana
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            </p>
          </Col>
          <Col md={4}>
            <h5>University of Ghana</h5>
            <p>&copy; 2023 University of Ghana. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
