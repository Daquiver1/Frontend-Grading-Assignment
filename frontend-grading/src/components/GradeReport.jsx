// GradeReport.js
import React from 'react';

const GradeReport = () => {
  // Sample data (replace with actual data)
  const studentInfo = {
    name: 'Nsroma K. Arhin',
    studentID: '11293722',
    program: 'Information Technology',
    semester: '1st',
  };

  const courseInfo = {
    courseName: 'Introduction to React',
    courseCode: 'DCIT205',
    instructor: 'Dr. Smith',
    gradingScale: 'A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59',
  };

  const gradeDetails = {
    finalGrade: 'A',
    breakdown: {
      assignments: 90,
      exams: 95,
      project: 88,
    },
    gpa: 4.0,
  };

  const attendanceRecord = {
    classesAttended: 25,
    totalClasses: 30,
    attendancePercentage: 83.33,
  };

  const importantDates = {
    startDate: '2023-01-15',
    endDate: '2023-05-15',
    examDate: '2023-04-30',
    assignmentDeadline: '2023-04-15',
  };

  const commentsFeedback = 'Great job! Keep up the good work.';

  return (
    <div className="grade-report-container">
      <h1>Grade Report</h1>

      <section>
        <h2>Student Information</h2>
        <p>Name: {studentInfo.name}</p>
        <p>Student ID: {studentInfo.studentID}</p>
        <p>Program: {studentInfo.program}</p>
        <p>Semester: {studentInfo.semester}</p>
      </section>

      <section>
        <h2>Course Information</h2>
        <p>Course Name: {courseInfo.courseName}</p>
        <p>Course Code: {courseInfo.courseCode}</p>
        <p>Instructor: {courseInfo.instructor}</p>
        <p>Grading Scale: {courseInfo.gradingScale}</p>
      </section>

      <section>
        <h2>Grade Details</h2>
        <p>Final Grade: {gradeDetails.finalGrade}</p>
        <p>GPA: {gradeDetails.gpa}</p>
        <ul>
          <li>Assignments: {gradeDetails.breakdown.assignments}</li>
          <li>Exams: {gradeDetails.breakdown.exams}</li>
          <li>Project: {gradeDetails.breakdown.project}</li>
        </ul>
      </section>

      <section>
        <h2>Attendance Record</h2>
        <p>Classes Attended: {attendanceRecord.classesAttended}</p>
        <p>Total Classes: {attendanceRecord.totalClasses}</p>
        <p>Attendance Percentage: {attendanceRecord.attendancePercentage}%</p>
      </section>

      <section>
        <h2>Important Dates</h2>
        <p>Start Date: {importantDates.startDate}</p>
        <p>End Date: {importantDates.endDate}</p>
        <p>Exam Date: {importantDates.examDate}</p>
        <p>Assignment Deadline: {importantDates.assignmentDeadline}</p>
      </section>

      <section>
        <h2>Comments and Feedback</h2>
        <p>{commentsFeedback}</p>
      </section>
    </div>
  );
};

export default GradeReport;
