import React, { useState } from "react";
import "./Instructor.css";
import m1 from '../images/1.jpeg';
import m2 from '../images/m2.jpeg';
import m3 from '../images/m3.jpeg';
import m4 from '../images/m4.jpeg';
import m5 from '../images/m5.jpeg';
import m6 from '../images/m6.jpeg';

const instructorsData = [
  { id: 1, name: "Mark Attah Mensah", email: "markattah32@gmail.com", image: m1 },
  { id: 2, name: "Mr Aziz Abdulah", email: "azizabdul@gmail.com", image: m2 },
  { id: 3, name: "Tetteh Balankah", email: "tettehblanker@gmail.com", image:m3 },
  { id: 4, name: "Ninyung Augustine", email: "ninyungaugustine@gmail.com", image: m4 },
  { id: 5, name: "Prof. Dede Rhodah", email: "dederhodah@gmail.com", image: m5 },
  { id: 6, name: "Dr. Mills Asante", email: "millsasante@gmail.com", image: m6 },
];

const Instructor = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState("");

  const handleInstructorSelection = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const sendEmail = () => {
    console.log(`Sending email to ${selectedInstructor.email}: ${emailContent}`);
  };

  return (
    <>
      <section className="instructor-contact">
        <h1>Instructor Contact Page</h1>
        <div className="instructors-list">
          {instructorsData.map((instructor) => (
            <div key={instructor.id} className="instructor-card" onClick={() => handleInstructorSelection(instructor)}>
              <img src={instructor.image} alt={instructor.name} />
              <h3>{instructor.name}</h3>
              <p>{instructor.email}</p>
            </div>
          ))}
        </div>
        {selectedInstructor && (
          <div className="email-form">
            <h2>Email {selectedInstructor.name}</h2>
            <textarea
              placeholder={`Write your message to ${selectedInstructor.name} here...`}
              value={emailContent}
              onChange={handleEmailChange}
            ></textarea>
            <button className="btna" onClick={sendEmail}>Send Email</button>
          </div>
        )}
      </section>
    </>
  );
};

export default Instructor;