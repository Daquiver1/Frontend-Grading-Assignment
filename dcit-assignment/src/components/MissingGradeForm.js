import React from 'react'
import Footer from './Footer'
import './MissingGradeForm.css'

const MissingGradeForm = () => {
  return (
    <div>
        <div className="page-body-missing">
            <div className="welcome-missing">
                Missing Grade Form
            </div>
            <div className='section-missing'>
                <form className='missing-grade-form'>
                    <div className='missing-grade-text-box'>
                        <input className='textbox' type='text' placeholder='Course Name'/>
                        <input className='textbox' type='text' placeholder='Instructor Name' />
                        <input className='textbox' type='text' placeholder='Expected Grade' />
                        <textarea className='textarea' placeholder='Explanation field'/>
                        <button className='submit-button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MissingGradeForm