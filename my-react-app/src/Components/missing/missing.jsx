import React from "react";
import "./missing.css";

const missing = () => {
    return (
        
        <div className="container">
            <div className="header">
            <div className="text">Missing Grade Report</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
        <input className="input" type="text" placeholder="Enter your Name"/>
        <input className="input" type="email" placeholder="Enter Your Student ID"/>
        <input className="input" type="text" placeholder="Enter your subject"/>
        <textarea className="textarea" rows="8" placeholder="Write Your Message Here"/>
        <div className="submit-container">
        <div className="submit">
          Submit
        </div>
      </div>
    </div>
    </div>

        

          
    )
}
export default missing;