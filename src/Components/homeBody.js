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
                <div class="container card text-bg-success" id="signuppagebg">
                    <div className="container" id="signinborder">     
                    <h1 className="border rounded text-warning">WELCOME TO THE MISSING GRADE SYSTEM HOME PAGE<i className='bi bi-house text-light'></i></h1>
                    <h4>Your Grades Are Our Concern <i className='bi bi-emoji-smile-fill'></i></h4>
                    <h4>Thank You For Being Here . This App Was Created To Help <strong class="text-warning">Students
                        </strong> Retrieve Their Missing Grades.</h4>
                    <h4><i className='bi bi-info-circle text-warning'></i><strong> Note: </strong>If You Find A 
                    <span class="text-warning"> " - "</span> Showing As Your Grade Please Fill The Form 
                    At The <strong class="text-warning"> Missing Grade Section </strong>So Your Grade Can Be Recovered.</h4>
                    <h3>To Proceed Please Login Your Account.</h3>
                    <Button variant="bi bi-box-arrow-in-right fs-1" onClick={handleLoginClick}> LOGIN</Button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;