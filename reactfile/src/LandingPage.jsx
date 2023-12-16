import React from "react";
import NavBar from './NavBar';
import Footer from "./Footer";

function LandingPage(){
  return(
    <>

      <NavBar/>
    <img className="image" src="/admissions2.png" />
    <div class="top-right">Welcome</div>

     <h1 className="landing-head">Overview of the System</h1>
    <p className="landing-paragraph">The "Missing Grade Reporting System" is a student-centric application aimed 
      at assisting users in monitoring and reporting missing grades within their
       academic profiles. The primary objective is to establish an engaging and
      user-friendly interface, facilitating students to seamlessly access their
       academic grades, report any discrepancies, and communicate effectively with 
       instructors or academic administrators. This system enhances transparency 
       and accountability, empowering students to actively manage their academic records. 
       It ensures a streamlined process for reporting missing grades, fostering 
       efficient communication channels between students and the educational institution. 
      
    </p>
    <Footer/>
            
    </>
  )
}

export default LandingPage;