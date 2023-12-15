import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faReact,
  faVuejs,
  faLaravel
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-success text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="home" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="home" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="home" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="home" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="home" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="home" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <Container className="text-center text-md-start mt-5">
          {/* Grid row */}
          <Row className="mt-3">
            {/* Grid column */}
            <Col md={3} lg={4} xl={3} mx-auto mb-4>
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />
                UG Grade Report System
              </h6>
              <p>
                This website helps keep track of missing grades.
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={2} lg={2} xl={2} mx-auto mb-4>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                DMTS
              </h6>
              <p>
                <a href="home!" className="text-reset">
                  <FontAwesomeIcon icon={faAngular} /> AWS
                </a>
              </p>
              <p>
                <a href="home!" className="text-reset">
                  <FontAwesomeIcon icon={faReact} /> WWE
                </a>
              </p>
              <p>
                <a href="home!" className="text-reset">
                  <FontAwesomeIcon icon={faVuejs} /> FIFA
                </a>
              </p>
              <p>
                <a href="home!" className="text-reset">
                  <FontAwesomeIcon icon={faLaravel} /> NBA
                </a>
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={3} lg={2} xl={2} mx-auto mb-4>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="home!" className="text-reset">Sakai</a>
              </p>
              <p>
                <a href="home!" className="text-reset">UG Website</a>
              </p>
              <p>
                <a href="home!" className="text-reset"> MIS Web</a>
              </p>
              <p>
                <a href="home!" className="text-reset">Help</a>
              </p>
            </Col>
            {/* Grid column */}

            {/* Grid column */}
            <Col md={4} lg={3} xl={3} mx-auto mb-md-0 mb-4>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" />
                University of Ghana,Legon , GH
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                ug.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                + 233 100 100 5009
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className="me-3" />
                + 233 200 200 6009
              </p>
            </Col>
            {/* Grid column */}
          </Row>
          {/* Grid row */}
        </Container>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="ug.com">ug.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
