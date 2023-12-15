import React, { useState } from "react";

export const GradeReport = () => {
  const [gradeData, setGradeData] = useState([
    {
      academicYear: "2022/2023",
      semester: "First Semester",
      courses: [
        {
          title: "Introduction to Computer Science",

          grade: "A",
        },
        {
          title: "Office Productivity Tools",

          grade: "A",
        },
        {
          title: "Mathematics for IT Professionals",

          grade: "A",
        },
        {
          title: "Introduction to Economics I",

          grade: "A",
        },
        {
          title: "Introduction to Statistics and Probability I",

          grade: "A",
        },
        {
          title: "Critical Thinking and Practical Reasoning",

          grade: "A",
        },
      ],
    },
    {
      academicYear: "2022/2023",
      semester: "Second Semester",
      courses: [
        {
          title: "Computer Hardware Fundamentals and Circuits",

          grade: "A",
        },
        {
          title: "Programming Fundamentals",

          grade: "A",
        },
        {
          title: "Introduction to Economics II",

          grade: "A",
        },
        {
          title: "Calculus I",

          grade: "A",
        },
        {
          title: "Introduction to Statistics and Probability II",

          grade: "A",
        },
        {
          title: "Principles of Management",

          grade: "A",
        },
        {
          title: "Academic Writing I",

          grade: "A",
        },
      ],
    },
  ]);

  const [selectedSemester, setSelectedSemester] = useState("All");

  const filteredGradeData =
    selectedSemester === "All"
      ? gradeData
      : gradeData.filter((semester) => semester.semester === selectedSemester);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Grade Report Page</h1>

      {/* Semester Filter */}
      <div className="mb-4">
        <label className="block text-teal-500 text-sm font-bold mb-2">
          Filter by Semester:
        </label>
        <select
          className="border rounded-md p-2"
          onChange={(e) => setSelectedSemester(e.target.value)}
          value={selectedSemester}>
          <option value="All">All Semesters</option>
          {gradeData.map((semester) => (
            <option key={semester.semester} value={semester.semester}>
              {semester.semester}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        {filteredGradeData.map((semester) => (
          <div key={semester.semester} className="mb-8">
            <h2 className="text-xl font-bold mb-2"></h2>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Course Title
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course) => (
                  <tr
                    key={course.code}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">{course.title}</td>
                    <td className="px-6 py-4">{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
