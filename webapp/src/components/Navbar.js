import React from "react";

const Navbar=()=>{
    return(
        <div className="coloring">
        <nav className="ui raised very padded segment">
            <a className="ui real inverted segment">Grade-Tracker</a>
            <div className="ui right floated header">
                <button className="ui button"><a href="/">Home</a></button>
                <button className="ui button"><a href="/GradeReport">GradeReport</a></button>
                <button className="ui button"><a href="/Login">Login</a></button>
                <button className="ui button"><a href="/About">About</a></button>
                <button className="ui button"><a href="/Contact">Contact</a></button>
                <button className="ui button"><a href="/Dashboard">Dashboard</a></button>
                <button className="ui button"><a href="/InstructorContact">InstructorContact</a></button>
            </div>
        </nav>
        </div>
    )  
}
export default Navbar; 