import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css"

export const Home = () => {
  return (
    <div className="h-container">
      <div className="info">
        <h1 id="acronymn">G R P S</h1>
        <div className="about">
          <p className="info-paragraph">
            Is a grade reporting sytem that allows University of Ghana students
            to view their grades as well as track and record grades that are not
            recorded in their academic profiles
          </p>
          <button className="button"><Link className="get-started" to="/login">Login here</Link></button>
        </div>
      </div>
      <div className="image">
        <img className="student-img" src={require("../Images/student.png")} alt="" />
      </div>
    </div>
  );
};
