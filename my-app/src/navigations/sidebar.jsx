import React from "react"
import "./sidebar.css"
import { FaHome } from "react-icons/fa"
import { IoLogIn, IoPerson } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { FaElementor } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";


function SideBar({show}) {
    return (
        <nav className={show ? "side-nav active": "side-nav"}>
            <ul>
                <li>
                    <a href="/home">
                        <FaHome className="icon"/>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/login">
                        <IoLogIn className="icon"/>
                        Login
                    </a>
                </li>
                <li>
                    <a href="/dashboard">
                        <MdDashboardCustomize className="icon"/>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/grade">
                        <FaElementor className="icon"/>
                        Grade
                    </a>
                </li>
                <li>
                    <a href="/instructor">
                        <IoPerson className="icon"/>
                        Instructor Contact
                    </a>
                </li>
                <li>
                    <a href="/missingGrade">
                        <FaExclamation className="icon"/>
                        Missing Grade
                    </a>
                </li>
                <li>
                    <a href="/help">
                        <MdOutlineHelp className="icon"/>
                        Help
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar; 