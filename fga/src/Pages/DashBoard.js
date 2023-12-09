import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PageStyles/DashBoard.css";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";


function Gradecard({coursename, grade})  {

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


const DASHBOARD = () => {
    return (
        <>
            <div className="grade-section">
            <h2>Welcome, Student</h2>

                <div className="left">
                    <Gradecard coursename="DCIT201" grade="A"/>
                    <Gradecard coursename="DCIT203" grade="A"/>
                    <Gradecard coursename="DCIT205" grade="A"/>
                    <Gradecard coursename="DCIT207" grade="A"/>
                </div>    

                <div className="right">    
                    <Gradecard coursename="DCIT209" grade="A"/>
                    <Gradecard coursename="MATH223" grade="A"/>
                    <Gradecard coursename="CBAS210" grade="A"/>
                </div>

            <p>A detailed statement of your academic record is available 
            <Link to = "/Pages/Grades"> here. </Link>
            </p>
            <p>Feel free to report any missing grades to us for an updated version of your academic record. Report any msing grades
                <Link to = "/Pages/MissingGradeReport">here</Link>
            </p>
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
