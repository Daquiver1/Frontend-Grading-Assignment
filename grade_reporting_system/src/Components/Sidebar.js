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
                <img src={CLogo} alt="Logo" />
            </div>
            <nav className="nav-links">
                <div className="sidebar-link">
                    <img src={Home} alt="home" />
                    <Link to="/home">Home</Link>
                </div>
                <div className="sidebar-link">
                    <img src={Dashboard} alt="dashboard" />
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="sidebar-link">
                    <img src={GradeReport} alt="grade report" />
                    <Link to="/grade-report">Grade Report</Link>
                </div>
                <div className="sidebar-link">
                    <img src={MissingGradeForm} alt="missing grade form" />
                    <Link to="/missing-grade-form">Missing Grade Form</Link>
                </div>
                <div className="sidebar-link">
                    <img src={InstuctorContact} alt="instructor contact" />
                    <Link to="/instructor-contact">Instructor Contact</Link>
                </div>
                <div className="sidebar-link">
                    <img src={HelpAndSupport} alt="help & support" />
                    <Link to="/help-support">Help & Support</Link>
                </div>
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
