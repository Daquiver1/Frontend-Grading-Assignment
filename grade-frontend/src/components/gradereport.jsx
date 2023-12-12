import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { AiOutlineBarChart } from 'react-icons/ai';

const GradeReport = () => {
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedSemester, setSelectedSemester] = useState('All Semesters');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
  };

  // Simulated data for grades
  const gradesData = [
    { subject: 'Math', grade: 'A', semester: '1st Semester', year: 2022 },
    { subject: 'English', grade: 'B', semester: '1st Semester', year: 2022 },
    { subject: 'Science', grade: 'A+', semester: '2nd Semester', year: 2021 },
    // Add more data as needed
  ];

  const filteredGrades = gradesData.filter(
    (grade) =>
      (selectedYear === 'All Years' || grade.year === parseInt(selectedYear)) &&
      (selectedSemester === 'All Semesters' || grade.semester === selectedSemester)
  );

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>
            <AiOutlineBarChart className="mr-2" />
            Grade Report
          </h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <DropdownButton id="dropdown-year" title={`Academic Year: ${selectedYear}`}>
            <Dropdown.Item onClick={() => handleYearChange('All Years')}>All Years</Dropdown.Item>
            <Dropdown.Item onClick={() => handleYearChange(2022)}>2022</Dropdown.Item>
            <Dropdown.Item onClick={() => handleYearChange(2021)}>2021</Dropdown.Item>
            {/* Add more years as needed */}
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton id="dropdown-semester" title={`Semester: ${selectedSemester}`}>
            <Dropdown.Item onClick={() => handleSemesterChange('All Semesters')}>All Semesters</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSemesterChange('1st Semester')}>1st Semester</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSemesterChange('2nd Semester')}>2nd Semester</Dropdown.Item>
            {/* Add more semesters as needed */}
          </DropdownButton>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {filteredGrades.length === 0 ? (
            <p>No grades available for the selected filters.</p>
          ) : (
            <ul className="list-group">
              {filteredGrades.map((grade, index) => (
                <li key={index} className="list-group-item">
                  <strong>{grade.subject}</strong>: {grade.grade}
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GradeReport;
