import React from 'react'
import '../styles/MissingGrade.css'

function MissingGrade() {
  return (
    <div className='complaint-form'>
        <h1>MissingGrade Form</h1>
        <form action='#' method='post'>
            
            <input type='text' name='coursename' placeholder='Course Name' autoComplete='off'required/>
            <input type='text' name='instructorname' placeholder='Instructor Name'autoComplete='off'required/>
            <input type='text' name='expectedgrade' placeholder='Expected Grade'autoComplete='off'required/>
            <textarea rows={5} cols={60} name='complaint' placeholder='Complaint'autoComplete='off'required/>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default MissingGrade
