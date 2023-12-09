import React, { useState } from "react";
import './technical.css'

const Technical = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",    email: "",    studentID: "",    courseName: "",    instructorName: "",    description: "", });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log("Form submitted:", formData);
    // Clear form fields after submission
    setFormData({  name: "",  email: "", studentID: "", courseName: "", instructorName: "",  description: "", });
  };

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Contact Technical Support</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Your Email:</label>
        <input type="email"id="email"name="email" value={formData.email} onChange={handleChange} required/>

        <label htmlFor="studentID">Student ID:</label>
        <input type="text"id="studentID"name="studentID"value={formData.studentID}onChange={handleChange}required/>

        <label htmlFor="courseName">Course Name:</label>
        <input type="text" id="courseName" name="courseName" value={formData.courseName}onChange={handleChange}required/>

        <label htmlFor="courseID">course ID:</label>
        <input type="text"id="courseID"name="courseID"value={formData.studentID}onChange={handleChange}required/>

        <label htmlFor="instructorName">Instructor Name:</label>
        <input type="text" id="instructorName" name="instructorName" value={formData.instructorName} onChange={handleChange} required />

        <label htmlFor="description">Issue Description:</label>
        <textarea id="description" name="description" value={formData.description}onChange={handleChange} required ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Technical;
