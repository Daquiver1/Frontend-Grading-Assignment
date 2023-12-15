import React, { useState } from 'react';

const Grades = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const years = ['2021', '2022', '2023', '2024'];
  const semesters = ['First Sem', 'Second Sem'];

  const courses = [
    'DCIT 101', 'DCIT 103', 'DCIT 105', 'STATS 111', 'ECONS 101', 'UGRC 150',
    'ECONS 102', 'DCIT 104', 'DCIT 102', 'MATH 122', 'STATS 112', 'UGRC 110',
    'DCIT 201', 'DCIT 203', 'DCIT 205', 'DCIT 207', 'DCIT 209', 'CBAS 210',
    'DCIT 206', 'DCIT 208', 'UGRC 220', 'DCIT 202', 'DCIT 204', 'DCIT 200',
    'DCIT 301', 'DCIT 303', 'DCIT 305', 'DCIT 315', 'DCIT 313', 'DCIT 300',
  ];

  const gradesData = {
    '2021 First Sem': ['A', 'B+', 'A-', 'B', 'B-', 'A+'],
    '2021 Second Sem': ['B', 'A', 'B-', 'C+', 'A-', 'A+'],
    '2022 First Sem': ['A+', 'A+', 'A+', 'A+', 'A+', 'A+'],
    '2022 Second Sem': ['B', 'A+', 'B', 'A-', 'B', 'A'],
    '2023 First Sem': ['A', 'A-', 'B+', 'A-', 'A+', 'C-'],
    '2023 Second Sem': Array(6).fill('N/A'),
    '2024 First Sem': Array(6).fill('N/A'),
    '2024 Second Sem': Array(6).fill('N/A'),
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const studentDetails = {
    name: 'Morrison',
    studentId: '12345678',
    academicYear: '2022/2023',
    semester: 'Second Semester',
    ct: '18',
    cp: '15',
    cgpa: '3.6',
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#01027d', color: 'white' }}>
        <h2>Welcome {studentDetails.name}</h2>
        {/* Display other student details as needed */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <h3 style={{ marginLeft: '30px' }}> Student ID: {studentDetails.studentId}</h3>
          <h3 style={{ marginLeft: '30px' }}>Academic Year: {studentDetails.academicYear}</h3>
          <h3 style={{ marginLeft: '30px' }}>Semester: {studentDetails.semester}</h3>
          <h3 style={{ marginLeft: '30px' }}>CT: {studentDetails.ct}</h3>
          <h3 style={{ marginLeft: '30px' }}> CP: {studentDetails.cp}</h3>
          <h3 style={{ marginLeft: '30px' }}>CGPA: {studentDetails.cgpa}</h3>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#01027d', color: 'white', flex: 1 }}>
          <h2 style={{ color: '#f5f5DC' }}>Years</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {years.map((year) =>
              semesters.map((semester) => (
                <li
                  key={`${year}-${semester}`}
                  style={{
                    cursor: 'pointer',
                    marginBottom: '10px',
                    backgroundColor: selectedYear === `${year} ${semester}` ? '#eee' : 'inherit',
                    padding: '8px',
                    borderRadius: '4px',
                  }}
                  onClick={() => handleYearClick(`${year} ${semester}`)}
                >
                  {`${year} ${semester}`}
                </li>
              ))
            )}
          </ul>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f5f5DC', flex: 3 }}>
          <h1 style={{ textAlign: 'center' }}>Detailed View</h1>
          {selectedYear !== null ? (
            <div>
              <h3 style={{ textAlign: 'center' }}>{` ${selectedYear}`}</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px', backgroundColor: '#01027d', color: 'white' }}>Course</th>
                    <th style={{ padding: '12px', backgroundColor: '#01027d', color: 'white' }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {gradesData[selectedYear].map((grade, index) => (
                    <tr key={courses[index]}>
                      <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc' }}>{courses[index]}</td>
                      <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc' }}>{grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h3 style={{ fontWeight: 'large', textAlign: 'center' }}>
              Select a year and semester from the list to view details.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grades;

