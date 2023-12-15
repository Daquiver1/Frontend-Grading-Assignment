import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

function LandingPage() {
    return (
     <><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Grade App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link as={Link} id='active' to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Card >
          <Card.Body>
          <Card.Title  className="text-center">About</Card.Title>
          <Card.Text>
          The Grade App  is a seven-page website serving as
           the interface for a "Missing Grade Reporting System."
            This system is specifically crafted to assist students
             in monitoring and reporting grades that may be absent
              from their academic records. The aim is to establish an 
              interactive and user-friendly platform, empowering students
               to easily access their grades, report any missing ones,
                and engage in communication with their instructors or academic administration.
  
          </Card.Text>
          <br></br>
            <Card.Title>Features</Card.Title>
            <Card.Text>
  
            <ListGroup as="ol" >
            <ListGroup.Item as="li">Landing Page</ListGroup.Item>
            <ListGroup.Item as="li">Login Page</ListGroup.Item>
            <ListGroup.Item as="li">Dashboard Page</ListGroup.Item>
            <ListGroup.Item as="li">Grade Report Page</ListGroup.Item>
            <ListGroup.Item as="li">Missing Grade Form Page</ListGroup.Item>
            <ListGroup.Item as="li">Instructor Contact Page</ListGroup.Item>
            <ListGroup.Item as="li">Help and Support Page</ListGroup.Item>
           
           </ListGroup>
  
            </Card.Text>
  
          </Card.Body>
         
        </Card>
      
      <footer>
          <p>&copy; 2023 My Grade App</p>
        </footer></>
    );
  }
  
  export default LandingPage;