import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HelpandSupport() {
 const [email, setEmail] = useState('')
 const [message, setMessage] = useState('')
 const [response, setResponse] = useState('')

 const handleSubmit = (e) => {
    e.preventDefault()
    setResponse('Submitted successfully! Our support team will contact you soon.')
 }

 return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>FAQs</h1>
        <ul>
          <li>FAQ 1</li>
          <li>FAQ 2</li>
          <li>FAQ 3</li>
        </ul>

        <h2>Support Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {response && <p className="mt-3">{response}</p>}
      </div>
      <Footer />
    </div>
 )
}
 
