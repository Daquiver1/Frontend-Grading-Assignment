import React, {useState} from "react";
import './help.css'
import faq from "./faq";

const Help = () => {
    const accordionData = [
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: true
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        },
        {
            question : "What is this site for?",
            info: "This system would identify courses or assignments where grades haven't been submitted yet. It could be used by administrators to follow up with teachers, identify potential delays, and ensure grades are submitted promptly.",
            open: false
        }
    ]
  return (
    <>
        <h5>FAQS</h5>
        <h2>Frequently Asked Questions</h2>
        <div className="wrapper">
            <div className="accordion">
                
            </div>
        </div>
    </>
  )
}
  
export default Help