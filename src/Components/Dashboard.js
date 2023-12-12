import "./dashboard.css"
import { useEffect, useState } from "react";
import GradeReport from "./Grade-report";
import MissingGrade from "./Missinggrade";
import ContactInstructor from "./Contact-instructor";
import Faq from "./Faq";

const Dashboard = () => {
    const [page, setPage] = useState("dashboard")
    return ( 
        <div className="Dashboard">
        <div className="Navbar">
            <div className="Logo">
                <span>
                    System Report
                </span>
            </div>
            <div className="Navlinks">
                <li onClick={() => {
                    setPage("dashboard")
                }}>Dashboard</li>
                <li onClick={() => {
                    setPage("grade-report")
                }}>Grade Report</li>
                <li onClick={() => {
                    setPage("missing-grade")
                }}>Missing Grades</li>
                <li onClick={() => {
                    setPage("contact-instructor")
                }}>Contact Instructor</li>
                <li onClick={() => {
                    setPage("faq")
                }}>FAQ</li>
            </div>
            <div className="User">
                <span>Q</span>
            </div>
        </div>
            <div className="Outlet">
                {
                page === "dashboard" ? 
                <div className="Dashboard">
                    <div className="first-line-content">
                        <div className="notification">You have 2 missing grades</div>
                        <div className="card gpa-card">
                            <span>GPA:</span>
                            <span>4.0</span>
                        </div>
                        <div className="card missing-grade-card">
                            <span>Missing Grade:</span>
                            <span>2</span>
                        </div>
                        <div className="card attendance-card">
                            <span>Attendance 2023:</span>
                            <span>93/100</span>
                        </div>
                        <div className="card assignment-card">
                            <span>Assignments Done:</span>
                            <span>25/28</span>
                        </div>
                    </div>
                    <div className="second-line-content">
                        
                    </div>
                </div> : (
                    page === "grade-report" ? <GradeReport/> : (
                        page === "missing-grade" ? <MissingGrade/> : (
                            page === "contact-instructor" ? <ContactInstructor/> : (
                                page === "faq" ? <Faq/> : null
                            )
                        )
                    )
                )
                }
            </div>
        </div>
     );
}
 
export default Dashboard;