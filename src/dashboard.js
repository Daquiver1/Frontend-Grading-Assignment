import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function Dashboard() {
  const currentGrades = [
    { subject: 'English', grade: 'A' },
    { subject: 'Math', grade: 'B' },
  ];

  const missingGrades = [
    { subject: 'French' },
    { subject: 'Spanish' },
    
  ];

    return (
        <><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Grade App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} id='active' to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><Container className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Card>
                <Card.Header className="text-center">Dashboard</Card.Header>
                <Card.Body>
                  <h5>Current Grades Of Yawsow</h5>
                  <ListGroup >
                    {currentGrades.map((item, index) => (
                      <ListGroup.Item key={index} variant="success">
                        {item.subject}: {item.grade}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>

                  <hr />

                  <h5>Missing Grades Of Yawsow</h5>
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
        </Container></>
       );
}

export default Dashboard;
