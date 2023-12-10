import React from "react"
export default function HomeBody() {
   
    return(
    <>
    <div class="container card text-bg-dark " id="homebodybackground">
        <h1 className="border rounded text-center">WELCOME TO THE MISSING GRADE SYSTEM HOMEPAGE</h1>
        <h4 className="text-center">Your Grades Are Our Concern</h4>
        
        <h4 class="text-center"> Thank You For Being Here.</h4>
        <h3 class="text-center">To Proceed Please Login Your Account.</h3>
        
        
        <div className="container" id="SignUp-LogIn">
            <a className="btn btn-primary" id="Login-btn" href="/LoginPage" role="button">LOGIN</a>
        </div> 
    </div>

    </>
    )
    
    
}
