import React from "react";
import Nav from "./components/Navbar";
import Report from "./components/Report";

const GradeReport = () => {
    return ( 
      <>
         <Nav/>
         <div className="mt-[85px]">
      <Report/>
         </div>
         </>
        
     );
}
 
export default GradeReport;