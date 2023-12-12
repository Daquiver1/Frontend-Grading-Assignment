import React, { useState } from 'react'
import "./styles/Contactus.css";
import emailjs from '@emailjs/browser';
function ContactUs() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_568b21c', 'template_40397dq', e
    .target, 'user_DhJHGzKYgVZFvRrTQWOxN')
    .then((result) => {
      console.log(result.text);
      }, (error) => {
        console.log(error.text);
        });
        };
        return (
          <div className="contact-us">
            <form onSubmit={sendEmail}>
              <label>Your Name:</label>
              <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value
              )}} required/><br />
              <label>Subject:</label>
              <select name='subject' value={subject} onChange={(e)=>{setSubject(e.target.value)}} >
                <option value=''>--Please choose an option--</option>
                <option value='General Inquiry'>General Inquiry</option> 
                <option value='Feedback'>Feedback</option>
                <option value='Technical Issue'>Technical Issue</option>
                </select><br />
                <label>Message:</label>
                <textarea name='message' rows='4' cols='50' value={message} onChange={(e)=>{setMessage(
                  e.target.value)}} required></textarea><br />
                  <button type='submit'>Send</button>
                  </form>
                  </div>
                  );
                  }
                  export default ContactUs;
                  