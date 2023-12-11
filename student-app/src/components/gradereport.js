import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Table,
  Spinner,
  ProgressBar,
} from "react-bootstrap";
import MyFooter from "./footer";
import MyNavbar from "./MyNavbar";

const semesters = [
  { id: 1, name: "SEM1 2023" },
  { id: 2, name: "SEM2 2023" },
];

function GradeReport() {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGrades([
        { courseName: "Introduction to Programming", grade: "A", creditHours: 3 },
        { courseName: "Calculus I", grade: "D+", creditHours: 4 },
        { courseName: "English Literature", grade: "C-", creditHours: 3 },
        { courseName: "DataBase Management", grade: "F", creditHours: 3 },
      ]);
      setIsLoading(false);
    }, 2000);
  }, [selectedSemester]);

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    setIsLoading(true);
  };

  // Calculate GPA
  const gpa = grades.reduce((acc, grade) => {
    const gradePoints = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      F: 0.0,
    };
    return acc + gradePoints[grade.grade] * grade.creditHours;
  }, 0);

  const gradeDistribution = grades.reduce((acc, grade) => {
    if (!acc[grade.grade]) {
      acc[grade.grade] = { count: 0, percentage: 0 };
    }
    acc[grade.grade].count++;
    return acc;
  }, {});

  Object.keys(gradeDistribution).forEach((grade) => {
    gradeDistribution[grade].percentage = (
      (gradeDistribution[grade].count / grades.length) *
      100
    ).toFixed(1);
  });

  return (
    <Container className="mt-4">
      <MyNavbar />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h2>Grade Report</h2>
              <hr />
              <Form.Group className="mb-3">
                <Form.Label>Select Semester:</Form.Label>
                <Form.Select value={selectedSemester.id} onChange={handleSemesterChange}>
                  {semesters.map((semester) => (
                    <option key={semester.id} value={semester.id}>
                      {semester.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {isLoading ? (
                <Spinner animation="border" role="status" size="sm">
                  Loading...
                </Spinner>
              ) : (
                <>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Grade</th>
                        <th>Credit Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((grade) => (
                        <tr key={grade.courseName}>
                          <td>{grade.courseName}</td>
                          <td>{grade.grade}</td>
                          <td>{grade.creditHours}</td>
                        </tr>
                      ))}
                      <tr>
                        <td><strong>GPA for semester</strong></td>
                        <td><strong>{gpa.toFixed(2)}</strong></td>
                        <td>
                          <ProgressBar
                            variant={gpa >= 3.5 ? "success" : "warning"}
                            now={gpa * 100 / 4.0}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <Row className="mt-4">
                    <Col md={6}>
                      <h5>Grade Distribution</h5>
                      <ul className="list-group list-group-flush mb-3">
                        {Object.keys(gradeDistribution).map((grade) => (
                          <li key={grade} className="list-group-item">
                            <span className="me-2">{grade}:</span>
                            {gradeDistribution[grade].count} courses ({gradeDistribution[grade].percentage}%)
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h5>Performance Summary</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Number of Courses: {grades.length}</li>
                        <li className="list-group-item">Total Credit Hours: {grades.reduce((acc, grade) => acc + grade.creditHours, 0)}</li>
                        <li className="list-group-item">GPA for Semester: {gpa.toFixed(2)}</li>
                      </ul>
                    </Col>
                  </Row>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
}

export default GradeReport;

