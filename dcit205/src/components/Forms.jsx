import React from 'react'
import Navbar from "./Navbar";
import "./form.css"
import { useState } from 'react'

const Forms = () => {

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
        <div>
            <Navbar />
        </div>
        <form className='forms' method='post' onSubmit={handleSubmit}>
            <h1>Report Missing Grades</h1>
            <h3>Course name: </h3>
            <input type='text' name='name' onChange={handleChange} value={data.name} id='' placeholder='ex: DCIT205' required />
            <h3> Instructor name: </h3>
            <input type='text' name='instructorName' onChange={handleChange} id='' value={data.instructorName} placeholder='ex: Mark Atta Mensah' required />
            <h3> Expected Grade: </h3>
            <input type='text' name='grade' id='' onChange={handleChange} value={data.grade} placeholder='ex: A' required />
            <h3> Explanation field: </h3>
            <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Type here...' required />
            <button type='submit'> Send </button>
        </form>
        <footer>
            <p>&copy; 2023 Our Website. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Forms
