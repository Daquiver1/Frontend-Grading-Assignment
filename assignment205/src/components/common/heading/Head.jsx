import React from 'react'
import './header.css'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container flexSB'>
            <div className="logo">
                    <h1>ACADEMIA</h1>
                    <span>ONLINE EDUCATION AND LEARNING</span>
                </div>
                <div className='social'>
                    <i className='fab fa-facebook icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head