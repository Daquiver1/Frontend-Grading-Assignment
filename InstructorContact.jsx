import React from 'react'
import { Link } from 'react-router-dom'

function InstructorContact() {
  return (
    <div><h1>If you have any concerns and want to speak to a specific instructor, please fill the form below.</h1>
    <div className='container'>
            <div className='header'>
            <div className='text'>Contact an instructor</div>    
        </div>
        <div className='inputs'>
            <div className='input'>
            <input type="Course name" placeholder='Course name' />
            </div>
            <div className='input'>
            <input type="Instructor" placeholder='Instructor'/>
            </div>
            <div className='input'>
            <input type="Expected grade"  placeholder="Instructor's email"/>
            </div>
            <div className='input'>
            <input type="Further details"  placeholder='Message'/>
            </div>
            <div className='submitcontainer'>
              <Link to= '/response'><div className='submit'>Submit</div></Link>
            </div>  
        </div>
    </div>
    </div>
  )
}

export default InstructorContact