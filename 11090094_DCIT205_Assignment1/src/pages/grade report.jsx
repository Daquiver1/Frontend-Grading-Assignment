import React, { useState } from "react";
import FooterComponent from "../components/FooterComponent";

export const GradeReport = () => {
  const [Data] = useState([
    {
      academicYear: "2022-2023",
      semester: "Level-100 First Semester",
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
          grade: "B+",
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
      academicYear: "2022-2023",
      semester: "Level-100 Second Semester",
      courses: [
        {
          title: "Computer Hardware Fundamentals and Circuits",
          grade: "B+",
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
          grade: "B",
        },
        {
          title: "Academic Writing I",
          grade: "B",
        },
      ],
    },
    {
      academicYear: "2023-2024",
      semester: "Level 200 First Semester",
      courses: [
        {
          title: "Programming 1",
          grade: "A",
        },
        {
          title: "Digital and Logic System Design",
          grade: "N/A",
        },
        {
          title: "Multimedia and Web Design",
          grade: "N/A",
        },
        {
          title: "Computer Organization and Architecture",
          grade: "A",
        },
        {
          title: "E-Business",
          grade: "A",
        },
        {
          title: "Academic Writing",
          grade: "A",
        },
      ],
    },
  ]);

  const [selectedSemester, setSelectedSemester] = useState("All");

  const filteredData =
    selectedSemester === "All"
      ? Data
      : Data.filter((semester) => semester.semester === selectedSemester);

  return (
    <>
      <div className="bg-gray-800">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-500">
            Grade Report Page
          </h1>

          <div className="mb-4">
            <label className="block text-teal-500 font-bold mb-2 text-xl">
              Filter by Semester:
            </label>
            <select
              className="border rounded-md p-2"
              onChange={(e) => setSelectedSemester(e.target.value)}
              value={selectedSemester}>
              <option value="All" className="text-teal-500">
                All Semesters
              </option>
              {Data.map((semester) => (
                <optgroup
                  key={semester.academicYear}
                  label={semester.academicYear}>
                  <option value={semester.semester}>{semester.semester}</option>
                </optgroup>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto text-white">
            {filteredData.map((semester) => (
              <div key={semester.semester} className="mb-8">
                <h2 className="text-xl font-bold mb-2">
                  {semester.academicYear} - {semester.semester}
                </h2>
                <table className="w-full text-sm text-left ">
                  <thead className="text-xl   dark:bg-teal-500">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-white">
                        Course Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-white">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.courses.map((course) => (
                      <tr
                        key={course.title}
                        className="text-white font-bold border-b dark:bg-teal-500 ">
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
      </div>
      <FooterComponent />
    </>
  );
};
