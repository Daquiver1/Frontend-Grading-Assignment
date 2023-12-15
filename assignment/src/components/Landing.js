import React from 'react';
import { Carousel, Button, Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

// Import your images
import hp1 from './hp1.webp';
import hp2 from './hp2.jpg';
import hp3 from './hp3.jpg';

const AppLanding = () => {
  return (
    <div>

      {/* Text Section */}
      <div className="text-center mt-3">
        <h2 className="text-info">Login to Excellence</h2>
        <p className="text-muted">Unlock the potential for excellence with our platform. 
        {/* Navigation Bar */}
      <Navbar bg="" variant="">
        <Nav className="ml-auto">
          <Nav.Link href="/login">
            <Button variant="outline-light" className="mr-2">Login</Button>
          </Nav.Link>
        </Nav>
      </Navbar></p>
      </div>

      {/* Image Carousel */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hp1}
            alt="First slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Grade Report System</h1>
            <p>"The expert in anything was once a beginner." - Helen Hayes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hp2}
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Grade Report System</h1>
            <p>"Education is not the filling of a pail, but the lighting of a fire." - W.B. Yeats</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hp3}
            alt="Third slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Grade Report System</h1>
            <p>"The beautiful thing about learning is that no one can take it away from you." - B.B. King</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="mt-4">
  <Row className="justify-content-center">
    <Col md={8}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="text-primary" style={{ fontSize: '40px' }}>
            Academic Overview
          </Card.Title>
          <Card.Text style={{fontSize: '20px'}}>
            Unlock academic excellence with our comprehensive platform designed to empower learners.
            Effortlessly manage grades, track progress, and seamlessly connect with instructors.
            Our intuitive tools facilitate a seamless educational experience, providing the support needed to reach individual potential.
            Join us in fostering a dynamic learning environment where success knows no bounds.
            Let's embark on a journey of knowledge, growth, and achievement together.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

<br></br>

      {/* Features Section */}
      <Container>
        <Row>
          {/* Website Dashboard */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Link to="/dashboard">
                  <FontAwesomeIcon icon={faChartBar} size="3x" className="mb-3 text-info" />
                  <Card.Title>Website Dashboard</Card.Title>
                </Link>
                <Card.Text className="text-muted">Track and analyze your data with our intuitive dashboard.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Grade Report Page */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Link to="/GradeReport">
                  <FontAwesomeIcon icon={faFileAlt} size="3x" className="mb-3 text-info" />
                  <Card.Title>Grade Report Page</Card.Title>
                </Link>
                <Card.Text className="text-muted">View and manage your academic grades effortlessly.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Missing Form Page */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Link to="/MissingGradeForm">
                  <FontAwesomeIcon icon={faFileAlt} size="3x" className="mb-3 text-info" />
                  <Card.Title>Missing Form Page</Card.Title>
                </Link>
                <Card.Text className="text-muted">Submit missing forms and track their progress.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Instructors Page */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Link to="/InstructorContact">
                  <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" className="mb-3 text-info" />
                  <Card.Title>Instructors Page</Card.Title>
                </Link>
                <Card.Text className="text-muted">Connect with your instructors and access course materials.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppLanding;


