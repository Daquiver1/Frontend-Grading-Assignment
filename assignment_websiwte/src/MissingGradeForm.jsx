import React from "react";
import './MissingGradeForm.css'
import Header from "./Header";
import Footer from "./footer";

export default function MissingGradeForm(){
    return(
        <>
        <Header/>
        <div className="missing_grade_form_container">
            <div id="hed">
                <h3>MISSING GRADE FORM</h3>
            </div>
        <form action="">
                <h6>COURSE TITLE:</h6>
                <input type="text"  className="missing_input_text"/>
                <br />
                <br />

                <h6>INSTRUCTOR NAME:</h6>
                <input type="text" className="missing_input_text" />
                <br />
                <br />

                <h6>EXPECTED GRADE:</h6>
                <input type="text" className="missing_input_text" />
                <br />
                <br />

                <h6>EXPLANATION:</h6>
                <input type="text"  className="missing_input_text" id="explanation"/>
                <br />
                <br />

                <button className="submit">Submit</button>
            </form>

        </div>
          <Footer/>
        </>

    )

}