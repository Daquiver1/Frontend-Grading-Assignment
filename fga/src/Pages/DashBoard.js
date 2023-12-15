import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PageStyles/DashBoard.css";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";


const Gradecard= ({coursename, grade}) => {

    return(
        <div>
            <div className="grade-card">
                <h3>{coursename}</h3>
                <p>{grade}</p>
                
            </div>
            <br/>
        </div>
    )
}

const Content = () =>{
    return (
        <div className="below">
            <p>A detailed statement of your academic record is available 
            <Link to = "/Pages/Grades"> here. </Link>
            </p>
            <p>Feel free to report any missing grades to us for an updated version of your academic record. Report any missing grades
                <Link to = "/Pages/MissingGradeReport"> here</Link>
            </p>
            </div>
    )
}



const DASHBOARD = () => {
    return (
        <>
            <div className="gradebody">
            <div className="grade-section">
            <h2>Welcome, Student</h2>
            <Content />

                <div className="notifications">
                    <h4>NOTIFICATIONS</h4>
                    <p>Your DCIT207 missing grade will be added to your dashboard by next week</p>
                </div>
                <div className="left">
                    <Gradecard coursename="DCIT201" grade="A"/>
                    <Gradecard coursename="DCIT203" grade="A"/>
                    <Gradecard coursename="DCIT205" grade="A"/>
                </div>    

                <div className="right">    
                    <Gradecard coursename="DCIT209" grade="A"/>
                    <Gradecard coursename="MATH223" grade="A"/>
                    <Gradecard coursename="CBAS210" grade="A"/>
                </div>
                </div>

            
            </div>
        </>
    )
}



const Dashboard = () => {
    return (
        <>
            <Header />
            <SideNav />
            <DASHBOARD />
            <Footer />
        </>
    );
}

export default Dashboard;
