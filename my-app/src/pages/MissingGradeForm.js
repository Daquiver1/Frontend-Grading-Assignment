import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MissingGradeForm() {
 const [formData, setFormData] = useState({
    courseCode: '',
    subject: '',
    gradeLevel: '',
    term: '',
 })

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
 }

 const handleSubmit = async (e) => {
    e.preventDefault()

   

    alert('Missing grade reported successfully')
 }

 return (    <div style={{ backgroundColor: 'orange', height: '600px'}}>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>
         <b>Course Code:</b>
          <input type="text" name="courseCode" onChange={handleChange} />
        </label>
        <label>
         <b> Subject:</b>
          <input type="text" name="subject" onChange={handleChange} />
        </label>
        <label>
        <b> Grade Level:</b>
          <input type="text" name="gradeLevel" onChange={handleChange} />
        </label>
        <label>
          <b>Term:</b>
          <input type="text" name="term" onChange={handleChange} />
        </label>
        <button type="submit">Report Missing Grade</button>
      </form>
      <Footer />
    </div>
 )
}