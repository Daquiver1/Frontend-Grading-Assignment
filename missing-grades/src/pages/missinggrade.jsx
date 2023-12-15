/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link } from "react-router-dom";
import "./missinggrade.css";
import { useState } from 'react';

const missinggrade = () => {
  const [data, setData] = useState({name: "", instructorName: "",grade: "", message: "" });
  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setData ({...data, [name]: value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      alert(data)
  }


  return (
    <div>
       <form className='forms' method='post' onSubmit={handleSubmit}>
            <h1>Report Missing Grades</h1>
            <h3>Course name: </h3>
            <input type='text' name='name' onChange={handleChange} value={data.name} id='' placeholder='course name' required />
            <h3> Instructor name: </h3>
            <input type='text' name='instructorName' onChange={handleChange} id='' value={data.instructorName} placeholder='name of lecturer'required />
            <h3> Expected Grade: </h3>
            <input type='text' name='grade' id='' onChange={handleChange} value={data.grade} placeholder='eg: B+' required />
            <h3> Explanation field: </h3>
            <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Leave a message ...' required />
            <button type='submit'> Send </button>
        </form>


        <footer>
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>&copy; 2023 University Of Ghana. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default missinggrade;