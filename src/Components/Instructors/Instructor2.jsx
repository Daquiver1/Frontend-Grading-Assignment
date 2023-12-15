import React from "react";
import "./Instructor2.css";

const Instructor2 = () => {
  return (
    <div className="mainDiv">
      <div className="lecturerInfo">
        <h2>Lecturer.</h2>
        <p>
          <strong>Name:</strong> Mr. Mr. Dwumfour Abdullai Abdul-Aziz
        </p>
        <p>
          <strong>Email:</strong> adwumfour@ug.edu.gh
        </p>
      </div>
      <div className="courseList">
        <h2>Course Codes:</h2>
        <ul>
          <li>DCIT 203</li>
          <br />
          <li>DCIT 102</li>
        </ul>
      </div>
      <div className="lecturerInfo">
        <h2>Lecturer.</h2>
        <p>
          <strong>Name:</strong> Mr. Paul Nii Tackie Ammah
        </p>
        <p>
          <strong>Email:</strong> pammah@ug.edu.gh
        </p>
      </div>
      <div className="courseList">
        <h2>Course Codes:</h2>
        <ul>
          <li>DCIT 201</li>
          <br />
          <li>DCIT 202</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructor2;
