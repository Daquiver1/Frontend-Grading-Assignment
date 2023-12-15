import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import MyFooter from "./components/Footer";

const GradeReport = () => {
    const courses = [
        { name: 'Calculus', number: 'MATH223' },
        { name: 'Academic Writing II', number: 'CBAS201' },
        { name: 'Programming I', number: 'DCIT201' },
        { name: 'Digital Logic And Circuits', number: 'DCIT203' },
        { name: 'Multimedia And Web Design', number: 'DCIT205' },
        { name: 'Computer Organization And Architecture', number: 'DCIT207' },
    ];

    const [missingCourses, setMissingCourses] = useState([]);

    const checkMissingCourses = () => {
        const missing = [];
        courses.forEach((course) => {
            if (!course.number) {
                missing.push(course.name);
            }
        });
        setMissingCourses(missing);
    };

    const renderAlert = () => {
        if (missingCourses.length > 0) {
            return (
                <Alert variant="danger">
                    <strong>Missing Courses:</strong> {missingCourses.join(', ')}
                </Alert>
            );
        }
        return null;
    };

    return (
        <div>
            <MyNavbar />
            <div
                className="showcase-dashboard"
                style={{
                    backgroundColor: '#efdecd',
                    paddingTop: '90px',
                    paddingBottom: '40px',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <h1 className="text-center">Grade Report</h1>
                    {renderAlert()}
                    <Row>
                        {courses.map((course, index) => (
                            <Col key={index} sm={12} md={6} lg={3} className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{course.name}</h5>
                                        <p className="card-text">{course.number}</p>
                                        <p className="card-text">Grade will be posted soon</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <MyFooter />
        </div>
    );
}

export default GradeReport;
