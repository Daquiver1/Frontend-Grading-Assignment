import React, { useState } from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!studentID || !pin) {
      setError('Please enter both Student ID and PIN.');
      return;
    }

    // Mock authentication - Replace this with actual authentication logic
    if (studentID === 'validStudentID' && pin === 'validPIN') {
      console.log('Login successful');
      // Redirect or perform necessary actions upon successful login
    } else {
      setError('Invalid Student ID or PIN. Please try again.');
    }
  };

  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
      <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src={logo}
                width="200"
                height="50"
                className="d-inline-block align-top" />{' '}
    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center">
              <Nav.Link  as={Link}  to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login" id='active' >Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      <Container className="d-flex align-items-center justify-content-center" style={{ marginTop: '100px' }}>
        <Card style={{ width: '300px' }}>
          <Card.Header className="text-center">
            <b>Login</b>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <>
                <FloatingLabel controlId="floatingInput" label="Student ID" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="00000000"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="PIN">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </FloatingLabel>
                <Button id="loginbtn" className="mt-3 w-100" onClick={handleLogin}>
                  Login
                </Button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <br></br>
      <br></br>
      <footer>
        <p>&copy; 2023 Missing Grade System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Login;
