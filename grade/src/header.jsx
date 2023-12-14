import React from "react";
import './header.css'
import back_img from './comScience_logo.png'
import { Link,Route,Routes } from "react-router-dom";
import Login from "./login";
import Grade from "./grade";
import Dashboard from "./dashboard";
import Contact from './contact';
import Homepage from './homepage';
import Support from "./support";
import MissingGrade from "./missingGrade"
export default function Header(){
    return(<div>
        <nav className="header">
            <img className="nav-logo"  src={back_img}/>
            <ul className="nav-items">
                <li><Link to='/homepage'>Home</Link></li>
                <li><Link to='/login'>log in</Link> </li>
                <li><Link to='/dashboard'>Dashboard </Link></li>                 
                <li><Link to='/grade'>Grade</Link></li>             
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/support'> Help</Link></li>
                <li><Link to='/missingGrade'> Missing Grade</Link></li>
            </ul>
            
        </nav>
        <Routes>
            <Route path="/homepage" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/grade" element={<Grade/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/missingGrade" element={<MissingGrade/>}/>





        </Routes>

        </div>
    )    
}