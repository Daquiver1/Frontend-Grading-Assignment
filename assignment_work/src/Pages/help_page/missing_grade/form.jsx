import React from 'react'
import './form.css';
import { useState } from 'react';

const Form = () => {
    const[data, setData] = useState({Course: "", Instructor: "", Grade: "", Message: ""});
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("Form Submitted Successfully");
    }
  return (
    <div className='styleform'>
      <form method='post' onSubmit={handleSubmit}>
        <h1>Report <span>Here</span></h1>
        <input type='text' name='Course' id='' onChange={handleChange} value={data.Course} placeholder='Enter Course'/>
        <input type='text' name='Instructor' id='' onChange={handleChange} value={data.Instructor} placeholder='Enter Instructor Name'/>
        <input type='text' name='Grade' id='' onChange={handleChange} value={data.Grade} placeholder='Enter Expected Grade'/>
        <textarea name='message' id='' cols={"30"} rows={"10"} onChange={handleChange} value={data.message} placeholder='Type your Message'/>
        <button type='submit'>SEND</button>
      </form>
    </div>
  );
};

export default Form;