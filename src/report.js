import React, { useState } from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const Report = () => {
  const data = [
    {
      semester: '2nd Semester 2022/2023',
      courses: [
        { courseName: 'UGRC 110 Academic Writing I', grade: 'A' },
        { courseName: 'MATH 122 Calculus I', grade: 'B' },
        { courseName: 'MATH 126 Algebra and Geometry', grade: 'C' },
        { courseName: 'STAT 112 Introduction to Statistics and Probability II', grade: 'B+' },
        { courseName: 'DCIT 104 Programming', grade: 'A' },
        { courseName: 'DCIT 102 Computer Hardware Fund. and Circuits', grade: 'A' },
      ],
    },
    {
      semester: '1st Semester 2023/2024',
      courses: [
        { courseName: 'UGRC 210 Academic Writing II', grade: 'A' },
        { courseName: 'DCIT 201 Programming I', grade: 'B' },
        { courseName: 'DCIT 203 Digital and Logic Systems Design', grade: 'C' },
        { courseName: 'DCIT 207 Computer Architecture & Organisation', grade: 'A' },
        { courseName: 'DCIT 205 Multi Media and Web Design', grade: 'N/A' },
        { courseName: 'MATH 223 Calculus II', grade: 'N/A' },
      ],
    },
    // Add more semesters with courses as needed
  ];

  const [selectedSemester, setSelectedSemester] = useState(data[0].semester);

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
      <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-top" />{' '}
  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} id='active' to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link}  to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Header className="text-center">Grade Report</Card.Header>
              <Card.Body>
                {/* Semester filter dropdown */}
                <Dropdown onSelect={handleSemesterChange} className="mb-3">
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {selectedSemester}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {data.map((semester) => (
                      <Dropdown.Item key={semester.semester} eventKey={semester.semester}>
                        {semester.semester}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                {/* Display courses and grades */}
                {data.map((semesterData) =>
                  semesterData.semester === selectedSemester ? (
                    <div key={semesterData.semester}>
                      <h5>{semesterData.semester}</h5>
                      <ul>
                        {semesterData.courses.map((course) => (
                          <li key={course.courseName}>
                            {course.courseName}: {course.grade}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>
      <footer>
        <p>&copy; 2023 Missing Grade System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Report;
