import React from "react";
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={{span: 3, offset: 2 }} sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number</p>
                      <Card.Title as="h4">6</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Courses
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Second Class Upper</p>
                      <Card.Title as="h4">3.5</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  CGPA
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Second Class Upper</p>
                      <Card.Title as="h4">3.3</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  GPA
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 9, offset: 2 }} md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Course Overview </Card.Title>
                <p className="card-category">ACADEMIC YEAR : 2023/2024 FIRST SEMESTER</p>
              </Card.Header>
              <Card.Footer>
                
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">CODE</th>
                      <th className="border-0">COURSE TITLE</th>
                      <th className="border-0">CREDIT</th>
                      <th className="border-0">GRADE</th>
                      <th className="border-0">GPT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CBAS210</td>
                      <td>ACADEMIC WRITING II</td>
                      <td>3</td>
                      <td>B</td>
                      <td>10.5</td>
                    </tr>
                    <tr>
                      <td>DCIT201</td>
                      <td>PROGRAMMING I</td>
                      <td>2</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>DCIT203</td>
                      <td>DIGITAL AND LOGIC SYSTEM DESIGN</td>
                      <td>3</td>
                      <td>B</td>
                      <td>10.5</td>
                    </tr>
                    <tr>
                      <td>DCIT205</td>
                      <td>MULTI MEDIA AND WEB DESIGN</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>DCIT207</td>
                      <td>COMPUTER ORGANISATION & ARCHITECTURE</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>DCIT209</td>
                      <td>E-BUSINESS ARCHITECTURES</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </Table>

                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col lg={{span: 5, offset: 4 }} md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Missing Grade Alert</Card.Title>
                <p className="card-category">Last Performance</p>
              </Card.Header>
              <Card.Body>
                <p>
                  No Missing Grades
                </p>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>



      </Container>
    </>
  );
}

export default Dashboard;
