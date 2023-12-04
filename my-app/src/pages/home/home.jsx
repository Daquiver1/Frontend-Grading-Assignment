import React from "react";
import "./home.css"
function Home() {
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <p>Welcome to the student grade report system</p>
            <p>Report any missing grades by going to the missing 
                grades menu.
            </p>
            <p>Visit Dashboard for an overview of grades and check for 
                any missing grades
            </p>
            <p>Login in to view current grades</p>
            <p>You may contaact instrcutors regarding grade reports</p>
            <p>For more informaition see the help section or
                fill out the contact form for technical support
            </p>
        </div>
    )
}

export default Home;