import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const GradePage = () => {
 const courses = [
    { name: 'Course 1', grade: 'A+' },
    { name: 'Course 2', grade: 'A' },
    { name: 'Course 3', grade: 'B+' },
    { name: 'Course 4', grade: 'B' },
    { name: 'Course 5', grade: 'A' },
    { name: 'Course 6', grade: 'B+' },
 ];

 return (
  <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-5">Grade Page</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        {courses.map((course, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                 Grade: <b>{course.grade}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <Button variant="primary">Add Course</Button>
        </Col>
      </Row>
    </Container>
 );
};

export default GradePage;