
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="/admin/dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/admin/grade-report">
                  Grade Report
                </a>
              </li>
              <li>
                <a href="/admin/missing-grade-form">
                  Missing Grade Form
                </a>
              </li>
              <li>
                <a href="/admin/instructor-contacts">
                  Instructor Contacts
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="/">Royalty</a>. All Rights Reserved
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
