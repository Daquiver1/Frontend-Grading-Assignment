import React from "react";
import "../Styles/HomePage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Background from "../Images/home.avif";

const Home = () => {
  return (
    <div className="Page-content">
      <Navbar />
      <div className="background-image">
        <img src={Background} alt="pic" />
      </div>
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome</h1>
          <p>Welcome to our Gradebook System!</p>
          <p>
            {" "}
            We understand that keeping track of your academic progress is
            crucial, and we're here to assist you in reporting any missing
            grades.
          </p>
          <p>
            {" "}
            Together, let's ensure your academic journey is accurately reflected
            in your records.
          </p>
        </div>

        <div className="home-announcements">
          <h2>Announcements and Notifications</h2>
          <ul>
            <li>
              New Feature: Automatic SMS Reminders for Submitting Missing Grades
            </li>
            <li>Upcoming System Maintenance: 23rd December, 2023</li>
            <li>
              The second Semester Courses have been graded successfully. Good
              Luck{" "}
            </li>
            <li>Dr. Michael Soli wishes you all the best in your Exams</li>
          </ul>
        </div>
        <div className="home-resource-center">
          <h2>Resource Center</h2>
          <p>
            Learn more about submitting missing grade requests, review our
            resolution timeline, and explore our grading policies.
          </p>
          <p>Tutorials on how to submit a missing grade request</p>
          <button>Discover more..</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
