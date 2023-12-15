import React from "react";
import "./Instructormain2.css";

const Instructormain2 = () => {
  return (
    <div className="newsletter">
      <p> Use this section to send an email to the lecturer.</p>
      <div>
        <input type="email" placeholder="Email Address Of Lecturer"></input>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Instructormain2;
