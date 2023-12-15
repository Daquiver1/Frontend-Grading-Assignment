import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const GradeReportPageBody = () => {
    // Sample data of courses and grades
    const [grades,] = useState([
        { id: 1, course: 'DCIT 103', grade: 'A', semester: 'L100 1st SEM' },
        { id: 2, course: 'DCIT 102', grade: 'B', semester: 'L100 1st SEM' },
        { id: 3, course: 'STAT 112', grade: 'A', semester: 'L100 1st SEM' },
        { id: 4, course: 'STAT 111', grade: 'C', semester: 'L100 1st SEM' },
        { id: 5, course: 'MATH 123', grade: 'A', semester: 'L100 1st SEM' },
        { id: 6, course: 'MATH 112', grade: 'F', semester: 'L100 1st SEM' },

        { id: 7, course: 'DCIT 101', grade: 'A', semester: 'L100 2st SEM' },
        { id: 8, course: 'DCIT 104', grade: 'A', semester: 'L100 2st SEM' },
        { id: 9, course: 'STAT 113', grade: 'B', semester: 'L100 2st SEM' },
        { id: 10, course: 'STAT 116', grade: 'D', semester: 'L100 2st SEM' },
        { id: 11, course: 'MATH 125', grade: 'B', semester: 'L100 2st SEM' },
        { id: 12, course: 'MATH 126', grade: 'E', semester: 'L100 2st SEM' },

        { id: 13, course: 'DCIT 201', grade: 'A', semester: 'L200 1st SEM' },
        { id: 14, course: 'DCIT 203', grade: 'A', semester: 'L200 1st SEM' },
        { id: 15, course: 'STAT 221', grade: 'B', semester: 'L200 1st SEM' },
        { id: 16, course: 'STAT 223', grade: 'C', semester: 'L200 1st SEM' },
        { id: 17, course: 'Math 221', grade: 'C', semester: 'L200 1st SEM' },
        { id: 18, course: 'DCIT 205', grade: 'A', semester: 'L200 1st SEM' },

        { id: 19, course: 'STAT 226', grade: 'A', semester: 'L200 2nd Sem' },
        { id: 20, course: 'STAT 227', grade: 'C', semester: 'L200 2nd Sem' },
        { id: 21, course: 'MATH 225', grade: 'C', semester: 'L200 2nd Sem' },
        { id: 22, course: 'STAT 227', grade: 'B+', semester: 'L200 2nd Sem' },
        { id: 23, course: 'DCIT 208', grade: 'D+', semester: 'L200 2nd Sem' },
        { id: 24, course: 'DCIT 209', grade: 'A', semester: 'L200 2nd Sem' },
        { id: 25, course: 'STAT 230', grade: 'E', semester: 'L200 2nd Sem' },

        { id: 26, course: 'DCIT 305', grade: 'A', semester: 'L300 1st SEM' },
        { id: 27, course: 'DCIT 315', grade: 'A', semester: 'L300 1st SEM' },
        { id: 28, course: 'MATH 345', grade: 'C', semester: 'L300 1st SEM' },
        { id: 29, course: 'MATH 355', grade: 'A', semester: 'L300 1st SEM' },
        { id: 30, course: 'STAT 365', grade: 'B+', semester: 'L300 1st SEM' },
        { id: 31, course: 'STAT 351', grade: 'B', semester: 'L300 1st SEM' },

        { id: 32, course: 'Not Avaliblet to you yet', grade: '-', semester: 'L300 2nd SEM' },

        { id: 33, course: 'Not Avaliblet to you yet', grade: '-', semester: 'L400 1st SEM' },

        { id: 34, course: 'Not Avaliblet to you yet', grade: '-', semester: 'L400 2nd SEM' },


    ]);

    const [selectedFilter, setSelectedFilter] = useState('All'); // Initially, show all grades

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredGrades = selectedFilter !== 'All'
        ? grades.filter((grade) => grade.semester === selectedFilter)
        : grades;

    // Get unique semesters/academic years for filter options
    const semesters = ['All', ...new Set(grades.map((grade) => grade.semester))];

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="text-center mb-4">Grade Report</h1>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={`Filter by Semester/Academic Year: ${selectedFilter}`}
                        className="mb-4"
                    >
                        {semesters.map((semester, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => handleFilterChange(semester)}
                            >
                                {semester}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Grade</th>
                                <th>Level/Semester</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredGrades.map((grade) => (
                                <tr key={grade.id}>
                                    <td>{grade.course}</td>
                                    <td>{grade.grade}</td>
                                    <td>{grade.semester}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default GradeReportPageBody;
