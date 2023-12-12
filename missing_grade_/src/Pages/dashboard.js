import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";




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
        
        const formattedDate = `${day} / ${month} / ${year}`
        setDateDisplay(formattedDate);
    }, []);



    return(
        <div className="dashboard">
            <div className="tab-1">
                <h1 className="logo">UG</h1>
                <div className="nav-buttons">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Grades</button>
                    <button className="nav-button">Contact</button>
                    <button className="nav-button">Help</button>
                </div>
            </div>
            <div className="tab-2">
                <div className="tab-2-left">
                    <div className="greeting-and-time">
                        <h1>Welcome back, Keren!</h1>
                        <p id="date-display">{dateDisplay}</p>
                    </div>
                    <div className="activity-tabs">
                        <div className="activity-tab">
                            <h1>2.4</h1>
                            <p>CGPA</p>
                        </div>
                        <div className="activity-tab">
                            <h1>14</h1>
                            <p>Courses Taken</p>
                        </div>
                        <div className="activity-tab">
                            <h1>350</h1>
                            <p>Hours Spent</p>
                        </div>
                    </div>
                    <div className="events">
                        <h2>Upcoming Events</h2>
                        <div className="events-cluster">
                            <div className="event">
                                <p>Graded Quiz - Computer Systems</p>
                                <i class="fi fi-rs-book-open-cover"></i>
                            </div>
                            <div className="event">
                                <p>Project Work - Web Development</p>
                                <i class="fi fi-rs-book-open-cover"></i>
                            </div>
                            <div className="event">
                                <p>Project Work - Statistical Inference</p>
                                <i class="fi fi-rs-book-open-cover"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-2-right">
                    <h2 className="card-title">Courses Taken</h2>
                    <div className="course-card">
                        <p>Statistics</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Introduction to computer science</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Programming 1</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Data structures and algorithms</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Graded Quiz - Computer Systems</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Dashboard;

