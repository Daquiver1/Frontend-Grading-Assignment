import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LeftSidebar from "../components/LeftSidebar";

function MissingGradeFormPage() {
  const handleClick = () => {
    var CourseName = document.getElementById("coursename");
    var InstructorName = document.getElementById("instructorname");
    var Grade = document.getElementById("grade");
    var msg = document.getElementById("msg");
    const success = document.getElementById("success");
    const empty = document.getElementById("empty");

    if (
      CourseName.value === "" ||
      InstructorName.value === "" ||
      Grade.value === "" ||
      msg.value === ""
    ) {
      empty.style.display = "block";
    } else {
      setTimeout(() => {
        CourseName.value = "";
        InstructorName.value = "";
        Grade.value = "";
        msg.value = "";
      }, 2000);
      success.style.display = "block";
    }
    setTimeout(() => {
      empty.style.display = "none";
      success.style.display = "none";
    }, 4000);
  };

  const backgroundImage = (
    <img
      className="grade-form-background-image-container"
      src={process.env.PUBLIC_URL + "./images/dcs-banner.jpg"}
    />
  );
  const pageContent = (
    <>
      <div className="page-note-container">
        <h2>Report Any Missing Grade To Your Instructor</h2>
      </div>
      <div className="missing-grade-form">
        <div className="course-name-container">
          <p>Course Name</p>
          <input type="text" placeholder="Enter course name" id="coursename" />
        </div>
        <div className="instructor-name-container">
          <p>Instructor's name</p>
          <input
            type="text"
            placeholder="Enter instructor's name"
            id="instructorname"
          />
        </div>
        <div className="expected-grade-container">
          <p>Expected Grade</p>
          <input type="text" placeholder="Grade" id="grade" />
        </div>
        <div className="explanation-container">
          <p>Provide an explanation</p>
          <textarea id="msg" />
        </div>
        <div className="submit1-button-container">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
        <div className="message">
          <div className="success" id="success">
            Submitted Successfully
          </div>
          <div className="empty" id="empty">
            Fields cannot be empty!
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={backgroundImage}
        pageContent={pageContent}
      />
      <LeftSidebar />
    </>
  );
}

export default MissingGradeFormPage;
