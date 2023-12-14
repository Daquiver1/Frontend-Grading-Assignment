import React from 'react';

function GradeReportPage({ grades }) {
 return (
    <div>
      <h1>Grade Report</h1>
      {grades.map((grade, index) => (
        <p key={index}>{grade.course}: {grade.grade}</p>
      ))}
    </div>
 );
}

export default GradeReportPage;