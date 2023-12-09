import React, { useEffect } from "react";
import "../Styles/Dashboard.css";

export const Dashboard = () => {
 useEffect(()=>{
  alert("There is no grade for Academic Writind II")
 });
  return (
    <div className="d-container">
      <div className="d-grades">
        <h2 className="sem">Level 100 - 2nd Semester</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DCIT102 COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS </td>
              <td>A</td>
            </tr>
            <tr>
              <td>DCIT104 PROGRAMMING FUNDAMENTALS </td>
              <td>A</td>
            </tr>
            <tr>
              <td>MATH122 CALCULUS I</td>
              <td>A</td>
            </tr>
            <tr>
              <td>MATH126 ALGEBRA AND GEOMETRY </td>
              <td>A</td>
            </tr>
            <tr>
              <td>STAT112 INTRODUCTION TO STATISTICS AND PROBABILITY II </td>
              <td>A</td>
            </tr>
            <tr>
              <td>UGRC110 ACADEMIC WRITING I</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
