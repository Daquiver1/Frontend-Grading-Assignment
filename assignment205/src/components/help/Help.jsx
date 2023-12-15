import React, {useState} from "react";
import './help.css'
import faq from "./faq";

const Help = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <>
        <h5>FAQS</h5>
        <h3>Frequently Asked Questions</h3>
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? "content show" : 'content'}>
                            {item.info}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
const data = [
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    },
    {
        question : "What is this site for?",
        info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
    }
]
export default Help