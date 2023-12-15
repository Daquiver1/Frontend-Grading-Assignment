import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard () {
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
                    <Link to="/grades"><button className="nav-button">Grades</button></Link>
                    <Link to="/contact"><button className="nav-button">Contact</button></Link>
                    <Link to="/help"><button className="nav-button">Help</button></Link>
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
                            <h1>3.5</h1>
                            <p>GPA</p>
                        </div>
                        <div className="activity-tab">
                            <h1>10</h1>
                            <p>Courses Taken</p>
                        </div>
                        <div className="activity-tab">
                            <h1>900</h1>
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
                                <p>IA - Statistical Inference</p>
                                <i class="fi fi-rs-book-open-cover"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-2-right">
                    <h2 className="card-title">Courses Taken</h2>
                    <div className="course-card">
                        <p>Critical Thinking and Practical Reasoning</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Algebra and Trigonometry</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Office Productivity Tools</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Introduction to Statistics and Probability</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card">
                        <p>Introduction to Computer Science</p>
                        <i class="fi fi-rs-book-open-cover"></i>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Dashboard;

