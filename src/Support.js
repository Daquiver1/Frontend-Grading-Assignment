import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import { Container, Card, Button } from 'react-bootstrap';

const Support = () => {
    return (
        <div>
            <MyNavbar />
            <div
                className="showcase-support"
                style={{
                    backgroundColor: '#efdecd',
                    paddingTop: '90px',
                    paddingBottom: '40px',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <Card
                        style={{
                            width: '80%',
                            textAlign: 'center',
                            padding: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            margin: 'auto', // Center the card
                        }}
                    >
                        <h1>Support Center</h1>
                        <p>Location: Computer Science Department</p>
                        <p>Phone Number: +233 244 166 3333</p>
                        <p>Email: support@opendex.com</p>
                        <Button variant="primary" size="lg" className="mt-3">
                            Email Us
                        </Button>
                    </Card>
                </Container>
            </div>
            <MyFooter />
        </div>
    );
};

export default Support;


