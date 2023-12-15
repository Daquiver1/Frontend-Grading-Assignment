import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    
      <footer className="text-center text-white" style={{ backgroundColor: 'black' }}>
        <Container>
          <section className="mt-1">
            <Row className="text-center d-flex justify-content-center pt-5">
              <Col md={2}>
                <h6 className="text-uppercase font-weight-bold">
                  <Button variant="link" className="text-white" onClick={() => console.log('About us clicked')}>
                    About us
                  </Button>
                </h6>
              </Col>
              <Col md={2}>
                <h6 className="text-uppercase font-weight-bold">
                  <Button variant="link" className="text-white" onClick={() => console.log('Products clicked')}>
                    Products
                  </Button>
                </h6>
              </Col>
              <Col md={2}>
                <h6 className="text-uppercase font-weight-bold">
                  <Button variant="link" className="text-white" onClick={() => console.log('Awards clicked')}>
                    Awards
                  </Button>
                </h6>
              </Col>
              <Col md={2}>
                <h6 className="text-uppercase font-weight-bold">
                  <Button variant="link" className="text-white" onClick={() => console.log('Help clicked')}>
                    Help
                  </Button>
                </h6>
              </Col>
              <Col md={2}>
                <h6 className="text-uppercase font-weight-bold">
                  <Button variant="link" className="text-white" onClick={() => console.log('Contact clicked')}>
                    Contact
                  </Button>
                </h6>
              </Col>
            </Row>
          </section>

          <hr className="my-1" />

          <section className="mb-5">
            <Row className="d-flex justify-content-center">
              <Col lg={8}>
                <p>
                Welcome to the Grade Report System, where academic excellence meets simplicity. Our platform is dedicated to providing accurate and insightful grade reports to students, instructors, and administrators. Feel free to explore our features and reach out for any assistance or information. Connect with us on social media for updates and announcements.

© 2023 Grade Report System

                </p>
              </Col>
            </Row>
          </section>

          <section className="text-center mb-5">
            <FaFacebookF className="text-white me-4" />
            <FaTwitter className="text-white me-4" />
            <FaGoogle className="text-white me-4" />
            <FaInstagram className="text-white me-4" />
            <FaLinkedin className="text-white me-4" />
            <FaGithub className="text-white me-4" />
          </section>
        </Container>

        <div className="text-center p-3" style={{ backgroundColor: 'radial-gradient(circle, red, yellow)' }}>
          © 2023 GRADE APP
          <Button variant="link" className="text-white" href="https://mdbootstrap.com/" target="_blank" rel="noopener noreferrer">
          GRADE APP
          </Button>
        </div>
      </footer>
    
  );
};

export default Footer;