import React from 'react'
import { Link } from 'react-router-dom'


function MissingGrade() {
  return (
    <div className='container'>
            <div className='header'>
            <div className='text'>Report form</div>    
        </div>
        <div className='inputs'>
            <div className='input'>
            <input type="Course name" placeholder='Course name' />
            </div>
            <div className='input'>
               
                <input type="Instructor" placeholder='Instructor'/>
            </div>
            <div className='input'>
            <input type="Expected grade"  placeholder='Expected Grade'/>
            </div>
            <div className='input'>
            <input type="Further details"  placeholder='Further details'/>
            </div>
            <div className='submitcontainer'>
              <Link to= '/response'><div className='submit'>Submit</div></Link>
            </div>  
        </div>
    </div>
  )
}

export default MissingGrade