import React from 'react';

function GradeReport() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <header>
        <b className="text-2xl font-bold">MISSING GRADE REPORTING SYSTEM</b>
      </header>

      <main className="mt-8">
        <section className="grade-report-section bg-white rounded-md p-8">
          <h2 className="text-3xl font-bold">Grade Report</h2>

          <div className="filters mt-4">
            <label htmlFor="semester" className="text-lg">Select Semester:</label>
            <select id="semester" className="ml-2 p-2 border rounded-md">
              <option value="all">All Semesters</option>
              <option value="SEM1">SEM 1</option>
              <option value="SEM2">SEM 2</option>
              <option value="SEM3">SEM 3</option>
            </select>

            <label htmlFor="academicYear" className="text-lg ml-4">Select Academic Year:</label>
            <select id="academicYear" className="ml-2 p-2 border rounded-md">
              <option value="all">All Years</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          <div className="grade-table mt-8">
            <h3 className="text-xl font-bold">All Grades</h3>
            <table className="mt-4 w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Course</th>
                  <th className="border px-4 py-2">Semester</th>
                  <th className="border px-4 py-2">Academic Year</th>
                  <th className="border px-4 py-2">Grade</th>
                  <th className="border px-4 py-2">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Mathematics</td>
                  <td className="border px-4 py-2">SEM 1</td>
                  <td className="border px-4 py-2">2023</td>
                  <td className="border px-4 py-2">89</td>
                  <td className="border px-4 py-2">Good work</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Science</td>
                  <td className="border px-4 py-2">SEM 2</td>
                  <td className="border px-4 py-2">2023</td>
                  <td className="border px-4 py-2">78</td>
                  <td className="border px-4 py-2">Keep it up!</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Economics</td>
                  <td className="border px-4 py-2">SEM 3</td>
                  <td className="border px-4 py-2">2022</td>
                  <td className="border px-4 py-2">92</td>
                  <td className="border px-4 py-2">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="mt-8">
        <b className="text-xl">11112468Company</b>
      </footer>
    </div>
  );
}

export default GradeReport;