import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Layout.css';
import './about.us.jpg';


const Landing = () => {
  return (
    <div>
      <Layout>
      <h2>Missing Grade Reporting System</h2>
      <p>Welcome to the Missing Grade Reporting System. Track and report missing grades effortlessly.</p><br></br>
      <p>We will adress all your grade issues. folow the right steps and you will be sorted out</p>
      <p>Login to begin</p>
    

      <nav>
       <p> <Link to="/login">Login</Link></p>
      </nav>
      </Layout>
    </div>
  );
};

export default Landing;
