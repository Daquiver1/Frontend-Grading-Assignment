import React, {props} from "react"
function Instructor (props){
    return(
        <main>
            <div className="instruct">
                <p>Course Code: {props.code}</p>
                <p>Course Title: {props.title}</p>
                <p>Instructor Name: {props.instructor}</p>
                <p>Phone: {props.phone}</p>
                <p>Instructor Office: {props.office}</p>
                <p>Instructor Office Days: {props.hours}</p>
                <a href="mailto:#"><button>Send a mail</button></a>
            </div>
        </main>
    )

}
export default Instructor