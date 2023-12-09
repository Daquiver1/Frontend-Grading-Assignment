import React from "react";
import './faq.css'
import {useState} from 'react'
const Faq = () => {
    const [ Selected, setSelected ] = useState(null)
    const toggle = (i) => {
if (Selected === i) {
    return setSelected(null)

}
setSelected(i)
    }
    return(
        <div className="container">
<div className="accordian">FAQ</div>

{data.map((item, i) => (
<div className="item">
    <div className="title" onClick={() => toggle(i)}>
<p>{item.Question}</p>
<span>{Selected === i?'▼': '▲'}</span>
    </div>
    <div className={Selected === i?'content show': 'content'}>{item.Answer}</div>
</div>
)) }
        </div>
    )
} 
const data = [
    {
        Question: 'How do I report a missing grade on the website?',
        Answer:'To report a missing grade, log in to your account and navigate to the "Grades" or "Academic Records" section. Look for an option like "Report Missing Grades" or a similar feature, and follow the provided instructions'
    },

    { Question: 'What information do I need to provide when reporting a missing grade?',
      Answer:"When reporting a missing grade, be prepared to provide details such as the course name, instructor's name, and any other relevant information that can help in the resolution process. Screenshots or attachments may also be useful"
    },

    { Question:"Is there a specific timeframe for reporting missing grades?",
      Answer:"We recommend reporting missing grades as soon as possible. However, there may be deadlines set by your educational institution or specific courses, so be sure to check any provided guidelines for reporting missing grades."
    },
    {Question:"What should I do if I suspect an error in my grade?",
    Answer:"If you suspect an error in your grade, first double-check the information you have. If you still believe there is an issue, report it using the designated process on the website. Make sure to provide a clear explanation of the discrepancy."
    },
{ Question:"How will I be notified once the missing grade issue is resolved?",
  Answer:"You will typically receive an email notification or find an update in your account once the missing grade has been addressed. Check your email regularly, and log in to your account to view any updates on your academic records"
},
{ Question:"What if I cannot find the option to report missing grades on the website?",
  Answer:"If you are unable to locate the reporting feature, check the website's help or support section for guidance. Alternatively, contact your academic advisor or the institution's support team for assistance."
},
{ Question:"Can I report missing grades for past semesters or terms?",
  Answer:"The ability to report missing grades for past semesters may vary. Check the website's policies or contact your institution to inquire about the timeframe for reporting missing grades from previous terms."
},
{ Question:"Are there any alternative methods for reporting missing grades?",
  Answer:"Some institutions may provide alternative methods for reporting missing grades, such as contacting the instructor directly or visiting the academic affairs office. Check with your institution for available options"
},
]
export default Faq;