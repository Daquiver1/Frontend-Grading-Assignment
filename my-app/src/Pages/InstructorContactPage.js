import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../Pages/Styles.css'

const InstructorContactPage = () => {
 const [instructors] = useState([
    {
      name: 'MARK ATTAH',
      email: 'mark.attah@email.com',
      phone: '+1-123-456-7890',
    },
    {
      name: 'AZIZ ABDULLAI',
      email: 'aziz.abdullai@email.com',
      phone: '+1-234-567-8901',
    },
    // ...add more instructors
  ])

 const [message, setMessage] = useState('')

 const handleEmail = (e) => {
    e.preventDefault()
    // simulate sending an email
    console.log('Message sent:', message)
 }

 return (
    <div>
      <Navbar />
      <h1>Instructor Contact Information</h1>
      <div>
        {instructors.map((instructor, index) => (
          <div key={index}>
            <h2>{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone}</p>
          </div>
        ))}
      </div>
      <h2>Send an Email to Instructors</h2>
      <form onSubmit={handleEmail}>
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Email</button>
      </form>
      <Footer />
    </div>
 )
}

export default InstructorContactPage
