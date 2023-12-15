import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
    const handleLoginClick = () => {
        // Redirect to the login page when the button is clicked
        window.location.href = '/LoginPage';
    };

    return (
        <Container fluid className="p-5 text-center bg-light text-light">
            <Row>
                <Col>
                <div class="container card text-bg-dark" id="signuppagebg">
                    <div className="container" id="signinborder">     
                    <h1 className="border rounded text-success">WELCOME TO THE MISSING GRADE SYSTEM HOMEPAGE</h1>
                    <h4>Your Grades Are Our Concern</h4>
                    <h4>Thank You For Being Here.This App ws created to help <strong class="text-warning">Students
                        </strong> retrieve their missing grades</h4>
                    <h4><strong >Note: </strong>If you find a <span class="text-warning">" - "</span> showing as your grade please 
                    fill the form at the <strong class="text-warning"> Missing Grade Section </strong>so your grade can be recovered.</h4>
                    <h3>To Proceed Please Login Your Account.</h3>
                    <Button variant="primary" onClick={handleLoginClick}>LOGIN</Button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;