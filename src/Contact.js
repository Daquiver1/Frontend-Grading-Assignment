import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import InstructorComp from "./InstructorComp";

function Contact(){
    return(
        <>
        <Header/>
        <>
        <div className ="contact">
        <Navigation/>
        <div className="contact-container">
            <h2 className="contactTitle">Contact Instructor</h2>
        <InstructorComp iname=" Mr. Paul Ammah" cname=" DCIT 201 PROGRAMMING 1" email=" pammah@ug.edu.gh"/>
        <InstructorComp iname=" Dwumfour Abdullai Aziz" cname="DCIT 203 DIGITAL AND LOGIC SYSTEM DESIGN" email="adwumfour@ug.edu.gh"/>
        <InstructorComp iname="Mr. Agbo Tettey Sorli" cname="DCIT 205 MULTIMEDIA AND WEB DESIGN" email="" />
        </div>
        </div>
        </>
        <Footer/>
        </>
    );
}

export default Contact;