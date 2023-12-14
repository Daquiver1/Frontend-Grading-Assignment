import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css';
import logo from './images/gaduation_picture.jpg';

const LandingPage = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const response = await fetch('https://api.example.com/featured-courses');
        const data = await response.json();
        setFeaturedCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containe mx-auto mt-8">
      <div className="text-image">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Grade System</h1>

        <h2 className="text-2xl font-bold mb-2">Featured Courses</h2>
        <ul>
          {featuredCourses.map((course, index) => (
            <li key={index}>
              {course.name} - {course.instructor}
            </li>
          ))}
        </ul>

        <p>Have you encountered a missing grade on your University of Ghana transcript? Don't worry, we're here to help.Report the missing grade. We will investigate the issue and get back to you as soon as possible.</p>

        {/* Additional Content */}
        <p>Explore our courses and enhance your academic journey.</p>
        <Link to="/login"> {/* Add Link to the login page */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
        </Link>
      </div>

      <div className="text-image">
        <img src={logo} alt='School logo'  />
      </div>
    </div>
  );
};

export default LandingPage;
