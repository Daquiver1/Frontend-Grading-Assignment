import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import ProfilePic from '../profilepic.png';





function Dashboard () {
    const Dropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };

        return (
            <div className="drop-down-menu">
                <div className="profile-img" />
                <div className="nav-buttons">
                    <button className="nav-button">Dashboard</button>
                    <Link to="/grades"><button className="nav-button">Grades</button></Link>
                    <button className="nav-button">Contact Instructor</button>
                    <button className="nav-button">Help</button>
                </div>
            </div>

        );

    };

    //Returning the date to the date display session
    const [dateDisplay, setDateDisplay] = useState('');

    useEffect(() => {
        let dateObject = new Date();
        let day = dateObject.getDate();
        let month = dateObject.getMonth() + 1;
        let year = dateObject.getFullYear();
        
        const formattedDate = `${day}th / ${month} / ${year}`
        setDateDisplay(formattedDate);
    }, []);



    return(
        <div className="dashboard">
            <div className="tab-2">
                <div className="tab-2-left">
                    <div className="greeting-and-time">
                        <h1>Welcome back, DAVID</h1>
                        <p id="date-display">{dateDisplay}</p>
                        <h2>QUICK OVERVIEW</h2>
                    </div>
                    <div className="activity-tabs">
                        <div className="activity-tab">
                            <h1>2.9</h1>
                            <p>CGPA</p>
                        </div>
                        <div className="activity-tab">
                            <h1>18</h1>
                            <p>Courses Taken</p>
                        </div>
                        <div className="activity-tab">
                            <h1>54</h1>
                            <p>Hours Spent</p>
                        </div>
                        <div className="activity-tab">
                            <h1>3</h1>
                            <p>Missing Grades</p>
                        </div>
                        <div className="activity-tab">
                            <h1>91%</h1>
                            <p>Attendance Rate</p>
                        </div>
                        <div className="activity-tab">
                            <h1>7</h1>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="events">
                        <h2>Missing Grade Alerts</h2>
                        <div className="events-cluster">
                            <div className="event">
                                <p>STAT 112- STATS & PROB II</p>
                                <Link to="/missing-grade" className="button17">Report This</Link>
                            </div>
                            <div className="event">
                                <p>MATH 122- CALCULUS I</p>
                                <Link to="/missing-grade" className="button17">Report This</Link>
                            </div>
                            <div className="event">
                                <p>UGRC 110- ACADEMIC WRITING I</p>
                                <Link to="/missing-grade" className="button17">Report This</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-2-right">
                <img src={ProfilePic} alt="User Profile" className="user-profile-picture" />
                    <h2 className="card-title">Semester Courses</h2>
                    <div className="course-card">
                        <p>DCIT 201- Programming I</p>
                        <i class="fi fi-rr-book"></i>
                    </div>
                    <div className="course-card">
                        <p>DCIT 203- Digital and Logic Systems</p>
                        <i class="fi fi-rr-book"></i>
                    </div>
                    <div className="course-card">
                        <p>DCIT 205- Multimedia And Web Design</p>
                        <i class="fi fi-rr-book"></i>
                    </div>
                    <div className="course-card">
                        <p>DCIT 207- Computer Organization & Architecture</p>
                        <i class="fi fi-rr-book"></i>
                    </div>
                    <div className="course-card">
                        <p>DCIT 209- E-Business Architecture</p>
                        <i class="fi fi-rr-book"></i>
                    </div>
                    <div className="course-card">
                        <p>CBAS 210- Academic Writing II</p>
                        <i class="fi fi-rr-book"></i>
                    </div>
                    <h2 className="pietitle">Sketch of Courses</h2>
                    <div className="pie-chart-container">
                      <div className="pie-chart"></div>
                      </div>
                      <div>
                      <p className="key1"><b>Key</b></p>
                      <p className="key2">Yellow - Missing Grades</p>
                      <p className="key3">Green - Available Grades</p>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Dashboard;