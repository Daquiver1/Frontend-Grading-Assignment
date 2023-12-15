import React from "react";

function CourseGrade({ courseCode, courseName, creditHours, grade }) {
  return (
    <>
      <tr className="border-2">
        <td className=" border-3 p-2 text-center">{courseCode}</td>
        <td className=" border-3 p-2 text-center">{courseName}</td>
        <td className=" border-3 p-2 text-center">{creditHours}</td>
        <td className=" border-3 p-2 text-center">{grade}</td>
      </tr>
    </>
  );
}

export default CourseGrade;
