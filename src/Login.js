import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import MyFooter from "./components/Footer";

const Login = () => {
    const [email, setEmail] = useState('');
    const [indexNumber, setIndexNumber] = useState('');
    const [emailError, setEmailError] = useState('');
    const [indexNumberError, setIndexNumberError] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const validateIndexNumber = () => {
        const indexNumberRegex = /^\d{8}$/;
        if (!indexNumberRegex.test(indexNumber)) {
            setIndexNumberError('Please enter an 8-digit student index number.');
        } else {
            setIndexNumberError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <MyNavbar />
            <div
                className="showcase-login"
                style={{
                    backgroundColor: '#efdecd',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <h1 className="text-center">Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                                isInvalid={emailError !== ''}
                            />
                            <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="indexNumber">
                            <Form.Label>Student Index Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your index number"
                                value={indexNumber}
                                onChange={(e) => setIndexNumber(e.target.value)}
                                onBlur={validateIndexNumber}
                                isInvalid={indexNumberError !== ''}
                            />
                            <Form.Control.Feedback type="invalid">{indexNumberError}</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                            Login
                        </Button>
                    </Form>
                </Container>
            </div>

            <MyFooter />
        </div>
    );
}

export default Login;