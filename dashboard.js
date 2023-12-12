import React, { useState, useEffect } from "react";
import "./dashboard.css";

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
                <div className="profile-img" />
                <div className="nav-buttons">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">My Courses</button>
                    <button className="nav-button">Grades</button>
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
                            <h1>4.0</h1>
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
                            <div className="event"></div>
                            <div className="event"></div>
                            <div className="event"></div>
                        </div>
                    </div>
                </div>
                <div className="tab-2-right">
                    <h2 className="card-title">Courses This Semester</h2>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                    <div className="course-card"></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;