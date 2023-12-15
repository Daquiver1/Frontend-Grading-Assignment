import React from "react";
import { Link } from "react-router-dom";


function description() {
    return (
      <div className="body">
        <header>
          <h2>WELCOME TO THE OFFICIAL GRADE REPORT SYSTEM</h2>
        </header>
       
          <p>
          All students can report here to complain about missing grades, errors
          in grades, and all grade-related issues.
        </p>
        <button class="button" ><Link to ="UG Report System/src/Login.jsx" >LOG IN</Link></button>
      </div>
    );
  }
  
 export default description;