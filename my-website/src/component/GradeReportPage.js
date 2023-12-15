// src/components/GradeReportPage.js
import React, { useState } from 'react';
import './GradeReportPage.css';

function GradeReportPage() {
    // Mock data (replace with actual data from API or state management)
    // src/components/GradeReportPage.js
// ... (previous code)

    const gradesData = [
        {
            year: 'Year 1',
            semesters: [
                {
                    name: 'First Semester',
                    courses: [
                        { code: 'MATH101', name: 'Math', grade: 'A' },
                        { code: 'ENG101', name: 'English', grade: 'B' },
                        // Add more courses...
                    ],
                },
                {
                    name: 'Second Semester',
                    courses: [
                        { code: 'HIST101', name: 'History', grade: 'C' },
                        { code: 'SCI101', name: 'Science', grade: 'A' },
                        // Add more courses...
                    ],
                },
            ],
        },
        {
            year: 'Year 2',
            semesters: [
                {
                    name: 'First Semester',
                    courses: [
                        { code: 'PHYS201', name: 'Physics', grade: 'B' },
                        { code: 'CHEM201', name: 'Chemistry', grade: 'A' },
                        // Add more courses...
                    ],
                },
                {
                    name: 'Second Semester',
                    courses: [
                        { code: 'COMP201', name: 'Computer Science', grade: 'B' },
                        { code: 'MATH201', name: 'Advanced Math', grade: 'A' },
                        // Add more courses...
                    ],
                },
            ],
        },
        // Add more years...




];

    // State variables to store the selected year and semester
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');

    // Function to handle the change of the year selection
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setSelectedSemester(''); // Reset semester selection when year changes
    };

    // Function to handle the change of the semester selection
    const handleSemesterChange = (e) => {
        setSelectedSemester(e.target.value);
    };

    // Function to filter the grades data by the selected year and semester
    const filterByYearAndSemester = () => {
        if (selectedYear === '') {
            return gradesData; // Return all years if no selection
        } else {
            const selectedYearData = gradesData.find((year) => year.year === selectedYear);

            if (!selectedYearData || selectedSemester === '') {
                return [selectedYearData]; // Return only the selected year if no semester selection
            } else {
                const selectedSemesterData = selectedYearData.semesters.find(
                    (semester) => semester.name === selectedSemester
                );
                return [{ ...selectedYearData, semesters: [selectedSemesterData] }];
            }
        }
    };

    return (
        <div className="grade-report-container">
            <h2>Grade Report Page</h2>
            <div className="select-container">
                <label>
                    Select a year:
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">All</option>
                        {gradesData.map((year, index) => (
                            <option key={index} value={year.year}>
                                {year.year}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Select a semester:
                    <select value={selectedSemester} onChange={handleSemesterChange}>
                        <option value="">All</option>
                        {selectedYear &&
                            gradesData
                                .find((year) => year.year === selectedYear)
                                .semesters.map((semester, index) => (
                                <option key={index} value={semester.name}>
                                    {semester.name}
                                </option>
                            ))}
                    </select>
                </label>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                {filterByYearAndSemester().map((yearData, yearIndex) =>
                    yearData.semesters.map((semesterData, semesterIndex) =>
                        semesterData.courses.map((course, courseIndex) => (
                            <tr
                                key={yearIndex + semesterIndex + courseIndex}
                            >
                                <td>{yearData.year}</td>
                                <td>{semesterData.name}</td>
                                <td>{course.code}</td>
                                <td>{course.name}</td>
                                <td>{course.grade}</td>
                            </tr>
                        ))
                    )
                )}
                </tbody>
            </table>
        </div>
    );
}

export default GradeReportPage;
