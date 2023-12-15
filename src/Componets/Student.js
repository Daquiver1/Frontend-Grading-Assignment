import React from "react";

function StudentProfile({ student }) {
  const { name, studentId, email, courseTitle, avatarUrl } = student;

  const handleReportMissingClick = () => {
    // Implement your logic for reporting a missing student
    console.log(
      `Reporting student ${studentId} missing for course ${courseTitle}`
    );
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md flex flex-col items-center justify-center">
      {avatarUrl && (
        <img
          className="rounded-full w-60 h-60 mb-4 mx-auto"
          src={avatarUrl}
          alt={`${name} avatar`}
        />
      )}
      <h2 className="text-lg font-medium mb-2">{name}</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-gray-600 font-medium mr-2">Student ID:</span>
          <span>{studentId}</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 font-medium mr-2">Email:</span>
          <span>{email}</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-600 font-medium mr-2">Course:</span>
          <span>{courseTitle}</span>
        </li>
      </ul>
      <a href="/report"
        className="mt-4 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-700 transition-colors duration-150 ease-in-out"
        onClick={handleReportMissingClick}
      >
        Report Missing
      </a>
    </div>
  );
}

export default StudentProfile;
