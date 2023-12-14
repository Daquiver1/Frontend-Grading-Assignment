import React from "react";
import "../Styles/Instructor-Info.css";


function Report (){
  return(
    <>
      <div className="report-body">
        <div className="email-form" id="email">
            <h1>Report Missing Grade</h1>
            <form>
              <div className="first"> 
                <input type="text" placeholder="Course" required/>
                <input type="text" placeholder="Instructor  Name" required/>
              </div>
              <input type="text" placeholder="Expected Grade" required/>
              <textarea rows={10} cols={21} placeholder="Explanation" required/>
              <button type="submit" >Send</button>
            </form>
          </div>
      </div>
    </>
  );
}

export default Report