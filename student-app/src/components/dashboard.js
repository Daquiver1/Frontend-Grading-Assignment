import React from "react";
import { Container, Row, Col, Card, Table, Toast, ToastContainer } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./footer";

function Dashboard() {
  const courses = [
    { id: 1, name: "DCIT201", semester: "SEM 2", grade: "A" },
    { id: 2, name: "DCIT203", semester: "SEM 2", grade: "B+" },
    { id: 3, name: "DCIT205", semester: "SEM 2", grade: "-" },
    { id: 3, name: "DCIT207", semester: "SEM 2", grade: "D+" },
    { id: 3, name: "MATH215", semester: "SEM 2", grade: "C" },
    { id: 3, name: "CSIT205", semester: "SEM 2", grade: "C+" },
    { id: 3, name: "UGRC234", semester: "SEM 2", grade: "B+" },
  ];

  const notifications = [
    { id: 1, type: "info", title: "New assignment posted!", message: "Check the portal for details." },
    { id: 2, type: "warning", title: "Exam reminder", message: "Don't forget your exam tomorrow!" },
  ];

  return (
    
    <Container className="mt-4">
        <MyNavbar />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h2>My Dashboard</h2>
              <hr />
              <Row>
                <Col md={8}>
                  <h3>Courses</h3>
                  {courses.length > 0 ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Course Name</th>
                          <th>Semester</th>
                          <th>Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course) => (
                          <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.semester}</td>
                            <td>{course.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <p>No courses found.</p>
                  )}
                </Col>
                <Col md={4}>
                  <h3>Notifications</h3>
                  <ToastContainer position="bottom">
                    {notifications.map((notification) => (
                      <Toast key={notification.id} className={`bg-${notification.type}`}>
                        <Toast.Header closeButton={false}>
                          <strong className="me-auto">{notification.title}</strong>
                        </Toast.Header>
                        <Toast.Body>{notification.message}</Toast.Body>
                      </Toast>
                    ))}
                  </ToastContainer>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
}

export default Dashboard;
