import React from "react";

import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const GradeReport = () => {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Course Overview</Card.Title>
                <p className="card-category">
                ACADEMIC YEAR : 2022/2023 FIRST SEMESTER
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
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
                      <td>DCIT101</td>
                      <td>INTRODUCTION TO COMPUTER SCIENCE</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>DCIT103</td>
                      <td>OFFICE PRODUCTIVITY TOOLS</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>UGRC150</td>
                      <td>CRITICAL THINKING</td>
                      <td>3</td>
                      <td>B</td>
                      <td>10.5</td>
                    </tr>
                    <tr>
                      <td>ECON101</td>
                      <td>INTRODUCTION TO ECONOMICS</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>DCIT105</td>
                      <td>MATHEMATICS FOR IT PROFESSIONALS</td>
                      <td>3</td>
                      <td>B</td>
                      <td>10.5</td>
                    </tr>
                    <tr>
                      <td>STAT111</td>
                      <td>INTRODUCTION TO STATISTICS AND PROBABILITY</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Course Overview</Card.Title>
                <p className="card-category">
                ACADEMIC YEAR : 2022/2023 SECOND SEMESTER
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
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
                      <td>DCIT102</td>
                      <td>COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>STAT112</td>
                      <td>INTRODUCTION TO STATISTICS AND PROBABILITY</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>UGRC110</td>
                      <td>ACADEMIC WRITING I</td>
                      <td>3</td>
                      <td>B</td>
                      <td>10.5</td>
                    </tr>
                    <tr>
                      <td>MATH122</td>
                      <td>CALCULUS</td>
                      <td>3</td>
                      <td>B</td>
                      <td>10.5</td>
                    </tr>
                    <tr>
                      <td>DCIT104</td>
                      <td>PROGRAMMING FUNDAMENTALS</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>ECON102</td>
                      <td>INTRODUCTION TO ECONOMICS</td>
                      <td>3</td>
                      <td>A</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Course Overview</Card.Title>
                <p className="card-category">
                ACADEMIC YEAR : 2022/2023 SECOND SEMESTER
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
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
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default GradeReport;
