import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [StudentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('StudentID: ', StudentID);
        console.log('Password: ', password);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 className="text-center mb-4">Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="StudentID">
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control
                                type="StudentID"
                                placeholder="Enter Student ID"
                                value={StudentID}
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};


export default Login;