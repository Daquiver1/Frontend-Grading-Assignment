import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
function Dashboard() {
    const [dateDisplay, setDateDisplay] = useState('');

    useEffect(() => {
        let dateObject = new Date();
        let day = dateObject.getDate();
        let month = dateObject.getMonth() + 1;
        let year = dateObject.getFullYear();

        const formattedDate = `${day} / ${month} / ${year}`
        setDateDisplay(formattedDate);
    }, []);

    // Function to simulate missing grades alert
    const handleMissingGradesAlert = () => {
        alert("You have missing grades. Please check your grade reports.");
    };

    return(
        <div className="dashboard">
            <Navbar />
           
            <div className="tab2">
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
                        <h2 className="upcoming">Upcoming Events</h2>
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
                    <div className="course-card" onClick={handleMissingGradesAlert}>
                        <p>Statistics</p>
                        <i className="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card" onClick={handleMissingGradesAlert}>
                        <p>Introduction to computer science</p>
                        <i className="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card" onClick={handleMissingGradesAlert}>
                        <p>Programming 1</p>
                        <i className="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card" onClick={handleMissingGradesAlert}>
                        <p>Data structures and algorithms</p>
                        <i className="fi fi-rs-book-open-cover"></i>
                    </div>
                    <div className="course-card" onClick={handleMissingGradesAlert}>
                        <p>Graded Quiz - Computer Systems</p>
                        <i className="fi fi-rs-book-open-cover"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
