import React from 'react';


function GradeReport() {
  return (
    <div>
      <header>
        <b>MISSING GRADE REPORTING SYSTEM</b>
      </header>

      <main>
        <section className="grade-report-section">
          <h2>Grade Report</h2>

          <div className="filters">
            <label htmlFor="semester">Select Semester:</label>
            <select id="semester">
              <option value="all">All Semesters</option>
              <option value="SEM1">SEM 1</option>
              <option value="SEM2">SEM 2</option>
              <option value="SEM3">SEM 3</option>
            </select>

            <label htmlFor="academicYear">Select Academic Year:</label>
            <select id="academicYear">
              <option value="all">All Years</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          <div className="grade-table">
            <h3>All Grades</h3>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Academic Year</th>
                  <th>Grade</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td>
                  <td>SEM 1</td>
                  <td>2023</td>
                  <td>89</td>
                  <td>Good work</td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>SEM 2</td>
                  <td>2023</td>
                  <td>78</td>
                  <td>Keep it up!</td>
                </tr>
                <tr>
                  <td>Economics</td>
                  <td>SEM 3</td>
                  <td>2022</td>
                  <td>92</td>
                  <td>Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer>
        <b>MISSING GRADE REPORTING SYSTEM</b>
      </footer>
    </div>
  );
}

export default GradeReport;
