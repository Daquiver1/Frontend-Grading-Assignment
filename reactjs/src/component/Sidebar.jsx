import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { GrDocumentMissing } from "react-icons/gr";
import { MdGrading } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import {FaBars,}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome />
        },
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<MdDashboard />
        },
        {
            path:"/LogIn",
            name:"LogIn",
            icon:<CiLogin />
        },
        {
            path:"/MissingGrades",
            name:"Missing Grade",
            icon:<GrDocumentMissing />
        },
        {
            path:"/GradeReport",
            name:"GradeReport",
            icon:<MdGrading />
        },
        {
            path:"/Contact",
            name:"Contact",
            icon:<MdContactPage />        },
        {
            path:"/Help",
            name:"Help & Support",
            icon:<MdLiveHelp />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">UG LEGON</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;