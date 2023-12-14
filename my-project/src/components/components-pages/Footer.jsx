import React from "react";
import "../components-css/Footer.css"
import {
      
       FaFacebookSquare,
       FaGithubSquare,
       FaInstagramSquare,
       FaTwitterSquare,
} from "react-icons/fa"

function Footer ()  {
  return(
    <div className="footer">
         <div classname="sb_footer section_padding">
<div classname="sb_footer-links">
  <div className="sb_footer-links_div">
              <a href="/">
                
              </a>
  </div>

</div>
           <div classname="sb_footer-links_div">
<h3>
  Welcome to the Grading System
</h3>
<a href="/Dashboard">
              </a>
              <a href="/">
                <p>Check the Support Page for additional information</p>
              </a>
              
           </div>
           <div classname="sb_footer-links_div">
<h3>
   Grading System
</h3>
<a href="/Dashboard">
              </a>
              <a href="/">
                <ul>
                  <li>Excellent</li>
                  <li>Very Good</li>
                  <li>Good</li>
                  </ul>
              </a>
              
           </div>
           <div className="sb_footer-links_div">
            
             <div socialmedia>
                 
             <a href="/"><FaTwitterSquare /></a>
             <a href="/"><FaInstagramSquare /></a>
             <a href="/"><FaFacebookSquare /></a>
             <a href="/"><FaGithubSquare /></a>
             </div>
           </div>
             
         </div>
         <hr></hr>
         <div className="sb_footer-below">
             <div className="sb_footer-copyright">
<p>
  @{new Date().getFullYear()} GradingSystem. All rights reserved.
</p>
             </div>
             <div className="sb_footer-below-links">
                 <a href="/terms"><div><p>Terms & Conditions</p></div></a>
             </div>
         </div>
    </div>
  )
}




export default Footer;