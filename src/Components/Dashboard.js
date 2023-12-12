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
                    <div className="greet-user">
                        <span className="welcome">Welcome back Afia</span><br/>
                        <span className="programme">Bsc. Bachelor in Computer Science</span>
                    </div>
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
                        <table>
                            <tbody>
                                <tr>
                                    <th colSpan={4}>2023 Academic Records [Level 100]</th>
                                </tr>
                                <tr>
                                    <th colSpan={4}>First Semister</th>
                                </tr>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Credit</th>
                                    <th>Grade</th>
                                    <th>GPT</th>
                                </tr>
                                <tr>
                                    <td>Introduction to Computer Science [DCIT101]</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>12</td>
                                </tr>                            
                                <tr>
                                    <td>Vectors and Geometry [MATH123]</td>
                                    <td>3</td>
                                    <td>B+</td>
                                    <td>11</td>
                                </tr>                            
                                <tr>
                                    <td>Office Productivity tools [DCIT103]</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>12</td>
                                </tr>                            
                                <tr>
                                    <td>Algebra and Trigonometry [MATH121]</td>
                                    <td>3</td>
                                    <td>B</td>
                                    <td>9</td>
                                </tr>                            
                                <tr>
                                    <td>Statistics [STAT111]</td>
                                    <td>3</td>
                                    <td>B+</td>
                                    <td>11</td>
                                </tr>                            
                                <tr>
                                    <td>Critical Thinking [UGRC150]</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <th colSpan={4}>Second Semister</th>
                                </tr>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Credit</th>
                                    <th>Grade</th>
                                    <th>GPT</th>
                                </tr>
                                <tr>
                                    <td>Introduction to Programming I</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>12</td>
                                </tr>                            
                                <tr>
                                    <td>Vectors and Geometry</td>
                                    <td>3</td>
                                    <td>B+</td>
                                    <td>11</td>
                                </tr>                            
                                <tr>
                                    <td>Office Productivity tools</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>12</td>
                                </tr>                            
                                <tr>
                                    <td>Algebra and Trigonometry</td>
                                    <td>3</td>
                                    <td>B</td>
                                    <td>9</td>
                                </tr>                            
                                <tr>
                                    <td>Statistics</td>
                                    <td>3</td>
                                    <td>B+</td>
                                    <td>11</td>
                                </tr>                            
                                <tr>
                                    <td>Critical Thinking</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>12</td>
                                </tr>
                            </tbody>                            
                        </table>
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
            <div className="footer">
                Copyright &copy; Afia. All rights reserved.
            </div>
        </div>
     );
}
 
export default Dashboard;