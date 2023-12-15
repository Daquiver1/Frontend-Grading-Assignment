import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className="left">
          <div className="location">
           
            <div>
              <p>123 Housing Grade-Well-SITE</p>
              <p>Legon CC</p>
            </div>
          </div>
          <div className="phone">
            <h4>
          
          +233 3434-47599483
          </h4>
          </div>

          <div className="email">
            <h4>
        
          ug@info.gh.edu
          </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Well-Grade site</h4>
          <p> We present to you a powerful tool to manage and
               report missing grades, ensuring your academic journey 
               remains smooth and transparent.</p>
               <div className="social">
              <p>Security and Privacy Assurance:

Benefit: Trust in the safety of your data.
Explanation: We prioritize the security and privacy of user data. 
Our platform employs encryption measures to safeguard sensitive information.
 Feel confident knowing that your data is secure with us.</p>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
