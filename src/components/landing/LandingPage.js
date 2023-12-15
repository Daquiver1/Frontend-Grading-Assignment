import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-5">
          <h3 className="mb-5 c-text home-page-title">
            Student Grade Reporting System
          </h3>
          <Row>
            <Col md={4} className="mb-5">
              <div className="info-box">
                <div className="col-box">Overview</div>
                <p className="pad-2 paragraph">
                  As students navigate their academic journeys, we understand
                  that unexpected circumstances can sometimes result in missing
                  grades for specific courses. To streamline the process of
                  reporting and resolving these missing grades, we present our
                  Missing Grade Reporting System.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-5">
              <div className="info-box">
                <div className="col-box">Overview</div>
                <p className="pad-2 paragraph">
                  Our system is designed with the student experience in mind,
                  providing a straightforward and user-friendly platform to
                  report any discrepancies in your academic records. Whether
                  it's a missed assignment, an overlooked exam, or any other
                  grading-related concern, our system empowers you to bring it
                  to the attention of the relevant authorities efficiently.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-box">
                <div className="col-box">Quick Links</div>
                <p className="pad-2 paragraph">
                  <p>
                    <ArrowRight size={20} color={"#333"} />
                    <Link className="text-link color-link" to="/dashboard">
                      <span className="pd-left">Got to your Dashboard</span>
                    </Link>
                  </p>
                  <p>
                    <ArrowRight size={20} color={"#333"} />
                    <Link
                      className="text-link color-link"
                      to="/report-missing-grade"
                    >
                      <span className="pd-left">Report a missing Grade</span>
                    </Link>
                  </p>
                  <p>
                    <ArrowRight size={20} color={"#333"} />
                    <Link className="text-link color-link" to="/mygrades">
                      <span className="pd-left">View Grades</span>
                    </Link>
                  </p>
                  <p>
                    <ArrowRight size={20} color={"#333"} />
                    <Link
                      className="text-link color-link"
                      to="/contact-faculty"
                    >
                      <span className="pd-left">Contact Faculty</span>
                    </Link>
                  </p>
                </p>
              </div>
            </Col>
            <Col md={4} className="">
              <div className="info-box">
                <div className="col-box">Help & Troubleshooting</div>
                <p className="pad-2 paragraph">
                  <ArrowRight size={20} color={"#333"} />
                  <Link className=" text-link color-link" to="/support">
                    <span className="pd-left ">Questions or Problems</span>
                  </Link>
                  <p>UOG IT Service Center: +233 56 856 7500</p>
                </p>
              </div>
            </Col>
            <Col md={4} className="">
              <div className="info-box">
                <div className="col-box">System Hours</div>
                <p className="pad-2 paragraph">
                  MGRS is available 24/7 except during planned maintenance. If
                  you exeperience an outage that is not during planned
                  maintenance, please the problem you are experience
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default LandingPage;
