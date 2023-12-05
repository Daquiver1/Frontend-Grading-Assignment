import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import {BsfillPlayCircleFill} from "react-icons/bs";
 
const About = () => {
  return (
    <div className="about-section-container" >
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Its important to find all missing grades
            </h1>
            <p className="primary-text">
            Welcome to Find A Missing Grade System—an innovative solution reshaping how we handle missing grades. Our mission: create an intuitive platform for students, educators, and institutions to bridge the gap, ensuring every achievement is recognized. Join us in transforming academic transparency and accountability.
            </p>
            <p className="primary-text">
            The Find A Missing Grade System. This system is crafted with the singular goal of transforming the way we address missing grades. Rooted in a commitment to efficiency and fairness, our vision is to establish an intuitive platform that empowers students, educators, and institutions collectively. Join the movement to reshape academic transparency and accountability. Together, let's eliminate the gap between grades and their seekers, ensuring every achievement is duly recognized.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
            </div>
        </div>

    </div>
  )
}

export default About