import "./Mid.css"
import React from 'react'
import filie from "../assets/diary.webp";
import { Link } from "react-router-dom";

const Mid = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="hero-image" src={filie} alt="hero-image" />
        </div>
      <div className="content">
        <h1>VISIT GRADEPOINT HELP DESK ANYTIME</h1>
        <br></br>
        <p>At GradePoint, we acknowledge the crucial role that accurate academic </p>
        <p>records play in your educational experience. We are pleased to introduce </p>
        <p>a powerful tool designed to help you manage and report any missing</p>
        <p>grades. This tool is crafted to ensure that your academic journey remains </p>
        <p>not only smooth but also transparent, providing you with the necessary </p>
        <p>support to navigate your educational path effectively.</p>

        
      </div>
    </div>
  )
}

export default Mid
