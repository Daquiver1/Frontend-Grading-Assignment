import React from "react";
import "./Instructor1.css";

const Instructormain = () => {
  return (
    <div className="contact-col">
      <form method="post" action="">
        <input type="text" name="name" placeholder="Enter your name" required />
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter your subject"
          required
        />
        <textarea
          rows="8"
          name="message"
          placeholder="Message"
          required
        ></textarea>
      </form>
    </div>
  );
};

export default Instructormain;
