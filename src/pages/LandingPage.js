// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "./LandingPage.css";
import VideoBackground from "../components/VideoBackground";

function LandingPage() {
  return (
    <div>
      <div className="Navigation">
        <Navigation />
      </div>

      <Container className="d-flex-container">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={6}>
            <h1 className="display-3">Missing Grade Reporting System</h1>
            <p className="lead">
              A system designed to help students track and report grades that
              are not recorded in their academic profiles.
            </p>
            <p className="Logo-login">
              <Link to="./LoginPage">
                <Button variant="primary" size="lg">
                  Login
                </Button>
              </Link>
            </p>
          </Col>
        </Row>

        <Row className="bg-dark text-white p-4 text-center">
          <Col md={4}>
            <FaGraduationCap size={48} />
            <h3>View your grades</h3>
            <p>
              You can view your current grades for all your courses and
              semesters. You can also see if there are any missing grades that
              need to be reported.
            </p>
          </Col>
          <Col md={4}>
            <FaGraduationCap size={48} />
            <h3>Report missing grades</h3>
            <p>
              You can report a missing grade by filling out a simple form. You
              need to provide the course name, instructor name, expected grade,
              and an explanation for the missing grade.
            </p>
          </Col>
          <Col md={4}>
            <FaGraduationCap size={48} />
            <h3>Contact your instructors</h3>
            <p>
              You can contact your instructors by sending them a simulated
              email. You can also see their contact details and availability.
              You can also get help and support from the technical team if you
              have any issues with the system.
            </p>
          </Col>
        </Row>
        <Row className="p-4 text-center">
          <Col md={12}>
            <p>
              This website is a mock-up and does not represent a real system. It
              is created for demonstration purposes only.
            </p>
          </Col>
        </Row>
      </Container>
      <div>
        {" "}
        <VideoBackground />{" "}
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
