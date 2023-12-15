import React, { Component } from "react";
import logo from '../component/images/logo.jpg'
import "../component/NavbarStyles.css";
class Navbar extends Component{
    state = { clicked: false };
    handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
        <div className="raws">
        <nav>
            <div className="daslogo">
                <img src={logo} alt="logo"/> 
            </div>
    <div class>
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
         <li> <a className="active" href="/">Home</a></li>
         <li> <a href="/Dashboard">Dashboard</a></li>
         <li> <a href="/Grade">Grade</a></li>
         <li> <a href="/Missing">Missing</a></li>
         <li> <a href="/Instructor">Instructors</a></li>
         <li> <a href="/FAQPage">Help</a></li>
         </ul>
    </div>
    <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}> 
        </i>
    </div>
        </nav>
        </div>
        </>
        
    )
}
}

export default Navbar;