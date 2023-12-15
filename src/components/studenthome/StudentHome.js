import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import contactImage from "../../images/iconcontact.png";
import faqImage from "../../images/iconfaq.png";
import missingGradeImage from "../../images/iconmissinggrade.png";
import reportGradeImage from "../../images/iconreport.png";
import dashboardImage from "../../images/icon-dashboard.png";

class StudentHome extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <Link className="text-link" to="/dashboard">
              <Card
                className="mb-5 card-shadow card-hover"
                style={{ width: "18rem", height: "208px" }}
              >
                <Card.Title className="tile-title">Dashboard</Card.Title>
                <Card.Img className="imageSize" src={dashboardImage} />
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link className="text-link" to="/mygrades">
              <Card
                className="card-shadow card-hover"
                style={{ width: "18rem", height: "208px" }}
              >
                <Card.Title className="tile-title">Grades</Card.Title>
                <Card.Img className="imageSize" src={reportGradeImage} />
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link className="text-link" to="/report-missing-grade">
              <Card
                className="card-shadow card-hover"
                style={{ width: "18rem", height: "208px" }}
              >
                <Card.Title className="tile-title">Report Grading</Card.Title>
                <Card.Img className="imageSize" src={missingGradeImage} />
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link className="text-link" to="/contact-faculty">
              <Card
                className="card-shadow card-hover"
                style={{ width: "18rem", height: "208px" }}
              >
                <Card.Title className="tile-title">Instructors</Card.Title>
                <Card.Img className="imageSize" src={contactImage} />
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link className="text-link" to="/support">
              <Card
                className="card-shadow card-hover"
                style={{ width: "18rem", height: "208px" }}
              >
                <Card.Title className="tile-title">Help & Support</Card.Title>
                <Card.Img className="imageSize" src={faqImage} />
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentHome;
