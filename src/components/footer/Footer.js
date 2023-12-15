import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GeoAlt, Envelope, Telephone } from "react-bootstrap-icons";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <Container>
          <Row>
            <Col md={3} lg={4} xl={3}>
              <h6 className="footer-heading">UOG-Legon</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Col>
            <Col md={2} lg={2} xl={2}>
              <h6 className="footer-heading">Footer link head</h6>
              <p>Item 1</p>
              <p>Item 1</p>
              <p>Item 1</p>
            </Col>
            <Col md={4} lg={3} xl={3}>
              <h6 className="footer-heading">Contact</h6>
              <p>
                <GeoAlt size={25} className="pd-right" />
                UOG, Legon Ghana, West Africa
              </p>
              <p>
                <Envelope size={25} className="pd-right" />
                uoghana@example.com
              </p>
              <p>
                <Telephone size={25} className="pd-right" />
                +233 56 856 7500
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Footer;
