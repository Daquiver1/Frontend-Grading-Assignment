import React, { Component} from "react";
import "./NavbarStyles.css"

class Navbar extends Component{
    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <><nav>
        <h3>
            Missing-Grade Reporting-System
        </h3>
        <div >
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><a href="index.html">Login</a></li>
                <li><a href="index.html">Help and Support</a></li>
            </ul>
        </div>

        <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className=
            {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            
        </div>
        </nav>
        </>
    )
}
}


export default Navbar;