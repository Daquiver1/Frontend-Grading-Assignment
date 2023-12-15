import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Dashboard = () => {
  const currentGrades = [
    { subject: 'UGRC 210	Academic Writing II', grade: 'A' },
    { subject: 'DCIT 201	Programming I', grade: 'B' },
    { subject: 'DCIT 203	Digital and Logic Systems Design', grade: 'C' },
    { subject: 'DCIT 207	Computer Architecture & Organisation', grade: 'A' }
  ];

  const missingGrades = [
    { subject: 'DCIT 205	Multi Media and Web Design' },
    { subject: 'MATH 223	Calculus II' },
    
  ];


  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="60"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} id="active" to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/report">
                Grade Report
              </Nav.Link>
              <Nav.Link as={Link} to="/grade">
                Missing Grade
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Instructor Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/help">
                Help and Support
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Header className="text-center">Student Dashboard</Card.Header>
              <Card.Body>
                <h5>Current Grades For L200 1st Semester</h5>
                <ListGroup>
                  {currentGrades.map((item, index) => (
                    <ListGroup.Item key={index}>
                      {item.subject}: {item.grade}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <hr />

                <h5>Missing Grades For L200 1st Semester</h5>
                {missingGrades.length === 0 ? (
                  <p>No missing grades. Keep up the good work!</p>
                ) : (
                  <ListGroup>
                    {missingGrades.map((item, index) => (
                      <ListGroup.Item key={index} variant="danger">
                        {item.subject} - Missing
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
