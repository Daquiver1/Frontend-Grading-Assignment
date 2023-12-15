import React, { useState } from 'react';
import { Container, Table, Dropdown } from 'react-bootstrap';

const AppGradereport = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');  

  const gradeData = [
    { course: 'DCIT203', grade: 'A', semester: '1st Semester', year: 2022 },
    { course: 'CBAS201', grade: 'B', semester: '2nd Semester', year: 2022 },
    { course: 'Math223', grade: 'A-', semester: '2nd Semester', year: 2021 },
    { course: 'DCIT207', grade: 'C', semester: '1st Semester', year: 2021 },
    { course: 'DCIT205', grade: 'B', semester: '1st Semester', year: 2022 },
    { course: 'DCIT201', grade: 'C', semester: '2nd Semester', year: 2021 },
  ];

  const filterOptions = ['All', '1st Semester', '2nd Semester'];

  const filteredGradeData = selectedFilter === 'All'
    ? gradeData
    : gradeData.filter(data => {
        if (selectedFilter.includes('Semester')) {
          return data.semester === selectedFilter.split(' ')[0] && data.year.toString() === selectedFilter.split(' ')[1];
        } else {
          return `${data.semester} ${data.year}` === selectedFilter;
        }
      });

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Grade Report</h1>

      {/* Filter Dropdown */}
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Filter by Semester/Academic Year
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {filterOptions.map(option => (
            <Dropdown.Item
              key={option}
              active={selectedFilter === option}
              onClick={() => setSelectedFilter(option)}
            >
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredGradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.course}</td>
              <td>{data.grade}</td>
              <td>{data.semester}</td>
              <td>{data.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AppGradereport;
