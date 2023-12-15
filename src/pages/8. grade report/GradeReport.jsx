import React from 'react';

function GradeReportPage() {
  return (
    <div className="min-h-screen"
    style={{
      backgroundImage:'url(src/assets/unsplash1.jpg)',
      backgroundSize:'cover',
      backgroundPosition:'center',

    }}
    >
      <h1>Grade Report</h1>
      <p>Here is a detailed view of all your courses and respective grades:</p>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DCIT 205</td>
            <td>A</td>
          </tr>
          <tr>
            <td>DCIT 207</td>
            <td>B</td>
          </tr>
          <tr>
            <td>DCIT 203</td>
            <td>C</td>
          </tr>
        </tbody>
      </table>
      <p>Filter by semester/academic year:</p>
      <select>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
}

export default GradeReportPage;
