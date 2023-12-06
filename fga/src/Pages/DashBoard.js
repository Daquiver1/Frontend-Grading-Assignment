

import React from "react";
import "../Styles/PageStyles/DashBoard.css";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";


const Dashboard = () => {
    return (
        <>
            <Header />
            <SideNav />
            <div className="grade-section">
                <div className="grade-card">
                    <h3>Course Name 1</h3>
                    <p>Grade: A</p>
                </div>

                <div className="grade-card">
                    <h3>Course Name 2</h3>
                    <p>Grade: B+</p>
                </div>

            {/* Add more grade cards as needed */}
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
