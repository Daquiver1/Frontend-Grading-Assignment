import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HelpandSupport() {
 const [faq, setFaq] = useState(0)
 const [message, setMessage] = useState('')

 const faqList = [
    {
      id: 1,
      question: 'What if there is no "Grade Missing" section?',
      answer: 'In that case, you can use the "Grades by Course" section to determine which courses may be missing grades. You can identify the courses by the missing letter grades. For example, if the "Grade Missing" section is empty and there are courses with a mix of "A" and "B" grade, you can conclude that there might be some missing grades for that course.'
    },
    {
      id: 2,
      question: 'How often should I review the "Grade Missing" section?',
      answer: 'The "Grade Missing" section can be a useful tool to identify students who are missing grades and require your attention. To track missing grades, you can manually note the number of missing grades per student and periodically review the list. To take corrective actions, you can contact the students or their parents/guardians to inquire about the missing grades.'
    },
    {
      id: 3,
      question: 'How can I export my calendar data?',
      answer: 'It is recommended to review the "Grade Missing" section on a regular basis, such as once a month or every other week. By doing so, you can effectively monitor the progress of your students and ensure that all the necessary grades are entered and reported.'
    },
 ]

 const handleChange = (e) => {
    setFaq(parseInt(e.target.value))
 }

 const handleMessageChange = (e) => {
    setMessage(e.target.value)
 }

 const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Message submitted:', message)
    setMessage('')
 }

 return (
       <div style={{ backgroundColor: 'gray', height: '800px'}}>
      <Navbar/>
      <h1><u>Help and Support</u></h1>
      <h2>FAQs</h2>
      <select value={faq} onChange={handleChange}>
        <option value="0">Select a FAQ</option>
        {faqList.map(item => (
          <option key={item.id} value={item.id}>
            {item.question}
          </option>
        ))}
      </select>
      <p>{faqList.find(item => item.id === faq)?.answer}</p>
      <h2>Contact Support</h2>
     <b><h3> +233244154314</h3></b>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
          rows="4"
        />
        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
 )
}    <div style={{ backgroundColor: 'greenyellow', height: '600px'}}></div>