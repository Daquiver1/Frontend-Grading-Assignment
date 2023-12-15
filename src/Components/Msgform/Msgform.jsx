import React from "react";
import "./Msgform.css";

const Msgform = () => {
  return (
    <div className="contact-col">
      <h2>MISSING GRADE REPORT FORM </h2>
      <form method="post" action="">
        <input type="text" name="code" placeholder="Course Code" required />
        <input type="text" name="name" placeholder="Course name" required />
        <input
          type="text"
          name="Instructor name"
          placeholder="Enter name of instructor"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Enter Expected Grade"
          required
        />
        <textarea
          rows="8"
          name="message"
          placeholder="Explanation field"
          required
        ></textarea>
      </form>
      <p>
        <button className="btns">Submit</button>
      </p>
    </div>
  );
};

export default Msgform;
