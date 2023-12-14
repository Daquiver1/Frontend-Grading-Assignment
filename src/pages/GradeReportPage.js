// GradeReportPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
} from "react-bootstrap";
import { FaGraduationCap, FaFilter } from "react-icons/fa";
import "./GradeReportPage.css";
import VideoDash from "../components/VideoDash";

function GradeReportPage() {
  const [grades, setGrades] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Simulate fetching grades from an API
    setGrades([
      {
        course: "DCIT 205",
        grade: "A",
        instructor: "Micheal Soli",
        semester: "Fall 2023",
      },
      {
        course: "DCIT 201",
        grade: "B+",
        instructor: "Paul AMMAH",
        semester: "Fall 2023",
      },
      {
        course: "DCIT 207",
        grade: "C",
        instructor: "Fabrice Ihon",
        semester: "Fall 2023",
      },
      {
        course: "CBAS 210",
        grade: null, // Missing grade
        instructor: "Alice Poulin",
        semester: "Fall 2023",
      },
      {
        course: "DCIT 209",
        grade: "A-",
        instructor: "John Sokkoto",
        semester: "Spring 2023",
      },
      {
        course: "DCIT 203",
        grade: "B",
        instructor: "Jane Tomobah",
        semester: "Spring 2023",
      },
      {
        course: "History 202",
        grade: "C+",
        instructor: "Yong Lee",
        semester: "Spring 2023",
      },
      {
        course: "Science 202",
        grade: "B-",
        instructor: "Alice Poulin",
        semester: "Spring 2023",
      },
    ]);
  }, []);

  // Helper function to filter grades by semester
  const filterGrades = (grades, filter) => {
    if (filter === "All") {
      return grades;
    } else {
      return grades.filter((grade) => grade.semester === filter);
    }
  };

  return (
    <div>
      <div className="Navig-tion">
        {" "}
        <Navigation />{" "}
      </div>
      <div>
        {" "}
        <VideoDash />
      </div>
      <Container className="d-flex-container">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={6}>
            <h1 className="display-3">Missing Grade Reporting System</h1>
            <p className="lead">
              A system designed to help students track and report grades that
              are not recorded in their academic profiles.
            </p>
          </Col>
        </Row>
        <Row className="p-4">
          <Col md={12}>
            <Card className="grade-report-card">
              <Card.Header>
                <FaGraduationCap /> Your Grade Report
              </Card.Header>
              <Card.Body>
                <Card.Title>Details</Card.Title>
                <Form.Group controlId="filter">
                  <Form.Label>
                    <FaFilter /> Filter by semester
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option>All</option>
                    <option>Fall 2023</option>
                    <option>Spring 2023</option>
                  </Form.Control>
                </Form.Group>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Grade</th>
                      <th>Instructor</th>
                      <th>Semester</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterGrades(grades, filter).map((grade, index) => (
                      <tr key={index}>
                        <td>{grade.course}</td>
                        <td>{grade.grade || "N/A"}</td>
                        <td>{grade.instructor}</td>
                        <td>{grade.semester}</td>
                        <td>
                          {grade.grade ? (
                            <Button variant="success" disabled>
                              Completed
                            </Button>
                          ) : (
                            <Link to="/MissingGradeFormPage">
                              <Button variant="danger">Report</Button>
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GradeReportPage;
