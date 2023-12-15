import React from "react";
import "./styles/instructor.css";

const instructorlist = [
 {
    id: 1,
    name: "Michael Agbo Tettey Soli",
    email: "magbo@st.ug.edu.gh",
    office: "Office 1",
 },
 {
    id: 2,
    name: "Abdul Aziz Dwumfour",
    email: "adwumfour@ug.edu.gh",
    office: "Office 2",
 },
 {
    id: 3,
    name: "Mark Atta Mensah",
    email: "mamensah@ug.edu.gh",
    office: "Office 3",
 },
 // Add more instructors as needed
];

function Instructor() {
 return (
    <div className="instructors-list">
      {instructorlist.map((instructor) => (
        <div className="instructor" key={instructor.id}>
          <h2>{instructor.name}</h2>
          <p>Email: {instructor.email}</p>
          <p>Office: {instructor.office}</p>
        </div>
      ))}
    </div>
 );
}

export default Instructor;