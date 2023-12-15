// LoginPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginPage.css";

import Navigation from "../components/Navigation";
import Videologin from "../components/Videologin";

function LoginPage() {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (studentId === "12345678" && pin === "1234") {
      // Login successful
      history.push("/dashboard");
    } else {
      // Login failed
      setError("Invalid student ID or PIN. Please try again.");
    }
  };

  return (
    <div>
      <div className="Navigation">
        <Navigation />
      </div>
      <div>
        <Videologin />
      </div>
      <Container className="d-flex-container">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={6}>
            <h1 className="display-3">Missing Grade Reporting System</h1>
            <p className="lead">
              A system designed to help students track and report grades that
              are not recorded in their academic profiles.
            </p>
            <p>
              <Link to="/">
                <Button variant="secondary" size="lg">
                  Back to Home
                </Button>
              </Link>
            </p>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleLogin} className="login-form">
              <h2 className="text-center">Login</h2>
              <Form.Group controlId="studentId">
                <Form.Label>
                  <FaUser /> Student ID
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="pin">
                <Form.Label>
                  <FaLock /> PIN
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
