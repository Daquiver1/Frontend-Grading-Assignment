import classNames from 'classnames';
import styles from './grade-report-page.module.scss';
import React, { useState } from 'react';
import { Footer } from '../footer/footer';
import { Navigation } from '../navigation/navigation';
export interface GradeReportPageProps {
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

    { course: 'UGRC 110	Academic Writing I', grade: '-', semester: 'Second Semester' },
    { course: 'MATH 122	Calculus I', grade: 'B+', semester: 'Second Semester' },
    { course: 'STAT 112	Introduction to Statistics and Probability II', grade: 'A', semester: 'Second Semester' },
    { course: 'ECON102 INTRODUCTION TO ECONOMICS II ', grade: 'A', semester: 'Second Semester' },
    { course: 'DCIT 102	Computer Hardware Fund. and Circuits', grade: 'A', semester: 'Second Semester' },
    { course: 'DCIT 104 Programming', grade: 'B', semester: 'Second Semester' },
];



export const GradeReportPage = ({ className }: GradeReportPageProps) => {

    const [courses, setCourses] = useState<Course[]>(allCourses);

    const filterCoursesBySemester = (semester: string) => {

        if (semester === 'All') {
            setCourses(allCourses);
            return;
        }


        const filteredCourses = allCourses.filter((course) => course.semester === semester);
        setCourses(filteredCourses);
    };

    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div className={styles.GR}>
            <div className="back">
                <a href="/home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={classNames('bi', styles.bk)}
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                        />
                    </svg>
                </a>
            </div>
            <h2 className={styles.ti}>Grade Report</h2>
            <div className={classNames('semester-filter', styles.SF)}>
                <label htmlFor="semester">Filter by Semester:</label>
                <select id="semester" onChange={(e) => filterCoursesBySemester(e.target.value)} className={styles.SL}>
                    <option value="All">All Semesters</option>
                    <option value="First Semester">First Semester</option>
                    <option value="Second Semester">Second Semester</option>
                </select>
            </div>
            <div className={styles.grp}>
                <ul className={classNames(styles.ul, styles.UL)}>
                    {courses.map((grade, index) => (
                        <li key={index} className={classNames(styles.li, styles.LI)}>
                            {grade.course}: {grade.grade}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer />
    </div>;
};
