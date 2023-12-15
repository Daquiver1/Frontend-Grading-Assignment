import React, { useState } from 'react';

const GradeReport = () => {
    // Simulated data (replace with actual data from your backend)
    const gradeData = {
        level100: {
            sem1: [
                { courseCode: 'DCIT101', courseName: 'Introduction to Computer Science', grade: 'A' },
                { courseCode: 'DCIT103', courseName: 'MS Productivity Tools', grade: '-' },
                { courseCode: 'DCIT105', courseName: 'Math. for IT professionals', grade: '-' },
                { courseCode: 'STAT 111', courseName: 'Intro to Stat. & Prob. ', grade: '-' },


            ],
            sem2: [
                { courseCode: 'DCIT104', courseName: 'Programming', grade: '-' },
                { courseCode: 'DCIT 102', courseName: 'Computer HF & Funds', grade: 'B' },
                { courseCode: 'UGRC 110', courseName: 'Academic writing', grade: '-' },
                { courseCode: 'Math 122', courseName: 'Calculus', grade: '-' },
                
                // Add other courses for Level 100 Semester 2
            ],
        },
        level200: {
            sem1: [
                { courseCode: 'DCIT201', courseName: 'Programming1', grade: 'A' },
                { courseCode: 'DCIT205', courseName: 'Multi media & Web Design', grade: 'C' },
                { courseCode: 'DCIT209', courseName: 'E-Business Architectures', grade: '-' },
                { courseCode: 'UGRC210', courseName: 'Academic Writing II', grade: '-' },
                
                // Add other courses for Level 200 Semester 1
            ],
            sem2: [
                { courseCode: 'UGRC220', courseName: 'Introduction to African Studies', grade: '-' },
                { courseCode: 'DCIT202', courseName: 'Mobile App Development', grade: 'B' },
                { courseCode: 'DCIT208', courseName: 'Software Engineering', grade: '-' },
                { courseCode: 'DCIT206', courseName: 'Systems Administration', grade: 'D' },
                // Add other courses for Level 200 Semester 2
            ],
          
        },
        // Add data for other levels and semesters
    };

    const [selectedLevel, setSelectedLevel] = useState('level100');
    const [selectedSemester, setSelectedSemester] = useState('sem1');

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        if (name === 'level') {
            setSelectedLevel(value);
        } else if (name === 'semester') {
            setSelectedSemester(value);
        }
    };

    return (
        <body style={bodyStyle}>
        <section>
            <h2>Grade Report</h2>
            <label>
                Select Level:
                <select name="level" value={selectedLevel} onChange={handleFilterChange}>
                    <option value="level100">Level 100</option>
                    <option value="level200">Level 200</option>
                    {/* Add other level options */}
                </select>
            </label>
            <label>
                Select Semester:
                <select name="semester" value={selectedSemester} onChange={handleFilterChange}>
                    <option value="sem1">Semester 1</option>
                    <option value="sem2">Semester 2</option>
                    {/* Add other semester options */}
                </select>
            </label>

            <table>
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {gradeData[selectedLevel][selectedSemester].map((course) => (
                        <tr key={course.courseCode}>
                            <td>{course.courseCode}</td>
                            <td>{course.courseName}</td>
                            <td>{course.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </section>
        </body>
    );
};

const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',  // You can adjust this value to control the vertical centering
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export default GradeReport;
