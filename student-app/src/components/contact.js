import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./footer";

const instructors = [
  {
    id: 1,
    name: "Professor John Smith",
    email: "john.smith@university.edu",
    officeHours: "Mondays 10:00 - 12:00, Tuesdays 2:00 - 4:00",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    email: "jane.doe@university.edu",
    officeHours: "Wednesdays 1:00 - 3:00, Thursdays 9:00 - 11:00",
  },
  {
    id: 3,
    name: "Mr. Michael Jones",
    email: "michael.jones@university.edu",
    officeHours: "Tuesdays and Thursdays 12:00 - 1:00",
  },
];

function ContactInstructors() {
  const [courseName, setCourseName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Contact details for ${courseName} will be displayed below.`);
  };

  return (
    <Container className="mt-4">
        <MyNavbar />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h2>Contact Instructor for Grade Issues</h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the course name"
                    value={courseName}
                    onChange={(event) => setCourseName(event.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Find Instructor Details
                </Button>
              </Form>

              {courseName && (
                <Table striped bordered hover className="mt-4">
                  <thead>
                    <tr>
                      <th>Instructor Name</th>
                      <th>Email Address</th>
                      <th>Office Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Display instructor details based on course name */}
                    <tr>
                      <td>Professor John Smith</td>
                      <td>smith@universityofgh.edu</td>
                      <td>Mondays 11:00 - 12:00, Fridays 2:00 - 4:00</td>
                    </tr>
                    <tr>
                      <td>Dr. Jane Doe</td>
                      <td>jane.doe@universityofgh.edu</td>
                      <td>Wednesdays 1:00 - 3:00, Thursdays 9:00 - 11:00</td>
                    </tr>
                    <tr>
                      <td>Dr. Mark Atta</td>
                      <td>markattah@universityofgh.edu</td>
                      <td>Wednesdays 1:00 - 3:00, Thursdays 9:00 - 11:00</td>
                    </tr>
                    <tr>
                      <td>Mr Christian Abrokwa</td>
                      <td>chrisabrok@universityofgh.edu</td>
                      <td>Wednesdays 1:00 - 3:00, Thursdays 9:00 - 11:00</td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
}

export default ContactInstructors;
