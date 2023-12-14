import React, { useState } from "react";

function Contact() {
  const [instructors, setInstructors] = useState([
    { id: 1, name: "Micheal Soli", email: "michaelsoli@gmai.com" },
    { id: 2, name: "Mark Attah Mensah", email: "mam@gmail.com" },
    { id: 3, name: "Aziz Dwumfuor", email: "azizdwumfuor@gmail.com" },
    { id: 4, name: "Solomon Mensah", email: "solomensah@gmail.com" },
    { id: 5, name: "Ben Ghansah", email: "benghansah@gmail.com" },
    { id: 6, name: "Gloria Agyei", email: "gloriaagyei@gmail.com" },
    { id: 7, name: "Christian Abrokwa", email: "cabrokwa@gmail.com" },
    { id: 8, name: "Paul Ammah", email: "pammah@gmail.com" },
    { id: 9, name: "Samuel Winful", email: "anyanfo@gmail.com" },
    { id: 10, name: "Ben-Bright Benuwa", email: "benuwa778@gmail.com" },
    { id: 11, name: "Ben Ghansah", email: "bghansah@gmail.com" },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleEmailClick = (instructor) => {
    setSelectedInstructor(instructor);
    console.log("Contacting ${instructor.name} at ${instructor.email}");
  };

  return (
    <div>
      <h2>Instructor Contact Page</h2>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id}>
            {instructor.name} -{instructor.email}
            <button onClick={() => handleEmailClick(instructor)}>
              Send Email
            </button>
          </li>
        ))}
      </ul>
      {selectedInstructor && (
        <p>
          Email sent to {selectedInstructor.name}
          at {selectedInstructor.email}.
        </p>
      )}
    </div>
  );
}
export default  Contact ;
