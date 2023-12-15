import React, { useState, useEffect } from 'react';
import "../src/GradeReport-styles.css";
import Header from '../ms-header';
import Footer from '../ms-footer';

const GradeReport = () => {
    const initialGrades = {
        '2022/2023': {
            'First Semester': {
              MATH121: 'A',
              MATH123: 'C',
              STAT111: 'B',
              DCIT101: 'A',
              DCIT102: 'B',
              UGRC111: 'A',
            },
            'Second Semester': {
              MATH121: 'B',
              MATH126: 'A',
              STAT112: 'A',
              DCIT104: 'B',
              DCIT103: 'C',
              UGRC110: 'B',
            },
        },
        '2023/2024': {
            'First Semester': {
              MATH223: 'A',
              DCIT201: 'B',
              DCIT203: 'A',
              DCIT205: 'B',
              DCIT207: 'C',
              CBAS210: 'A',
            },
            'Second Semester': {
              DCIT200: 'C',
              DCIT202: 'A',
              DCIT204: 'A',
              DCIT206: 'A',
              DCIT208: 'B',
              UGRC220: 'B',
            },
        },
        // Add more academic years as needed
    };

    const [grades, setGrades] = useState(initialGrades);
    const [selectedSemester, setSelectedSemester] = useState('all');
    const [selectedAcademicYear, setSelectedAcademicYear] = useState('all');

    useEffect(() => {
        filterGrades();
    }, [selectedSemester, selectedAcademicYear]);

    const displayGrades = () => (
        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Semester</th>
                    <th>Academic Year</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(grades[selectedAcademicYear] || {}).map(
                    ([semester, courses]) => {
                        if (
                            selectedSemester === 'all' ||
                            selectedSemester === semester
                        ) {
                            return Object.entries(courses).map(
                                ([course, grade], index) => (
                                    <tr key={index}>
                                        <td>{course}</td>
                                        <td>{grade}</td>
                                        <td>{semester}</td>
                                        <td>{selectedAcademicYear}</td>
                                    </tr>
                                )
                            );
                        }
                        return null;
                    }
                )}
            </tbody>
        </table>
    );

const filterGrades = () => {
    if (selectedAcademicYear === 'all' && selectedSemester === 'all') {
        setGrades(initialGrades);
    } else if (selectedAcademicYear !== 'all' && selectedSemester === 'all') {
        setGrades({
            [selectedAcademicYear]: { ...initialGrades[selectedAcademicYear] },
        });
    } else if (selectedAcademicYear === 'all' && selectedSemester !== 'all') {
        setGrades(
            Object.fromEntries(
                Object.entries(initialGrades).map(([year, semesters]) => [
                    year,
                    { [selectedSemester]: semesters[selectedSemester] },
                ])
            )
        );
    } else {
        setGrades({
            [selectedAcademicYear]: {
                [selectedSemester]: initialGrades[selectedAcademicYear][selectedSemester],
            },
        });
    }
};



    return (
        <div>
            <Header />
            <div className='div'>
            <h1>Grade Report</h1>
            <label htmlFor="semester">Select Semester:</label>
            <select
                id="semester"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
            >
                <option value="all">All Semesters</option>
                <option value="First Semester">First Semester</option>
                <option value="Second Semester">Second Semester</option>
                {/* Add more semesters as needed */}
            </select>

            <label htmlFor="academicYear">Select Academic Year:</label>
            <select
                id="academicYear"
                value={selectedAcademicYear}
                onChange={(e) => setSelectedAcademicYear(e.target.value)}
            >
                <option value="all">All Academic Years</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2023/2024">2023/2024</option>
                {/* Add more academic years as needed */}
            </select>

            {displayGrades()}
        </div>
        <Footer />
        </div>
    );
};

export default GradeReport;
