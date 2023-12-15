import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './grade-report.module.scss';
import { Navbar } from '../navbar/navbar';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';

export interface GradeReportProps {
    className?: string;
}

interface Course {
    course: string;
    grade: string;
    semester: string;
}

const allCourses: Course[] = [
    { course: 'UGRC 150 Critical Thinking and Practical Reasoning', grade: 'A', semester: 'First Semester' },
    { course: 'DCIT 101 Introduction to Computer Science', grade: 'A', semester: 'First Semester' },
    { course: 'DCIT 103	Office Productivity Tools', grade: 'A', semester: 'First Semester' },
    { course: 'DCIT 105	Mathematics for IT Professionals', grade: 'B+', semester: 'First Semester' },
    { course: 'STAT 111	Introduction to Statistics and Probability I', grade: 'A', semester: 'First Semester' },
    { course: 'ECON 101	Introduction to Economics I', grade: 'C+', semester: 'First Semester' },

    { course: 'UGRC 110	Academic Writing I', grade: 'N/A', semester: 'Second Semester' },
    { course: 'MATH 122	Calculus I', grade: 'B+', semester: 'Second Semester' },
    { course: 'STAT 112	Introduction to Statistics and Probability II', grade: 'A', semester: 'Second Semester' },
    { course: 'ECON 102 INTRODUCTION TO ECONOMICS II ', grade: 'A', semester: 'Second Semester' },
    { course: 'DCIT 102	Computer Hardware Fund. and Circuits', grade: 'A', semester: 'Second Semester' },
    { course: 'DCIT 104 Programming', grade: 'B', semester: 'Second Semester' },
];

export const GradeReport: React.FC<GradeReportProps> = ({ className }) => {
    const [courses, setCourses] = useState<Course[]>(allCourses);

    const filterCoursesBySemester = (semester: string) => {

        if (semester === 'All') {
            setCourses(allCourses);
            return;
        }


        const filteredCourses = allCourses.filter((course) => course.semester === semester);
        setCourses(filteredCourses);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <SideBar />
            <div className={styles.GR}>
                <h2>Grade Report  2022/2023</h2>
                <div className={classNames('semester-filter', styles.SF)}>
                    <label htmlFor="semester" className={styles.lbl}>Filter by Semester:</label>
                    <select id="semester" onChange={(e) => filterCoursesBySemester(e.target.value)} className={styles.SL}>
                        <option value="All">All Semesters</option>
                        <option value="First Semester">First Semester</option>
                        <option value="Second Semester">Second Semester</option>
                    </select>
                </div>
                <div className={styles['grade-report-page']}>
                    <h3 className={classNames(styles.h3, styles.H3)}>Current Grades</h3>
                    <ul className={classNames(styles.ul, styles.UL)}>
                        {courses.map((grade, index) => (
                            <li key={index} className={classNames(styles.li, styles.LI)}>
                                {grade.course}:      {grade.grade}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};
