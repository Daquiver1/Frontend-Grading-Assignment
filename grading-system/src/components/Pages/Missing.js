import { FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCommentDetail } from "react-icons/bi";

const Missing = () => {
  const showAlert = () => {
    // Display a simple toast message
    toast.info("Your response is being submitted.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Close the alert after 3000 milliseconds (3 seconds)
    });
  };

  return (
    <div className="missing-wrapper">
      <form action="">
        <h1>Missing Grade Form</h1>
        <div className="missing-input-box">
          <input type="text" placeholder="Course Name" required />
          <FaBook className="icon" />
        </div>
        <div className="missing-input-box">
          <input type="text" placeholder="Instructor Name" required />
          <FaChalkboardTeacher className="icon" />
        </div>
        <div className="missing-input-box">
          <input type="text" placeholder="Expected Grade" required />
          <MdGrade className="icon" />
        </div>
        <div className="complain-area">
          <textarea type="message" placeholder="Issue Details" />
          <BiCommentDetail className="icon" />
        </div>
        <button onClick={showAlert} type="submit">
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Missing;
