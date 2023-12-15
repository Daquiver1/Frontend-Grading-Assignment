
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from "./img/image.jpg";
import "./Missing grade.css";


const About=()=>{
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
    }
    return(
    <div>
          <img src={image}  className="App-background"/>
         <h1 className="intro-header">MISSING GRADE FORM</h1>
        <div
        className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}
        >
          <div className='arrangement'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <br/> <input type="text" name="user_name" /><br/>
            <br/> <label>Email</label>
            <br/> <input type="email" name="user_email" /><br/>
            <br/> <label>course</label>
             <br/> <input type="text" name="user_name" /><br/>
            <br/> <label>Message</label><br/>
            <textarea name="message" /><br/>
            <br/><input type="submit" value="Send" /><br/>
        </form>
        </div>
           
        </div>
      
            
        </div>
        
    )
}

export default About; 