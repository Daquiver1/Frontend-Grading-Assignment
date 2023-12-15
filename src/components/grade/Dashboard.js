import React from "react";
import { Container, Row, Col, Table, Card, ListGroup } from "react-bootstrap";
import { Bell, ExclamationTriangle } from "react-bootstrap-icons";
import { getUserInfo } from "../../utils/auth";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          class: "DCIT 205",
          name: "Multi meida and web design",
          instructor: "Dr. Michael Soli",
          grade: "NA",
          credit: "3",
          semester: "Level 200 - 1st semester",
          status: "In-progress",
        },
        {
          id: 2,
          class: "DCIT 201",
          name: "Programming ",
          instructor: "PNT",
          grade: "B+",
          credit: "3",
          semester: "Level 200 - 1st semester",
          status: "In-progress",
        },
        {
          id: 3,
          class: "DCIT 203",
          name: "Digital and Logic System",
          instructor: "Dr. Aziz",
          grade: "NA",
          credit: "3",
          semester: "Level 200 - 1st semester",
          status: "In-progress",
        },
        {
          id: 4,
          class: "DCIT 209",
          name: "E-business Architecture",
          instructor: "PNT",
          grade: "A-",
          credit: "3",
          semester: "Level 200 - 1st semester",
          status: "In-progress",
        },
        {
          id: 5,
          class: "DCIT 207",
          name: "Computer Organization and Architecture",
          instructor: "PNT",
          grade: "NA",
          credit: "3",
          semester: "Level 200 - 1st semester",
          status: "In-progress",
        },
        {
          id: 6,
          class: "CBAS 210",
          name: "Academic Writing II",
          instructor: "PBS",
          grade: "B+",
          credit: "3",
          semester: "Level 200 - 1st semester",
          status: "In-progress",
        },
      ],
    };
  }

  render() {
    const { courses } = this.state;
    const user = getUserInfo();
    return (
      <React.Fragment>
        <Container className="mt-5 bg-light">
          <div className="">
            <Row>
              <Col md={3}>
                <h5 className="dash-title">
                  Hello,{" "}
                  <span className="dark-bold">{user.getfirstName()}</span>
                </h5>
                <p className="mb-3">
                  Nice to have you back, what an exciting day. See your tasks
                  for today.
                </p>
                <div className="mb-3">
                  <h6 style={{ fontWeight: 700 }}>Missing Grades</h6>
                  <Card>
                    <Card.Body>
                      <span className="d-icon">
                        <Bell size={50} color="red" />
                      </span>
                      <Card.Title className="offset-title-margin">
                        Notifications
                      </Card.Title>
                      <ListGroup>
                        <ListGroup.Item className="offset-border">
                          DCIT 205
                        </ListGroup.Item>
                        <ListGroup.Item className="offset-border">
                          DCIT 203
                        </ListGroup.Item>
                        <ListGroup.Item className="offset-border">
                          DCIT 207
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <h6 style={{ fontWeight: 700 }}>Current Tasks</h6>
                  <Card style={{ width: "18rem", height: "208px" }}>
                    <Card.Body>
                      <span className="d-icon">
                        <ExclamationTriangle size={50} color="#8B8000" />
                      </span>
                      <Card.Title className="offset-title-margin">
                        Your Tasks
                      </Card.Title>
                      <p>Report the above missing grades for your classes</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={9} className="">
                <Table borderd hover>
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Course Name</th>
                      <th>Instructor</th>
                      <th>Term</th>
                      <th>Grade</th>
                      <th>Credit</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.id}>
                        <td style={{ fontWeight: 700 }}>{course.class}</td>
                        <td>{course.name}</td>
                        <td>{course.instructor}</td>
                        <td>{course.semester}</td>
                        <td>{course.grade}</td>
                        <td>{course.credit}</td>
                        <td>{course.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
