// GradeReportPage.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './GradeReportPage.css'; // Import your CSS file for additional styling
import { Form, Table, ProgressBar, Button } from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../footer';

const GradeReportPage = () => {
  const [gradeData, setGradeData] = useState([
    { course: 'Calculus I', semester: 'Semester 1', grade: 'A' },
    { course: 'English', semester: 'Semester 2', grade: 'B' },
    { course: 'Physics', semester: 'Semester 1', grade: 'A-' },
    { course: 'Software Engineering', semester: 'Semester 2', grade: 'B+' },
    { course: 'Web Development', semester: 'Semester 1', grade: 'A' },
    { course: 'Office Suite365', semester: 'Semester 2', grade: 'B' },
    { course: 'Computer Science', semester: 'Semester 1', grade: 'A-' },
    { course: 'Calculus II', semester: 'Semester 2', grade: 'B+' },
    // Add more data as needed
  ]);

  const [selectedSemester, setSelectedSemester] = useState('All');

  const calculateHighLow = () => {
    const gradeValues = gradeData.map((grade) => convertGradeToValue(grade.grade));
    const highest = Math.max(...gradeValues);
    const lowest = Math.min(...gradeValues);
    return { highest, lowest };
  };

  const convertGradeToValue = (grade) => {
    const gradeMap = { A: 90, 'A-': 85, B: 80, 'B+': 75, 'B-': 70, C: 65, 'C+': 60, 'C-': 55, D: 50, F: 0 };
    return gradeMap[grade] || 0;
  };

  const filteredGrades = () => {
    if (selectedSemester === 'All') {
      return gradeData;
    }
    return gradeData.filter((grade) => grade.semester === selectedSemester);
  };

  const chartData = {
    labels: ['Highest', 'Lowest'],
    datasets: [
      {
        label: 'Grade Distribution',
        data: [convertGradeToValue(calculateHighLow().highest), convertGradeToValue(calculateHighLow().lowest)],
        backgroundColor: ['#28a745', '#dc3545'],
      },
    ],
  };

  useEffect(() => {
    // You can fetch your actual grade data here from an API or other source
    // For simplicity, we're using static data in this example
  }, []);

  const handleDownloadReport = () => {
    // Add functionality for downloading the report (e.g., generate a PDF or CSV)
    console.log('Downloading Report...');
  };

  return (
    <div>
      <Navbar/>
      
    <div className="container mt-5">
      <h1 className="mb-4">Grade Report</h1>

      {/* Semester Filter */}
      <Form>
        <Form.Group controlId="formSemester">
          <Form.Label>Select Semester:</Form.Label>
          <Form.Control
            as="select"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 2">Semester 2</option>
          </Form.Control>
        </Form.Group>
      </Form>

      {/* Grade Table */}
      <Table striped bordered hover responsive className="mb-4">
        <thead>
          <tr>
            <th>Course</th>
            <th>Semester</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades().map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.semester}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Grade Distribution Chart */}
      <div className="chart-container mb-4">
        <h2>Grade Distribution</h2>
        {/* Render your chart here (you can use a library like Chart.js) */}
      </div>

      {/* Progress Bar for Highest and Lowest Grades */}
      <div className="progress-bars">
        <h2>Highest and Lowest Grades</h2>
        <ProgressBar
          animated
          variant="success"
          now={calculateHighLow().highest}
          label={`Highest: ${calculateHighLow().highest}`}
          className="mb-2"
        />
        <ProgressBar
          animated
          variant="danger"
          now={calculateHighLow().lowest}
          label={`Lowest: ${calculateHighLow().lowest}`}
        />
      </div>

      {/* Download Report Button */}
      <Button variant="primary" onClick={handleDownloadReport} className="mt-3">
        Download Report
      </Button>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default GradeReportPage;
