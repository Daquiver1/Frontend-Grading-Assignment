// GradeReportPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function GradeReportPage() {
  const [grades, setGrades] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Simulate fetching grades from an API
    setGrades([
      {
        course: "Math 101",
        grade: "A",
        instructor: "John Smith",
        semester: "Fall 2023",
      },
      {
        course: "English 201",
        grade: "B+",
        instructor: "Jane Doe",
        semester: "Fall 2023",
      },
      {
        course: "History 301",
        grade: "C",
        instructor: "Bob Lee",
        semester: "Fall 2023",
      },
      {
        course: "Science 401",
        grade: null, // Missing grade
        instructor: "Alice Wong",
        semester: "Fall 2023",
      },
      {
        course: "Math 102",
        grade: "A-",
        instructor: "John Smith",
        semester: "Spring 2023",
      },
      {
        course: "English 202",
        grade: "B",
        instructor: "Jane Doe",
        semester: "Spring 2023",
      },
      {
        course: "History 302",
        grade: "C+",
        instructor: "Bob Lee",
        semester: "Spring 2023",
      },
      {
        course: "Science 402",
        grade: "B-",
        instructor: "Alice Wong",
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
    <Container fluid className="grade-report-page">
      <Row className="p-4">
        <Col md={12} className="text-center">
          <h1 className="display-3">Missing Grade Reporting System</h1>
          <p className="lead">
            A system designed to help students track and report grades that are
            not recorded in their academic profiles.
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
                          <Link to="/missing-grade-form">
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
  );
}

export default GradeReportPage;
