import React from "react";
import'./HelpSupport.css';
import Header from "./Header";
import Footer from "./footer";

export default function HelpSupport(){
    return(
        <>
        <Header/>

        <div className="help_container">
        <div className="help_container_item_1">
            <h3>Hello,<br /> how can we help?</h3>
        </div>
        <div className="help_container_item_2">
            <h3>FAQs, quick fixes,and <br />
            official info. Just a <br />
            search away <br /> <br />
            </h3>
            <form>
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>

           
        </div>
        </div>
        <div className="flex_container">
        <div className="fqa_container">
            <div>FAQs</div>
            <hr />
            <div className="faqs_item">
            How can I check my grades and 
            academic progress?
            </div>
            <hr />
            <div className="faqs_item">
            What is the grading
             system used at your
              institution, and
             how are grades 
             calculated?
            </div>
            <hr />
            <div className="faqs_item">
            How can I request a
             transcript or
             official academic 
             record?
            </div>
            <hr />

        </div>

        <div className="fqa_container">
            <div></div>
            <hr />
            <div className="faqs_item">
            What is 
            the process for adding or
             dropping courses?
            </div>
            <hr />
            <div className="faqs_item">
            Can I retake a
             course if I'm not 
             satisfied with my grade?
            </div>
            <hr />
            <div className="faqs_item">
            Are there any prerequisites
             or corequisites for
              specific courses?
            </div>
            <hr />

        </div>

        <div className="fqa_container">
            <div></div>
            <hr />
            <div className="faqs_item">
            How can I check my grades and 
            academic progress?
            </div>
            <hr />
            <div className="faqs_item">
            How can I access 
            course materials, 
            syllabi, and assignments?
            </div>
            <hr />
            <div className="faqs_item">
            Are there any tutoring
             or academic support 
             services available for
            </div>
            <hr />

        </div>
        </div>

        <div className="contact_form">
           <div className="csLogo_img"><img src="comScience_logo.png" alt="" className="log" /></div>
           <div class="container_form">
    <h2>Contact Technical Support</h2>
    <form>
      <label for="name" className="label">Full Name:</label>
      <input type="text" id="name" required />
        <br />
        <br />
      <label for="email" className="label">Email:</label>
      <input type="email" id="email" required />
            <br />
      <label for="message" className="label">Message:</label>
    
      <textarea id="message" required></textarea>
        <br />
        <br />
      <button type="submit" id="submit">Contact us</button>
      
    </form>

        </div>
        </div>
        <img src="/help.jfif" alt="help" id="help"/>

        <Footer/>
        </>
    )
}