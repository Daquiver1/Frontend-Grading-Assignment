import React from "react";
import "../Styles/InstructorContact.css";

export const InstructorContact = () => {
  return (
    <div className="i-container">
      <div className="contact">
        <div className="contact-details">Dr.Mark Atta Mensah</div>
        <div className="contact-details">MAM@gmail.com</div>
        <div className="contact-details">
          <button className="send-btn">Send Email</button>
        </div>
      </div>
      <div className="contact">
        <div className="contact-details"> Dr. Michael Agbo Tetteh Soli</div>
        <div className="contact-details">MichaelSoli@gmail.com</div>
        <div className="contact-details">
          <button className="send-btn">Send Email</button>
        </div>
      </div>
      <div className="contact">
        <div className="contact-details">Dr. Aziz Abdullai Dwumfuor</div>
        <div className="contact-details">Aziz@gmail.com</div>
        <div className="contact-details">
          <button className="send-btn">Send Email</button>
        </div>
      </div>
      <div className="contact">
        <div className="contact-details">Prof. Ferdinand Katsriku</div>
        <div className="contact-details">Ferdinand@gmail.com</div>
        <div className="contact-details">
          <button className="send-btn">Send Email</button>
        </div>
      </div>
    </div>
  );
};
