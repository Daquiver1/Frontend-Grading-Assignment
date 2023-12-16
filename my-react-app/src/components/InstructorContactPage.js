import React from "react";
import "./InstructorContactPage.css";

const InstructorContactPage = () => {
  const instructors = [
    { name: "Appiah Amponsah", email: "amponsah2@gmail.com" },
    { name: "Andrew Okoh", email: "okohgh@gmail.com" },
    { name: "Selasie Meha", email: "selasie567@gmail.com" },
    { name: "Bago Acheampong", email: "bago3464@gmail.com" },
    { name: "Hayford Bentil", email: "hayfordappiah5@gmail.com" },
    { name: "Gideon Bran", email: "gideon556@gmail.com" },
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