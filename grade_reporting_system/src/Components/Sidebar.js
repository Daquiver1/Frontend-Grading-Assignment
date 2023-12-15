import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Sidebar.css';
import CLogo from '../Images/Grade_Guru.png'
import Home from '../Images/Home.png'
import Dashboard from '../Images/Dashboard.png'
import GradeReport from '../Images/GradeReport.png'
import MissingGradeForm from '../Images/MissingGradeForm.png'
import InstuctorContact from '../Images/InstructorContact.png'
import HelpAndSupport from '../Images/HelpAndSupport.png'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">
                <Link to="/home">
                    <img src={CLogo} alt="Logo" />
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/home">
                    <div className="sidebar-link">
                        <img src={Home} alt="home" />
                        <div className="link-text">Home</div>
                    </div>
                </Link>
                <Link to="/dashboard">
                    <div className="sidebar-link">
                        <img src={Dashboard} alt="dashboard" />
                        <div className="link-text">Dashboard</div>
                    </div>
                </Link>
                <Link to="/grade-report">
                    <div className="sidebar-link">
                        <img src={GradeReport} alt="grade report" />
                        <div className="link-text">Grade Report</div>
                    </div>
                </Link>
                <Link to="/missing-grade-form">
                    <div className="sidebar-link">
                        <img src={MissingGradeForm} alt="missing grade form" />
                        <div className="link-text">Missing Grade Form</div>
                    </div>
                </Link>
                <Link to="/instructor-contact">
                    <div className="sidebar-link">
                        <img src={InstuctorContact} alt="instructor contact" />
                        <div className="link-text">Instructor Contact</div>
                    </div>
                </Link>
                <Link to="/Help-support">
                    <div className="sidebar-link">
                        <img src={HelpAndSupport} alt="help & support" />
                        <div className="link-text">Help & Support</div>
                    </div>
                </Link>
            </nav>
            <div className="settings">
                <Link to="/settings" className="cust">Settings</Link>
                <Link to="/"><button>Logout</button></Link>
            </div>
            <footer className="footer">
                <p>© 2023 Grade Guru. All rights reserved.</p>
            </footer>
        </aside>
    );
};

export default Sidebar;
