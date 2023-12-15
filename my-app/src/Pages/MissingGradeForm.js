import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MissingGradeForm() {
 const [courseName, setCourseName] = useState('');
 const [studentName, setStudentName] = useState('');
 const [email, setEmail] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here.
    console.log('Course Name:', courseName);
    console.log('Student Name:', studentName);
    console.log('Email:', email);
    console.log('Description:', description);
 };

 return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Report Missing Grade</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
 );
}

export default MissingGradeForm;
