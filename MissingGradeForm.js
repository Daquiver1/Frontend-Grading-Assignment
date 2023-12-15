import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './MissingGradeForm.css'

const MissingGradeForm = () => {
  return (
    <div>
        <Header/>
        <div className="page-body">
            <div className="welcome">
                Missing Grade Form
            </div>
            <section>
                <form className='missing-grade-form'>
                    <div className='missing-grade-text-box'>
                        <input className='textbox' type='text' placeholder='Student ID'/>
                        <input className='textbox' type='text' placeholder='Lecturer Name' />
                        <input className='textbox' type='text' placeholder='Course Name/Code' />
                        <textarea className='textarea' placeholder='Explanation'/>
                        <button className='submit-button'>Submit</button>
                    </div>
                </form>
            </section>
        </div>
        <Footer/>
    </div>
  )
}

export default MissingGradeForm