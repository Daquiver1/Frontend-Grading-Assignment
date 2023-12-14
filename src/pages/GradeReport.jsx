import React, { useState } from "react";

const GradeReport = () => {

  const gradeData = [
    { course: "DCIT201", grade: "A", semester: "Fall 2023" },
    { course: "DCIT203", grade: "B", semester: "Fall 2023" },
    { course: "DCIT207", grade: "C", semester: "Spring 2024" },
 
  ];

  
  const [selectedSemester, setSelectedSemester] = useState("All");

  
  const handleFilterChange = (event) => {
    setSelectedSemester(event.target.value);
  };


  const filteredGradeData =
    selectedSemester === "All"
      ? gradeData
      : gradeData.filter((data) => data.semester === selectedSemester);


  const uniqueSemesters = [...new Set(gradeData.map((data) => data.semester))];

  return (
    <div>
      <h2>Grade Report</h2>
      <div className="mt-4">
        
        <label htmlFor="semesterFilter" className="block mb-2">
          Filter by Semester:
        </label>
        <select
          id="semesterFilter"
          className="border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={selectedSemester}
          onChange={handleFilterChange}
        >
          <option value="All">All Semesters</option>
          {uniqueSemesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>

    
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4">Course</th>
              <th className="border border-gray-300 py-2 px-4">Grade</th>
              <th className="border border-gray-300 py-2 px-4">Semester</th>
            </tr>
          </thead>
          <tbody>
            {filteredGradeData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300 py-2 px-4">{data.course}</td>
                <td className="border border-gray-300 py-2 px-4">{data.grade}</td>
                <td className="border border-gray-300 py-2 px-4">{data.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />   <br />  <br />  <br />  <br /> 
      <footer className="text-white py-4 text-center">
        
        <p>&copy; 2023 Thelsare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GradeReport;
