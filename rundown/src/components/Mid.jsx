import "./Mid.css"
import React from 'react'
import Schoolimg from "../assets/school.jpg";
import { Link } from "react-router-dom";

const Mid = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="hero-image" src={Schoolimg} alt="hero-image" />
        </div>
      <div className="content">
        <h1>You are Welcome to GradePoint Help Desk</h1>
        <p>At GradePoint, we understand the importance of
             accurate academic records.
              We present to you a powerful tool to manage and
               report missing grades, ensuring your academic journey 
               remains smooth and transparent.</p>

        <div>
         <Link to="/gradereport" className="btn">Grade Report</Link>
         <Link to="/missinggradepage" className="btn-light">Missing Grade</Link>
        </div>
      </div>
    </div>
  )
}

export default Mid
