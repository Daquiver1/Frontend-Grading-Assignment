// Report.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

function Report() {
  const data = [
    {
      semester: '1st Term',
      courses: [
        { courseName: 'Maths', grade: 'A' },
        { courseName: 'Englsih', grade: 'B' },
        { courseName: 'French', grade: 'C' },
       
      ],
    },
    {
      semester: '2nd Term',
      courses: [
        { courseName: 'Maths', grade: 'A' },
        { courseName: 'Englsih', grade: 'B' },
        { courseName: 'French', grade: 'A' },
      ],
    },
    // Add more semesters with courses as needed
  ];
  const [selectedSemester, setSelectedSemester] = useState(data[0].semester);

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
  };
    return (
        <><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Grade App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} id='active' to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><Container className="mt-3">
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
                  {data.map((semesterData) => semesterData.semester === selectedSemester ? (
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
        </Container></>
       );
}

export default Report;
