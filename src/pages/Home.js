// Overview of the system.

// webapp that acts as the front for a "Missing Grade Reporting System". This system is designed to help students track and report grades that are not recorded in their academic profiles. The goal is to create an interactive, user-friendly interface that enables students to view their grades, report missing grades, and communicate with their instructors or academic administration.

// Navigation links to other pages.

import overviewImg from '../assets/images/web-cms-student-portal-main.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            {/*  overview of the system */}
            <div className="home-overview">
                <img src={overviewImg} alt="overview" />
                <h2>Overview</h2>
                <p>
                    This webapp acts as the front for a "Missing Grade Reporting System". 
                    This system is designed to help students track and report grades that are 
                    not recorded in their academic profiles. The goal is to create an interactive, 
                    user-friendly interface that enables students to view their grades, 
                    report missing grades, and communicate with their instructors or 
                    academic administration.
                </p>
            </div> 

            {/*  navigation links to other page and a brief description of each page */}

            <div className="home-links">
                <h2>Navigation</h2>
                <p>
                    This webapp has the following pages:
                </p>
                <ul className="home-links-list">
                    <li className="home-link">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <p>Overview of the student’s current grades. Alerts or notifications for any missing grades.</p>
                    </li>
                    <li className="home-link">
                        <NavLink to="/grades">Grades</NavLink>
                        <p>View all grades for all courses.</p>
                    </li>
                    <li className="home-link">
                        <NavLink to="/login">Login</NavLink>
                        <p>Secure login form for students. (Student ID and PIN) Authentication simulation (no real backend, just a mock-up)</p>
                    </li>
                    <li className="home-link">
                        <NavLink to="/missinggrades">Missing Grades</NavLink>
                        <p>View all missing grades. (This is a mock-up. No real data)</p>
                    </li>
                    <li className="home-link">
                        <NavLink to="/help">Help</NavLink>
                        <p>Help page with contact information for the system administrator.</p>
                    </li>
                    <li className="home-link">
                        <NavLink to="/contactinstructor">Instructor Contact</NavLink>
                        <p>Form for students to contact their instructors.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;