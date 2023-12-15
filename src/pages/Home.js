import React from "react";
import "./Home.css"; // Import the CSS file
import Dmage from '../images/3.jpg'
import Tmage from '../images/1.jpg'
import fmage from '../images/7.jpeg'
import Amage from '../images/8.jpeg'


export const Home = () => {
  return (
    <div className="container">
      <h1>STUDEDNTS GRADING PORTAL</h1>

      <p className="m-p">
        Welcome to the Student Grading System! This system helps in managing and
        tracking student grades and performance.
      </p>
      <div>
      <img className="MainI" src={fmage} alt='fmage' /> <img className="MainI" src={Amage} alt='fmage' />


      <h2>Key Features:</h2>
      <ul>
        <li>Record and Manage Grades: Easily input and organize student grades.</li>
        <li>Analyze Performance: Assess student performance through data analysis.</li>
        <li>Generate Reports: Create comprehensive reports for students or classes.</li>
        <li>Monitor Progress: Keep track of student progress over time.</li>
        <li>Security and Access Control: Ensure data security and manage access.</li>
      </ul>
      <img className="MainI" src={Tmage} alt='Dmage' />    <img className="MainI" src={Dmage} alt='Dmage' />
      </div>

      <h2>Usage:</h2>
      <p className="petr">
        This system provides a user-friendly interface to input, manage, and
        analyze student grades. Teachers or administrators can log in, view student
        data, input grades, generate reports, and monitor student progress.
      </p>
    </div>
  );
};