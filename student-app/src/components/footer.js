import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa';

function MyFooter() {
  return (
    <Container fluid className="bg-dark text-white py-3 mt-5">
      <Row>
        <Col md={4}>
          <h5>Disclaimer</h5>
          <p>
           This website has been created to address all cases of missing grades and grade-related issues since there's been a lot of complaints. Make sure you go through the FAQs before filling anything o, yoo.
          </p>
        </Col>
        <Col md={4}>
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Form</a>
            </li>
            <li>
              <a href="#">Why this Initiative</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Visit Us</a>
            </li>
            <li>
              <a href="#">UG-DCIT</a>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Social Media</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">
              <FaFacebook size={32} style={{ marginRight: '10px' }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
              <FaTwitter size={32} style={{ marginRight: '10px' }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
              <FaInstagram size={32} style={{ marginRight: '10px' }} />
              </a>
            </li>
          </ul>
          <div>
            <p>Give us a FOLLOW</p>
          </div>
        </Col>
      </Row>
      <Row className="text-center mt-2">
       <p>Copyright @2023</p>
      </Row>
    </Container>
  );
}

export default MyFooter;
