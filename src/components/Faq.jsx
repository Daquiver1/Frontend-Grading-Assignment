import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Faq() {

    const faqs = [
        {
          question: 'What should I do if my grades are missing from the report?',
          answer: 'If your grades are missing, please first check with your instructor to ensure they have submitted the grades. If the issue persists, contact the school administration or registrar for further assistance.'
        },
        {
          question: 'How long does it take for grades to be reported?',
          answer: "The time it takes for grades to be reported can vary. Typically, instructors are required to submit grades within a certain timeframe after the end of the term. If it's been longer than expected, it's advisable to follow up with the relevant academic department or administration."
        },
        {
          question: 'Can I request a grade review if my grades are missing?',
          answer: 'Yes, if you believe there is an error in your grades or they are missing, you can request a grade review. Contact your instructor or the academic department to initiate the review process.'
        },
        {
          question: 'Is there a deadline for reporting missing grades?',
          answer: "Schools usually have policies regarding grade reporting deadlines. If you notice missing grades, it's important to address the issue promptly to ensure it can be resolved within the specified timeframe. Check with your school\'s administration for specific deadlines."
        },
        {
          question: 'What information should I provide when reporting missing grades?',
          answer: 'When reporting missing grades, provide your full name, student ID, course details, and any relevant information about the assessments in question. This will help expedite the resolution process.'
        },
        {
          question: 'Can missing grades affect my academic standing?',
          answer: "Yes, missing grades can potentially impact your academic standing. It's crucial to address the issue promptly to avoid any negative consequences. Contact your academic advisor or the registrar\'s office for guidance."
        },
        {
          question: 'What should I do if there is a discrepancy in my reported grades?',
          answer: 'If you find a discrepancy in your reported grades, contact your instructor to discuss the issue. Provide any supporting documentation, such as graded assignments or exams, to help resolve the discrepancy. If needed, you can request a formal grade appeal process.'
        },
        
      ];
      
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white p-6 my-2 rounded shadow">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
            <div className="text-lg font-semibold text-blue-950">{faq.question}</div>
            <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} className="text-gray-600 text-xl" />
          </div>
          {activeIndex === index && <div className="mt-4 text-gray-500 p-2 w-[min(100%,800px)]">{faq.answer}</div>}
        </div>
      ))}
    </div>
  )
}

export default Faq
