import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import MyNavbar from './Nav';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Simulating authentication (replace this with your actual authentication logic)
    if (studentId === 'sampleStudent' && pin === '1234') {
      // Successful login
      alert('Login successful!');
      // You can redirect the user to the dashboard or another page here
    } else {
      // Failed login
      setErrorMessage('Invalid Student ID or PIN');
    }
  };

  const handleForgotPassword = () => {
    // Simulate password recovery logic (replace this with your actual logic)
    alert('Password recovery feature coming soon!');
  };

  return (
    <div>
    <MyNavbar />
    <Container className="mt-5 mx-auto p-3" style={{ maxWidth: '500px' }}>
      <h2 className="text-center">Student Login</h2>

      <Form>
        <Form.Group controlId="studentId">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="pin">
          <Form.Label>PIN</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </Form.Group>

        {errorMessage && <div className="text-danger">{errorMessage}</div>}

        <Button variant="primary" type="button" onClick={handleLogin} className="mt-3">
          Log In
        </Button>

        <Row className="mt-3">
          <Col>
            <Button variant="link" onClick={handleForgotPassword}>
              Forgot Password?
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
    </div>
  );
};

export default LoginPage;
