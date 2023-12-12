import React, { useState } from 'react';
import "./styles/Dashboard.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    email: '',
    date: '',
    education: '',
    organization: '',
    position: '',
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData.interests, value] : prevData.interests.filter(item => item !== value)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using formData
    console.log('Form submitted:', formData);
  };

  return (
    <div className="col-2">
      <img src="./images/under_grad_main.jpg" alt="Undergraduate Main" />

      <form onSubmit={handleSubmit}>
        <h1>Short Course Registration Form</h1>
        <p>
          Please fill this form to register for short courses organized by the University of Ghana Computer Science Department
        </p>

        <fieldset>
          <legend>
            <span className="number">1</span> Your Basic Info
          </legend>

          <label htmlFor="surname"></label>
          <input type="text" id="surname" placeholder="Surname here" name="surname" onChange={handleChange} />

          <label htmlFor="firstName"></label>
          <input type="text" id="firstName" placeholder="First name here" name="firstName" onChange={handleChange} />

          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange} />

          <input type="date" id="date" name="date" onChange={handleChange} />
        </fieldset>

        {/* Other fieldsets go here... */}

        <fieldset>
          <legend>
            <span className="number">4</span> Course Selection
          </legend>
          <label></label>
          <input
            type="checkbox"
            id="development"
            value="Microsoft SQL Server Database Administration (₵ 995)"
            name="interests"
            onChange={handleChange}
          />
          <label className="light" htmlFor="development">
            Microsoft SQL Server Database Administration (₵ 995)
          </label>
          {/* Add other checkboxes similarly */}
        </fieldset>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Dashboard;
