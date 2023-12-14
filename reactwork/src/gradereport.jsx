import React, { useState } from 'react';

const GradeReport = () => {
    const [selectedSemester, setSelectedSemester] = useState('');

    const gradeData = {
        level100: {
            sem1: [
                { code: 'DCIT101', name: 'Introduction to Computer Science', grade: 'A' },
                { code: 'DCIT103', name: 'Office Productivity Tools', grade: 'B' },
            ],
            sem2: [
                { code: 'DCIT104', name: 'Programming', grade: 'A' },
                { code: 'DCIT102', name: 'Computer Hardware Fund. and Circuits', grade: '-' },
            ],
        },
        // Add data for level200, level300, etc.
    };

    const handleSemesterChange = (semester) => {
        setSelectedSemester(semester);
    };

    return (
        <section style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <h2>Grade Report</h2>
            {/* Semester filter */}
            <div style={{ marginBottom: '15px' }}>
                <label>Select Semester:</label>
                <select
                    onChange={(e) => handleSemesterChange(e.target.value)}
                    value={selectedSemester}
                    style={{ marginLeft: '10px', padding: '5px' }}
                >
                    <option value="">All Semesters</option>
                    <option value="sem1">Semester 1</option>
                    <option value="sem2">Semester 2</option>
                    {/* Add more semester options as needed */}
                </select>
            </div>

            {/* Display courses based on the selected semester */}
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {selectedSemester
                    ? gradeData[selectedSemester].map((course) => (
                          <li key={course.code} style={{ marginBottom: '10px' }}>
                              <strong>{course.code}</strong> - {course.name} [Grade: {course.grade}]
                          </li>
                      ))
                    : Object.keys(gradeData).map((level) =>
                          Object.keys(gradeData[level]).map((semester) =>
                              gradeData[level][semester].map((course) => (
                                  <li key={course.code} style={{ marginBottom: '10px' }}>
                                      <strong>{course.code}</strong> - {course.name} [Grade: {course.grade}]
                                  </li>
                              ))
                          )
                      )}
            </ul>
        </section>
    );
};

export default GradeReport;
