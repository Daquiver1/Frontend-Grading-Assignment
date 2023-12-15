import React from 'react';
import '../components/missinggrade.css';

const MissingGradeReport = () => {
  return (
    <div className='home'>
    <div className="missing-grade-report">
      <h2>University Of Ghana</h2>
      <h3>Missing Grade Report</h3>

      <p>
        Date: {new Date().toLocaleDateString()}
      </p>

      <p>
        <input  placeholder='Student Name'></input><br />
       <input placeholder='Student ID'></input><br />
        <input placeholder='Program'></input><br />
      </p>

      <p>
        Dear Student,
      </p>

      <p>
        We hope this letter finds you well. We are writing to inform you that there is currently a missing grade for one of your courses in the recent semester. Please review the details below:
      </p>

      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Missing Grade</th>
            <th>Semester</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> DCIT205</td>
            <td>  &nbsp; N/A</td>
            <td>first semester</td>
            <td>&nbsp; 2023</td>
          </tr>
        </tbody>
      </table>

      <p>
        Please contact the registrar's office at <strong>academicaffairs@st.ug.edu.gh</strong> to address this issue promptly. It is important to resolve missing grades to ensure accurate academic records.
      </p>

      <p>
        Thank you for your prompt attention to this matter.
      </p>

      <p>
        Sincerely,<br />
        University Of Ghana Registrar's Office
      </p>
    </div>
    </div>
  );
};

export default MissingGradeReport;
