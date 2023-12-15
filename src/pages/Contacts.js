import React from 'react'
import'../styles/Contact.css';
import { FaPhone } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Contact() {
  return (
    
      <section className='contact'>
        <div className='container'>
            <h2>Contact Us</h2>
            <div className='contact-wrapper'>
                <div className='contact-form'>
                    <h3>Send Us  A Message</h3>
                    <form>
                        <div className='form-group'>
                            <input type='text' name='name' placeholder='Your Name'/>
                        </div>
                        <div className='form-group'>
                            <input type='text' name='name' placeholder='Your Email'/>
                        </div>
                        <div className='form-group'>
                           <textarea name='message' placeholder='Your Message'></textarea>
                        </div>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
                <div className='contact-info'>
                    <h3>Instructors </h3>
                    <p><FaUserCircle/>Dr Jamal Deen Abdulai</p>
                    <p><FaUserCircle/>Dr Kofi Niamah</p>
                    <p><FaUserCircle/>Dr Markmanu</p>
                </div>
                <div className='contact-info'>
                    <h3>Phone & Email </h3>
                    <p><FaPhone/>+233 501 382 035</p>
                    <p><FaPhone/>+233 559 145 698</p>
                    <p><FaRegEnvelope/>Markmanu@ug.edu.gh</p>
                    <p><FaRegEnvelope/>Niamah@ug.edu.gh</p>
                    <p><FaRegEnvelope/>Abdulai@ug.edu.gh</p>
                </div>
                
            </div>
            </div>
      </section>
    
  )
}

export default Contact
