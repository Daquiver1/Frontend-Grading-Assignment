import React from "react";
import Footer from "../components/footer/footer";
import "./main.css";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <img src="University_of_Ghana.png" className="logo"></img>
      </div>
            <div className="text">
                <p>Welcome to our React-based web application designed to address the challenge many students face when certain grades and accomplishments are not officially recorded. This platform serves as a comprehensive solution for students seeking to meticulously track and report academic progress beyond what's captured in official academic profiles.</p>
            </div>

            <div className="subheader">
                <h2>Purpose</h2>
            </div>
            <hr />
            <div className="text">
                <p>The purpose of our web application is to empower students with a tool that facilitates the management and documentation of academic achievements that may fall out of the scope of traditional grading systems. This includes but is not limited to extracurricular projects, additional coursework, and workshop participation. By offering a user-friendly interface and robust functionality, our application aims to streamline the process of maintaining a complete and accurate record of academic accomplishments.<br /><br />This tool not only provide students with an organized means of tracking their academic journey but also serves as a reliable resource for presenting a comprehensive academic profile to potential employers, academic institutions, or scholarship committees. Our mission is to enable students to showcase their full range of skills and achievements, ensuring that their academic story is presented accurately and professionally. Welcome to a smarter approach to managing academic progress.</p>
            </div>
            <div>
            <Footer />
            </div>
    </div>
  )
}

export default Home;