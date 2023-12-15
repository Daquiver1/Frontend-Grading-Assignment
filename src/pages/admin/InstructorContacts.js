import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const InstructorContacts = () => {

  return (
    <>

      <Container fluid>
        <Row>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("../../assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("../../assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title" style={{fontSize:'25px'}}>Mike Andrew</h5>
                  </a>
                  <p className="description" style={{fontSize:'20px'}}>0247668865</p>

                  <Link
                    style={{ color: 'blue', fontSize: '18px' }}
                    to='#'
                    onClick={(e) => {
                      window.location.href = 'mailto:yourmail@domain.com'; e.preventDefault();
                    }} >
                    mikeangelo@test.com
                  </Link>

                </div>



              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("../../assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("../../assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title" style={{fontSize:'25px'}}>Mike Andrew</h5>
                  </a>
                  <p className="description" style={{fontSize:'20px'}}>0247668865</p>

                  <Link
                    style={{ color: 'blue', fontSize: '18px' }}
                    to='#'
                    onClick={(e) => {
                      window.location.href = 'mailto:yourmail@domain.com'; e.preventDefault();
                    }} >
                    mikeangelo@test.com
                  </Link>

                </div>



              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("../../assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("../../assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title" style={{fontSize:'25px'}}>Mike Andrew</h5>
                  </a>
                  <p className="description" style={{fontSize:'20px'}}>0247668865</p>

                  <Link
                    style={{ color: 'blue', fontSize: '18px' }}
                    to='#'
                    onClick={(e) => {
                      window.location.href = 'mailto:yourmail@domain.com'; e.preventDefault();
                    }} >
                    mikeangelo@test.com
                  </Link>

                </div>



              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("../../assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("../../assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title" style={{fontSize:'25px'}}>Mike Andrew</h5>
                  </a>
                  <p className="description" style={{fontSize:'20px'}}>0247668865</p>

                  <Link
                    style={{ color: 'blue', fontSize: '18px' }}
                    to='#'
                    onClick={(e) => {
                      window.location.href = 'mailto:yourmail@domain.com'; e.preventDefault();
                    }} >
                    mikeangelo@test.com
                  </Link>

                </div>



              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("../../assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("../../assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title" style={{fontSize:'25px'}}>Mike Andrew</h5>
                  </a>
                  <p className="description" style={{fontSize:'20px'}}>0247668865</p>

                  <Link
                    style={{ color: 'blue', fontSize: '18px' }}
                    to='#'
                    onClick={(e) => {
                      window.location.href = 'mailto:yourmail@domain.com'; e.preventDefault();
                    }} >
                    mikeangelo@test.com
                  </Link>

                </div>



              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("../../assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("../../assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title" style={{fontSize:'25px'}}>Mike Andrew</h5>
                  </a>
                  <p className="description" style={{fontSize:'20px'}}>0247668865</p>

                  <Link
                    style={{ color: 'blue', fontSize: '18px' }}
                    to='#'
                    onClick={(e) => {
                      window.location.href = 'mailto:yourmail@domain.com'; e.preventDefault();
                    }} >
                    mikeangelo@test.com
                  </Link>

                </div>



              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>

    </>
  );
}

export default InstructorContacts;
