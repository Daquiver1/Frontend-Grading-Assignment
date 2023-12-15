import React, { useState } from "react";

const instructors = [
  {
    id: 1,
    name: "Dr. Soli Agbo-Tetteh",
    email: "SoliMan@gmail.com",
    department: "DCIT 401",
    office: "Room 301, Comp sc Building",
    phone: "025 456 7890",
  },
  {
    id: 2,
    name: "Prof. Solomon Mensah",
    email: "profsolo9@gmail.com",
    department: "DCIT 105",
    office: "Room 202, COMP SC. Building",
    phone: "059 876 4521",
  },
  {
    id: 3,
    name: "Dr. Ferdinard Katriku",
    email: "Ferd-Kat@gmail.com",
    department: "DCIT 104",
    office: "Room 105, Comp sc. Building",
    phone: "053 987 5609",
  },
  {
    id: 4,
    name: "Prof Nii Tackie",
    email: "tackie34nii@gmail.com",
    department: "DCIT 305",
    office: "Room 405, Comp sc. Building",
    phone: "024 357 6908",
  },
];

const Contact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState("");

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent("");
  };

  const handleSendEmail = () => {
    // Simulate sending email (you can add actual email sending logic here)
    alert(
      `Email sent to ${selectedInstructor.name} (${selectedInstructor.email}):\n\n${emailContent}`
    );
  };

  return (
    <body style={{ padding: "0 8% 0 8%", backgroundColor: "#f4f4f4" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#01027d",
          }}
        >
          Contact Instructors
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: "#01027d" }}>Instructors</h3>
            <ul>
              {instructors.map((instructor) => (
                <li
                  key={instructor.id}
                  style={{
                    cursor: "pointer",
                    marginBottom: "10px",
                    backgroundColor:
                      selectedInstructor === instructor ? "#eee" : "inherit",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleInstructorClick(instructor)}
                >
                  {instructor.name} ({instructor.department})
                </li>
              ))}
            </ul>
          </div>

          {selectedInstructor && (
            <div style={{ flex: 2, marginLeft: "20px" }}>
              <h3 style={{ color: "#01027d" }}>
                Contact {selectedInstructor.name}
              </h3>
              <p>
                <strong>Email:</strong> {selectedInstructor.email}
              </p>
              <p>
                <strong>Department:</strong> {selectedInstructor.department}
              </p>
              <p>
                <strong>Office:</strong> {selectedInstructor.office}
              </p>
              <p>
                <strong>Phone:</strong> {selectedInstructor.phone}
              </p>
              <textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: "150px",
                  padding: "8px",
                  marginBottom: "20px",
                }}
                placeholder="Write your message here..."
              />
              <button
                onClick={handleSendEmail}
                style={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send Email
              </button>
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

export default Contact;
