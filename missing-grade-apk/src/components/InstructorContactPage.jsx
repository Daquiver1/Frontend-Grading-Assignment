import React from 'react'
import './InstructorContactPage.css'
import Navbar from './Navbar'
import Footer from './footer'

const InstructorContactPage = () => {
 const lecturers = [
    { name: 'Mr Michael Soli', email: 'lecturer1@phytomail.com', phone: '+777666553' },
    { name: 'Toji Fushiguro', email: 'jjk@phytomail.com', phone: '+222666999' },
    { name: 'Meereleona Asantewaa', email: 'bbc@phytomail.com', phone: '+3567463870' },
    { name: 'Toshinori Yagi', email: 'mhasucks@phytomail.com', phone: '+21234567544' },
    { name: 'Luffy Gear 5', email: 'monkeydluffy5@phytomail.com', phone: '+2339156767' },
    { name: 'Jessica', email: 'SNKDordoye@phytomail.com', phone: '+2339156969' },
 ]

 const sendEmail = () => {
    alert('Email sent successfully!')
 }

 return (
    <div>
        <Navbar/>
    <div className="instructor-contact-page">
      <h1>List of Instructors</h1>
      <div className="lecturers-container">
        {lecturers.map((lecturer, index) => (
          <div className="lecturer-box" key={index}>
            <h2>{lecturer.name}</h2>
            <p>Email: {lecturer.email}</p>
            <p>Phone: {lecturer.phone}</p>
            <button onClick={sendEmail}>Send Email</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
 )
}

export default InstructorContactPage