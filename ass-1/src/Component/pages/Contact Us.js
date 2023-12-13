import React from "react";
import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";
// import Img1 from "../image/Course Advisor";
import { useState } from "react";

const Contact = () => {
  const instructors = [
    {
      id: 1,
      name: "Mark Atta",

      email: "john.doe@example.com",
      // picture: { Img1 },
      description: "Experienced instructor with expertise in mathematics.",
    },

    {
      id: 2,
      name: "Jane Smith",

      email: "john.doe@example.com",
      picture: "/img/Course Advisor.jpg",
      description: "Experienced instructor with expertise in mathematics.",
    },

    {
      id: 3,
      name: "Micheal Soli",

      email: "john.doe@example.com",
      picture: "john-doe.jpg",
      description: "Experienced instructor with expertise in mathematics.",
    },

    {
      id: 4,
      name: "Christian Abrokwa",

      email: "john.doe@example.com",
      picture: "john-doe.jpg",
      description: "Experienced instructor with expertise in mathematics.",
    },
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState("");

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleSendEmail = () => {
    // Simulate sending an email (in a real-world scenario, this would involve server-side logic)
    console.log(`Email sent to ${selectedInstructor.name}: ${emailContent}`);
    // Reset state after sending the email
    setSelectedInstructor(null);
    setEmailContent("");
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="InstructorContactPage">
        <div>
          <h2 className="Heading3">Instructor Contact Page</h2>
        </div>
        <div className="instructor-list">
          <h3>Instructors</h3>
          <p className="p1">
            Click on the name on the instructor to send them am email.
          </p>
          <div className="ul-1">
            <ul>
              {instructors.map((instructor) => (
                <li
                  key={instructor.id}
                  onClick={() => handleInstructorSelect(instructor)}
                >
                  {instructor.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {selectedInstructor && (
          <div className="selected-instructor">
            <img
              src={selectedInstructor.picture}
              alt={selectedInstructor.name}
              style={imageStyles}
            />
            <h3>Contact Details</h3>
            <div>
              <p>Name: {selectedInstructor.name}</p>
              <p>Email: {selectedInstructor.email}</p>
            </div>

            <div>
              <h3>Send Email</h3>

              <textarea
                className="text"
                rows="4"
                cols="50"
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                placeholder="Type your message here..."
              />
            </div>
            <div>
              <button className="Email" onClick={handleSendEmail}>
                Send Email
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
const imageStyles = {
  width: "150px",
  borderRadius: "50%",
  marginBottom: "10px",
};
export default Contact;
