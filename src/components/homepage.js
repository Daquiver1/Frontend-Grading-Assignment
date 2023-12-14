import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import MyFooter from './footer';

const HomePage = () => {
  return (
    
    

    <div className="text-center mt-5">
      <MyNavbar />

      <Container>
    <Row>
      <Col class="mt-4">
        <h1 >Easily Report Your Concerns about Your Grades!</h1>
        <p class="lead font-weight-bolder">
          Tired of juggling multiple platforms to report your concerns? Look no further! Our user-friendly platform allows you to submit all your concerns directly to your grades, streamlining the process and ensuring your voice is heard.
        </p>
       
      </Col>
    </Row>
  </Container>
      

      <Row className="justify-content-center">
        <Col md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <Card.Text>
                Check the overview of your current grades and/or any alerts about missing ones
              </Card.Text>
              <Button variant="primary">My Dashboard</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Grade Report</Card.Title>
              <Card.Text>
                Check the detailed view of your grades where you can filter by semester
              </Card.Text>
              <Button variant="primary">Grade Report</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Missing Grade Form</Card.Title>
              <Card.Text>
               Fill the form to submit your grievances to the right people for review. It usually takes 48 to 72 hours
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Reach out to your Lecturers, Exam Officers and Teaching Assistants from here.
              </Card.Text>
              <Button variant="primary">Send a Concern</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Help and Support</Card.Title>
              <Card.Text>
                Read through FAQs to learn more. Do read this section before filling the form.
              </Card.Text>
              <Button variant="primary">Ask for Help</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Another Card</Card.Title>
              <Card.Text>
                This is another card with longer content. You can add more details here.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Button className="btn btn-primary ml-3" as={Link} to="/login">
          Login
        </Button>
        <Button className="btn btn-danger ml-3">Logout</Button>
      </div>

      <div>
      <div className="mx-0 mx-sm-auto">
  <div className="card">
    <div className="card-body">
      <form className="px-2" action="">
        <p className="text-center"><strong>What could we improve?</strong></p>
        <div className="form-outline mb-4">
          <textarea className="form-control" id="form4Example6" rows="4"></textarea>
          <label className="form-label" htmlFor="form4Example6">Your feedback</label>
        </div>
      </form>
    </div>
    <div className="card-footer text-end">
      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  </div>
</div>
      </div>
      <MyFooter />
    </div>
    
  );
};

export default HomePage;
