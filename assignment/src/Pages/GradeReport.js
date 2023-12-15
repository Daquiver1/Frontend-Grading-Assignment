// GradeReport.js
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom"; // Make sure to import Link from 'react-router-dom'

const GradeReport = () => {
  // Sample data for courses and grades
  const gradeData = [
    { course: "Math", grade: "A", semester: "1st 2022" },
    { course: "Science", grade: "B", semester: "2nd 2022" },
    { course: "English", grade: "A-", semester: "1st 2023" },
    // Add more data as needed
  ];

  // State to manage selected semester
  const [selectedSemester, setSelectedSemester] = useState("All");

  // Get unique semesters from the data
  const semesters = ["All", ...new Set(gradeData.map((item) => item.semester))];

  // Filter courses by semester
  const filteredGradeData =
    selectedSemester === "All"
      ? gradeData
      : gradeData.filter((item) => item.semester === selectedSemester);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Grade Report</h2>

      {/* Semester Filter */}
      <div className="mb-4">
        <label htmlFor="semester" className="mr-2">
          Select Semester:
        </label>
        <select
          id="semester"
          className="p-2 border rounded"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      {/* Grade Table */}
      <table className="w-full bg-white border border-gray-300 rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Course</th>
            <th className="p-2">Grade</th>
            <th className="p-2">Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredGradeData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-2 border">{item.course}</td>
              <td className="p-2 border">{item.grade}</td>
              <td className="p-2 border">{item.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Option to go to a detailed view */}
      <div className="mt-4">
        <p className="text-gray-600">
          For a more detailed view, you can navigate to the detailed report
          page.
        </p>
        <Link
          to="/detailedReport"
          className="flex items-center text-blue-600 hover:underline"
        >
          Go to Detailed Report
          <BsArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default GradeReport;
