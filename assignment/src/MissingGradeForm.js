import React from "react";
import GradeForm from "./components/Forms";
import Nav from "./components/Navbar";

const MissingGrade = () => {
    return ( 
       
        <>
        <Nav/>
        <div className="mt-[85px]">
         <GradeForm/>
        </div>
        </>
      
     );
}
 
export default MissingGrade;