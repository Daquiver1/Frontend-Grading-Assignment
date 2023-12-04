import React from "react";
import "./dasboard.css"

function Dashboard() {
    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <h3>Academic Year <span id="year">2023</span></h3>
            <div className="current-grades">
                <table className="dash-grade">
                    <tr>
                        <td>COURSE</td>
                        <td>GRADES</td>
                    </tr>
                    <tr>
                        <td>DCIT 201</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>DCIT 203</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>DCIT 205</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>DCIT 207</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>UGRC 210</td>
                        <td>N/A</td>
                    </tr>
                </table>
            </div>
            <div id="missing">
                <h4>Missing Grades</h4>
                <p>No missing grades!</p>
            </div>
        </div>
    )
}

export default Dashboard