import React from 'react'
import '../styles/gradeform.css';

function Gradeform() {
  return (
    <div>
      <div className='formHeader'> MISSING GRADE FORM PAGE</div>
      <form>
        
        <div className='coursediv'>
          <label className='coursename23' for="coursename">Course Name:</label>
          <input className='coursenameform' name="coursename"></input>
        </div>
        <div className='instructordiv'>
          <label className='instructorname' for="instructorname">Instructor Name:</label>
          <input className='instructornameform' name="instructorname"></input>
        </div>
        <div className='expectednamediv'>
          <label className='expectedgrade' for="expectedname">Expected Grade:</label>
          <input className='expectedgradeform' name="expectedname" maxLength={2}></input>
        </div>
        <div className='explanationdiv'>
          <label  className='explanationfield' for="explanationfield">Explanation Field:</label>
          <textarea  className='explanationform' id="explanationfield" name="explanationfield"></textarea>
        </div>
        <div>
        <button className='submitbuttonforgradeform' type='submit'>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default Gradeform