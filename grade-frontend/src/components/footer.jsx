import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const pages = [
    { name: 'Home', path: 'home' },
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Grade Report', path: 'gradereport' },
    { name: 'Help and Support', path: 'help and support' },
    { name: 'Contact', path: 'instruct contact page' },
    { name: 'Login', path: 'login' },
    { name: 'Missing Grade Form', path: 'missing grade form' },
  ];

  return (
    <Container fluid className="bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <h5 className="text-uppercase mb-4">Grade Book</h5>
            <p>
            Efficiently track and manage academic performance with our grade book.
            </p>
          </Col>
          <Col md={6}>
            <h5 className="text-uppercase mb-4">Connect with Us</h5>
            <div className="d-flex">
              {pages.map((page, index) => (
                <Link key={index} to={page.path} className="btn btn-light btn-lg me-2">
                  {page.name}
                </Link>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Contact Information</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home"></i> Accra, 00-967
              </li>
              <li>
                <i className="fas fa-envelope"></i> gradebook@gmail.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +233247890382
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <table className="table text-white">
              <tbody className="fw-normal">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} My Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
