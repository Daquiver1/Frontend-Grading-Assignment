import React from "react";
import "./InstructorContactPage.css";

const InstructorContactPage = () => {
  const instructors = [
    { name: "India Wells", email: "frikazoyd@msn.com" },
    { name: "Myla Castillo", email: "reziac@live.com" },
    { name: "Ana Sweeney", email: "staffelb@outlook.com" },
    { name: "Alexia Walters", email: "keiji@outlook.com" },
    { name: "Ezequiel Blake", email: "rgarton@yahoo.ca" },
    { name: "Elianna Rush", email: "fallorn@yahoo.ca" },
  ];

  return (
    <div className="instructor-contact-container">
      <h2 className="instructor-contact-title">Instructor Contact</h2>
      <div className="instructor-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-item">
            <p className="instructor-name">{instructor.name}</p>
            <p className="instructor-email">Email: {instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorContactPage;
