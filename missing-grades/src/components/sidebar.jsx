import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogInSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbReport } from "react-icons/tb";
import { GrDocumentMissing } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineHelpOutline } from "react-icons/md";
import { TbLayoutNavbar } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

const sidebar = ({children}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
  const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "landingpage",
      icon: <FaHome />
    },
    {
      path: "/loginpage",
      name: "loginpage",
      icon: <IoLogInSharp />
    },
    {
      path: "/dashboard",
      name: "dashboard",  
      icon: <RxDashboard />
    },
    {
      path: "/gradereport",
      name: "gradereport",
      icon: <TbReport />
    },
    {
      path: "/missinggrade",
      name: "missinggrade",
      icon: <GrDocumentMissing />
    },
    {
      path: "/contact",
      name: "contact",
      icon: <RiContactsFill />
    },
    {
      path: "/help",
      name: "help",
      icon: <MdOutlineHelpOutline />
    }
  ];


      return (
        <div className="container">
          <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
              <h1  style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
              <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
              <TbLayoutNavbar onClick={toggle} />
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

  export default sidebar;

