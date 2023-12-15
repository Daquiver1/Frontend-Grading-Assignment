import React from "react";
import { BrowserRouter, Link } from "react-router-dom";



function CustomHeader() {
  return (
      <div>
        <header className="CustomHeader">
          <h1>UNIVERSITY OF GHANA'S OFFICIAL GRADE REPORT SYSTEM</h1>
        <navbar>
          <ul>
          <li><Link to="./login.jsx">LOG IN</Link></li>

            <li>SIGN IN</li>
            <li>MISSING GRADE FORM</li>
            <li>DASHBOARD</li>
            
          </ul>
        </navbar>
          
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADICAMAAADyddyUAAAAvVBMVEX+/v4A..."
            width="150"
            height="150"
          />
       

    

         <img src="data:image/png;base64,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"
         width="150"
         height="150"
         />
             
           </header>
      <hr />
    </div>
  );
}

export default CustomHeader;




