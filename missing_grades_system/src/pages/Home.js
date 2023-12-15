import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="Home-Page">
      <Navbar></Navbar>
      <header>
        <h1>Missing Grade Reporting System</h1>
        <p>Welcome to the system designed to help you track and report missing grades!</p>
      </header>
      <section>
        <h2>Overview</h2>
        <p>
          The Missing Grade Reporting System provides a user-friendly interface to view your grades,
          report missing grades, and communicate with instructors or academic administration.
        </p>
      </section>
      <section>
        <h2>Get Started</h2>
        <p>
          To get started, <Link to="/Login">login</Link>  with your student ID and PIN. Once logged in, you can access your
          dashboard to view current grades, report missing grades, and more.
        </p>
      </section>
    </div>
  );
}

export default Home;
