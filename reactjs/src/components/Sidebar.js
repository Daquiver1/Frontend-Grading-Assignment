import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { GrDocumentMissing } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineLiveHelp } from "react-icons/md";
import {
    FaTh,
    FaBars,
    FaRegChartBar,
   
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon: <IoHome />
        },
        {
            path:"/LogIn",
            name:"Log In",
            icon:<IoIosLogIn />
        },
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/GradeReport",
            name:"Grade Report",
            icon:<FaRegChartBar/>
        },
        {
            path:"/MissingGrades",
            name:"Missing Grade",
            icon:<GrDocumentMissing />
        },
        {
            path:"/Contact",
            name:"Contact",
            icon:<IoIosContact />
        },
        {
            path:"/HelpandSupport",
            name:"Help Support",
            icon: <MdOutlineLiveHelp />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">UG</h1>
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
