
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MyNavbar from "./components/Navbar";

const CInstructor = () => {
    const instructors = [
        {
            id: 1,
            name: 'John Doe',
            course: 'Computer Science 101',
            courseID: 'CSCI101',
            email: 'john.doe@example.com',
            phone: '+1 123-456-7890',
        },
        {
            id: 2,
            name: 'Jane Smith',
            course: 'Web Development Basics',
            courseID: 'WEB101',
            email: 'jane.smith@example.com',
            phone: '+1 987-654-3210',
        },
        {
            id: 3,
            name: 'Robert Johnson',
            course: 'Data Science Fundamentals',
            courseID: 'DAT101',
            email: 'robert.johnson@example.com',
            phone: '+1 555-123-4567',
        },
        {
            id: 4,
            name: 'Emily Davis',
            course: 'Mobile App Development',
            courseID: 'MOB101',
            email: 'emily.davis@example.com',
            phone: '+1 777-888-9999',
        },
        {
            id: 5,
            name: 'Chris Thompson',
            course: 'Artificial Intelligence',
            courseID: 'AI101',
            email: 'chris.thompson@example.com',
            phone: '+1 111-222-3333',
        },
        {
            id: 6,
            name: 'Megan Williams',
            course: 'Cybersecurity Essentials',
            courseID: 'CYB101',
            email: 'megan.williams@example.com',
            phone: '+1 333-444-5555',
        },
    ];

    return (
        <div>
            <MyNavbar />
            <div
                className="showcase-cinstructor"
                style={{
                    backgroundColor: '#AB274F',
                    paddingTop: '90px',
                    paddingBottom: '40px',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <h1 className="text-center">Course Instructors</h1>
                    <Row>
                        {instructors.map((instructor) => (
                            <Col key={instructor.id} sm={12} md={6} lg={4} className="mb-3">
                                <div
                                    className="card"
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        padding: '20px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '8px',
                                        backgroundColor: 'white',
                                    }}
                                >
                                    <h4>{instructor.name}</h4>
                                    <p>{instructor.course}</p>
                                    <p>Course ID: {instructor.courseID}</p>
                                    <p>Email: {instructor.email}</p>
                                    <p>Phone: {instructor.phone}</p>
                                    <Button variant="primary" block>
                                        Email Me
                                    </Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <MyFooter />
        </div>
    );
};

export default CInstructor;
