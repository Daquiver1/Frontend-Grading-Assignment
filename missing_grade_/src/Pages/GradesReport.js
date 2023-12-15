
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from './component/Navbar';
import Footer from "./component/footer";



function Grades () {

    //Checking for empty grades and returning an alert
    useEffect(() => {
        const checkEmptyGrades = () => {
            //Get all elements with the class 'grades' in the table
            const gradeCells = document.querySelectorAll('.grades')

            //Iterate through each grade cell
            gradeCells.forEach((cell, index) => {
                const grade = cell.textContent.trim();

                //Check if the grade is empty
                if (grade === '') {
                    //Alert if an empty grade is found
                    alert(`Empty grade found at row ${index + 1}`);
                }
            });
        };

        //Run the check when the component mounts
        checkEmptyGrades();
    }, []);

    //Filtering grades by semester
    const [selectedSemester, setSelectedSemester] = useState('all');

    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    };

    const [renderedCourseIds, setRenderedCourseIds] = useState(new Set());

    const filterBySemester = (courseId) => {
        if(selectedSemester === 'all') {
            return true;
        }

        return courseId === selectedSemester;
    };

    //An array of courseData
    const courseData = [
        { id: 'first-sem', name: 'Critical Thinking and Practical Reasoning', examScore: 85, grade: '' },
        { id: 'second-sem', name: 'Academic Writing I', examScore: 91, grade: '' },
        { id: 'second-sem', name: 'Programming', examScore: 78, grade: 'B-' },
        { id: 'first-sem', name: 'Algebra and Trigonometry', examScore: 87, grade: 'A' },
        { id: 'second-sem', name: 'Introduction to Statistics and Probability II', examScore: 85, grade: 'A' },
        { id: 'second-sem', name: 'Calculus', examScore: 85, grade: 'A' },
        { id: 'first-sem', name: 'Office Productivity Tools', examScore: 85, grade: 'A' },
        { id: 'first-sem', name: 'Introduction to Statistics and Probability I', examScore: 85, grade: 'A' },
        { id: 'first-sem', name: 'Introduction to Computer Science', examScore: 85, grade: 'A' },
        { id: 'first-sem', name: 'Vectors and Geometry', examScore: 85, grade: 'A' },
      ];

    return(
        <div className="dashboard">
            <Navbar/>
            <div className="tab-2 grade-page">
                <div className="select">
                    <label htmlFor="semester">Filter by Semester:</label>
                    <select id="semester" onChange={handleSemesterChange} value={selectedSemester}>
                        <option value="all">All</option>
                        <option value="first-sem">First Semester</option>
                        <option value="second-sem">Second Semester</option>
                    </select>
                </div>
                <table className="grade-table">
                    <thead>
                    <tr>
                        <th className="courses">Course</th>
                        <th className="exams-score">Exam Score</th>
                        <th className="grades">Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                        {courseData.map((course) => (
                            filterBySemester(course.id) && (
                                <tr key={course.id}>
                                    <td className="courses">{course.name}</td>
                                    <td className="exams-score">{course.examScore}</td>
                                    <td className="grades">{course.grade}</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );


}

export default Grades;


