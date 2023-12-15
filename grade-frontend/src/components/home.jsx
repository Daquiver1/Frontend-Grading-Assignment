import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiBookOpen, BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage" style={{ backgroundColor: '#F7CAC9', minHeight: '100vh', padding: '50px 0' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>
              Welcome to Grade Report System <BiBookOpen style={{ fontSize: '2rem', marginLeft: '10px' }} />
            </h1>
            <p>
              Your go-to platform for managing and viewing grade reports efficiently.
              Explore and track your academic progress effortlessly!
            </p>
            <Link to="/login">
              <Button variant="primary" size="lg">
                <BiLogInCircle style={{ marginRight: '10px' }} />
                Login
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>About the System</h2>
            <p>
              Our system provides a user-friendly interface to access, manage, and analyze grade reports for students and educators.
              With secure login credentials, users can view detailed academic information and track their progress over time.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
