import React from "react";
import "./styles/instructor.css";


const instructors = [
  { id: 1, name: "Instructor 1", email: "instructor1@example.com", office: "Office 1" },
  { id: 2, name: "Instructor 2", email: "instructor2@example.com", office: "Office 2" },
  { id: 3, name: "Instructor 3", email: "instructor3@example.com", office: "Office 3" },
  // Add more instructors as needed
];

const InstructorList = ({ onSelect }) => {
  return (
    <ul className="instructor-list">
      {instructors.map((instructor) => (
        <li key={instructor.id} onClick={() => onSelect(instructor)}>
          {instructor.name}
        </li>
      ))}
    </ul>
  );
};

export default InstructorList;
