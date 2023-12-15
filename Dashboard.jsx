

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const courses = [
  { id: 1, title: 'Introduction to Computer Science', instructor: 'MR Aziz' },
  { id: 2, title: 'COMPUTER ORGANIZATION AND ARCHITECTURE', instructor: 'Mr Boakye' },
  { id: 3, title: 'Web Development Fundamentals', instructor: 'Mr Soli' }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="jumbotron text-center">
        <h1 className="display-4">Computer Science Courses Dashboard</h1>
        <p className="lead">Explore the world of computer science with our diverse courses.</p>
      </div>
      <div className="container">
        <div className="row">
          {courses.map(course => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">Instructor: {course.instructor}</p>
                  <a href="" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard
