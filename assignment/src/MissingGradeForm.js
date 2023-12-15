import React from "react";
import GradeForm from "./components/Forms";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";

const MissingGrade = () => {
    return ( 
       
        <>
        <Nav/>
        <div className="mt-[85px]">
         <GradeForm/>
         <Footer/>
        </div>
        </>
      
     );
}
 
export default MissingGrade;