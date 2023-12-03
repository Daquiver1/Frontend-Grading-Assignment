import React from "react";

const Navbar=()=>{
    return(
        <nav className="ui raised very padded segment">
            <a className="ui real inverted segment">Grade-Tracker</a>
            <div className="ui right floated header">
                <button className="ui button"><a href="/">Home</a></button>
                <button className="ui button"><a href="/">GradeReport</a></button>
                <button className="ui button"><a href="/">Login</a></button>
                <button className="ui button"><a href="/">About</a></button>
                <button className="ui button"><a href="/">Contact</a></button>
                <button className="ui button"><a href="/">Dashboard</a></button>
                <button className="ui button"><a href="/">InstructorContact</a></button>
            
            
            </div>
        
        </nav>
    )
         
}
export default Navbar; 