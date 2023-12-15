import React, { useState } from "react";
import styles from "../components-css/Instructor.css";
import { FaEnvelope } from "react-icons/fa";


const InstructorContactPage = () => {
  const instructors = [
    { name: "Dr. Jones", email: "djones@university.edu", office: "Building A, Room 201", officeHours: "M/W 10:00 AM - 12:00 PM" },
    { name: "Professor Smith", email: "psmith@university.edu", office: "Building B, Room 305", officeHours: "T/Th 2:00 PM - 4:00 PM" },
    { name: "Ms. Lee", email: "mlee@university.edu", office: "Building C, Room 102", officeHours: "By appointment" },
  ];
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleSelectInstructor = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <div className={styles.contactPage}>
      <h1>Contact Your Instructors</h1>
      <ul className={styles.instructorList}>
        {instructors.map((instructor, index) => (
          <li key={index} className={styles.instructorItem}>
            <button
              onClick={() => handleSelectInstructor(instructor)}
              className={selectedInstructor === instructor ? styles.selected : styles.unselected}
            >
              {instructor.name}
            </button>
            <div className={styles.instructorDetails}>
              <p>Email: {instructor.email}</p>
              <p>Office: {instructor.office}</p>
              <p>Office Hours: {instructor.officeHours}</p>
              
            </div>
          </li>
        ))}
      </ul>
      {selectedInstructor && (
        <div className={styles.additionalDetails}>
          <h3>Additional Details for {selectedInstructor.name}</h3>
          <button className={styles.contactButton}>
            <i ><FaEnvelope /></i> Send Email
          </button>
        </div>
      )}
    </div>
  );
};

export default InstructorContactPage;
