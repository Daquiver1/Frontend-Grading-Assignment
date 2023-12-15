import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/Footer';
import { Container, Form, Button } from 'react-bootstrap';
import MyNavbar from "./components/Navbar";

const Complaint = () => {
    return (
        <div>
            <MyNavbar />
            <div
                className="showcase-complaint"
                style={{
                    backgroundColor: '#efdecd',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <h1 className="text-center">Submit a report here...</h1>
                    <Form style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
                        <Form.Group controlId="complaintText">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your message"
                                style={{ resize: 'none', marginBottom: '10px' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Submit Complaint
                        </Button>
                    </Form>
                </Container>
            </div>
            <MyFooter />
        </div>
    );
};

export default Complaint;

