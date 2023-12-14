import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function LoginPage() {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login process
    console.log("Logging in...");
    // Redirect to dashboard after successful login
    // window.location.href = "/dashboard";
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Student Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>PIN</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" href="../homepage.js">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default LoginPage;

