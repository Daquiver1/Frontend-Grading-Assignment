import React from "react";
import backgound1 from "./img/background.jpg";



const About=()=>{
    return(
    <div>
        <div
        className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}
        >
            <h3 className="ui header"></h3>
            <p className="welcome">
                <h2> About Us</h2>
                At GradeTracker, we understand that accurate and timely grade reporting is crucial for the success of students, educators, and institutions alike.
                Our missing grade report system is designed with a commitment to excellence in education, aiming to streamline and enhance the grading process.
            </p>
            <p className="welcome">
                <h2>Our  Mission</h2>
                We are on a mission to revolutionize the way missing grades are handled, providing a seamless 
                solution that empowers educators and students with the information they need when they need it
            </p>

        </div>
        <img src={backgound1} className="App-background"/>
            
        </div>
        
    )
}

export default About; 