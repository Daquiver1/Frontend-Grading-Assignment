
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Instructor.css";

const InstructorContact=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g6qpftj', 'template_whzcaqf', form.current, 'BMCq5NPYkj4RSD71z')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div >
             <section className="arrangement">
                <div className="cover2">
                 
                <h3 className="welcome-text">Contact Information</h3>
                <div className="contact-info ">
                <p className="welcome-text" >Web design:</p>
                <div className='welcome-text1'>
                Lecturer- Mr Soli Agbo<br/>
                Contact- 0509329094<br/>
                Email-soliagbo@ug.edu.gh <br/>
                Office Hours: Monday-Friday at 2:00pm <br/>
                </div>

                <div className='welcome-text1'>
                <p className="welcome-text">Calculus II:</p>
                Lecturer- Prof Benorient Sehba<br/>
                Contact- 0243789099 <br/>
                Email: almahu@ug.edu.gh<br/>
                Office Hours: Monday-Friday at 2:00pm <br/>
                </div>

                <div className='welcome-text1'>
                <p className="welcome-text">Calculus II:</p>
                Lecturer- Prof Benorient Sehba<br/>
                Contact- 0243789099 <br/>
                </div>

                <div className='welcome-text1'>
                <p className="welcome-text">Calculus II:</p>
                Lecturer- Prof Benorient Sehba<br/>
                Contact- 0243789099 <br/>
                </div>

                <div className='welcome-text1'>
                <p className="welcome-text">Calculus II:</p>
                Lecturer- Prof Benorient Sehba<br/>
                Contact- 0243789099 <br/>
                </div>

                </div>
                </div>
                <div className="cover2">
                 
                 <div className="contact-info ">


                 
        <div className='welcome text'>
        <h1 className="welcome-text">Contact Us Here</h1>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <br/> <input type="text" name="user_name" /><br/>
            <br/> <label>Email</label>
            <br/> <input type="email" name="user_email" /><br/>
            <br/> <label>Message</label><br/>
            <textarea name="message" /><br/>
            <br/><input type="submit" value="Send" /><br/>
        </form>
        </div>
 
                 </div>
                 </div>
                 
                 
                
                
                </section>

             
        </div>
    )
}

export default InstructorContact; 