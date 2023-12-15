import React from "react";
import"./missingGrade.css"
import Footer from "./footer";
import Header from "./header";
import Picture from "./missing grade2.jpg";

export default function missingGrade(){
    return(
        <div>
            <Header/>
            <img src={Picture} className="missingGrade-pic"/>
            <h1>
                Missing Grade
            </h1>
            <h4>
                Can't find your grade fill the forms below:
            </h4>
            <form className="missingGrade">
                 <div className="form-group">
                    <label for="student-ID">Student-ID:</label>
                    <input type="text" id="student-ID" name="student-ID" required/>
                </div>
            
                <div className="form-group">
                    <label for="course-name">Course Name:</label>
                    <input type="text" id="course-name" name="course-name" required/>
                </div>
            
                <div className="form-group">
                    <label for="instructor-name">Instructor Name:</label>
                    <input type="text" id="instructor-name" name="instructor-name" required/>
                </div>
                <div className="form-group">
                    <label for="expected-grade"> Expected Grade:</label>
                    <input type="text" id=" expected-grade" name="expected-grade" required/>
                </div>
                
                <div className="form-group">
                    <label for=" explanation-field"> Explanation Field:</label>
                    <textarea id="explanation-field" name="explanation-field" rows="5" required></textarea>
                </div>
            
                <button type="submit">Submit</button>
            </form>
            <br />
            <Footer/>
        </div>
    )

}