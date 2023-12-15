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
import Accordion from 'react-bootstrap/Accordion';

const Help = () => {
    return(
        <><><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="60"
              height="50"
              className="d-inline-block align-top" />{' '}
  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} id='active' to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Header className="text-center">Grade Report</Card.Header>
              <Card.Body>
                <h5>Frequently Asked Questions (FAQ)</h5>
                      <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Q: How often are grades updated?</Accordion.Header>
              <Accordion.Body>
              The frequency of grade updates can vary depending on the time
               . In many cases, grades are updated at the end of each semester
                or term after all assessments and exams have been completed. Sometimes we
                 may provide more frequent updates, such as mid-term grades or progress reports.
                  
            communicate with your professors to understand when and how often grades are updated for your courses.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>A: Grades are updated weekly.</Accordion.Header>
              <Accordion.Body>
              If grades are updated weekly, it means that you can expect to see regular
               updates on your academic performance throughout the semester.
                This frequent updating allows you to stay informed about 
                your progress and performance in the course on a more regular basis.
                 It's a helpful practice for both students and instructors, 
                 as it provides timely feedback and allows for adjustments as needed.

              To stay updated on your grades, 
              make sure to regularly check the grading
               system or platform used by your educational institution. 
               If you have any questions or concerns about your grades, 
               don't hesitate to reach out to your professors for clarification or assistance.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
               

                {/* Contact form for technical support */}
                <h5 className="mt-4">Contact Technical Support</h5>
                <form /* Add your form handling logic here */>
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" />

                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" />

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" className="form-control" name="message"></textarea>
                  <br></br>
                  <button type="submit"  className="btn w-100" id='btn' >Submit</button>
                </form>

                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container></>
        </>
    )
};

export default Help;
