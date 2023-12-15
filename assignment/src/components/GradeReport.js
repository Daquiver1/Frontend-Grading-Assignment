import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const AppGradeReport = () => {
  // Sample data for the grade report
  const gradeReport = {
    student: 'Sophia Yawson',
    overallGrade: 'B+',
    summary: 'Excellent performance overall.',
  };

  // Sample data for dropdowns
  const semesters = ['1st Semester', '2nd Semester'];
  const years = [2022, 2023, 2024, 2025, 2026];

  // State to manage selected semester and year
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Function to handle dropdown selection
  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
    // Additional logic if needed based on the selected semester
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    // Additional logic if needed based on the selected year
  };

  // Function to dynamically render courses based on selected semester and year
  const renderCourses = () => {
    if (selectedYear === 2024 || selectedYear === 2025 || selectedYear === 2026) {
      return <p>No results uploaded for the selected year.</p>;
    }

    if (selectedSemester && selectedYear) {
      const semesterData = generateSampleCourses(selectedSemester, selectedYear);

      return (
        <Table responsive>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {semesterData.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.instructor}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }

    return <p>Please select a semester and year to view courses.</p>;
  };

  // Function to generate sample courses based on selected semester and year
  const generateSampleCourses = (semester, year) => {
    // Sample logic: Generate courses based on semester and year
    const courses = [];
    const numCourses = 6; // You can adjust the number of courses as needed

    const coursePrefixes = ['Math223', 'CBAS210', 'DCIT205', 'DCIT203', 'DCIT207', 'DCIT201'];
    const instructors = [
      'Micheal Sorli',
      'Dr. Edward Ansong',
      'Mark Attah',
      'Dr. Jamal',
      'Dr. Justice Appati',
      'Dr. Solomon Mensah',
      'Prof. Ferdinard Katsriku',
      'Dr. Ralph Twum',
    ];

    for (let i = 1; i <= numCourses; i++) {
      const randomPrefix = coursePrefixes[Math.floor(Math.random() * coursePrefixes.length)];
      const randomInstructor = instructors[Math.floor(Math.random() * instructors.length)];

      courses.push({
        courseName: `${semester} ${randomPrefix} ${i}`,
        instructor: randomInstructor,
        grade: generateRandomGrade(),
      });
    }

    return courses;
  };

  // Function to generate a random grade (for demonstration purposes)
  const generateRandomGrade = () => {
    const grades = ['A', 'B+', 'B', 'C+', 'C', 'D+'];
    const randomIndex = Math.floor(Math.random() * grades.length);
    return grades[randomIndex];
  };

  return (
    <Container className="mt-4 text-center">
      <h2>Grade Report</h2>
      <p>View and analyze individual course grades for each semester.</p>
      <hr></hr>
      {/* Dropdowns for Semester and Year */}
      <Row className="mb-3">
        <Col md={6}>
          <Form>
            <Form.Group controlId="semesterDropdown">
              <Form.Label>Semester</Form.Label>
              <Dropdown onSelect={handleSemesterChange}>
                <Dropdown.Toggle variant="primary" id="dropdown-semester">
                  {selectedSemester ? selectedSemester : 'Select Semester'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {semesters.map((semester, index) => (
                    <Dropdown.Item key={index} eventKey={semester}>
                      {semester}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="yearDropdown">
              <Form.Label>Year</Form.Label>
              <Dropdown onSelect={handleYearChange}>
                <Dropdown.Toggle variant="primary" id="dropdown-year">
                  {selectedYear ? selectedYear : 'Select Year'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {years.map((year, index) => (
                    <Dropdown.Item key={index} eventKey={year}>
                      {year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {/* Grade Report Card */}
      <Card>
        <Card.Body>
          <FontAwesomeIcon icon={faFileAlt} size="5x" className="mb-3" />
          <Card.Title>{gradeReport.student}'s Grade Report</Card.Title>
          <Card.Text>{gradeReport.summary}</Card.Text>
          <Row>
            <Col md={6}>
              <Card.Subtitle className="mb-2 text-muted">Overall Grade</Card.Subtitle>
              <h1>{gradeReport.overallGrade}</h1>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Individual Course Grades */}
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Individual Course Grades</Card.Title>
          {renderCourses()}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AppGradeReport;










