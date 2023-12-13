import React from "react";
import "../components-css/Footer.css"
import {
      //  FaDribbleSquare,
       FaFacebookSquare,
       FaGithubSquare,
       FaInstagramSquare,
       FaTwitterSquare,
} from "react-icons/fa"

function Footer ()  {
  return(
    <div className="foot">
         <div>
          <h1 className="ft">Grading System</h1>
         <p className="grade">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate maiores, similique harum voluptatem est quaerat nemo natus praesentium amet enim sunt! Voluptates similique 
          eius a id temporibus ipsa voluptate nostrum.</p>
         <div className="icons">
          <FaFacebookSquare size={30}/>
          <FaTwitterSquare size={30}/>
          {/* <FaDribbleSquare size={30}/> */}
          <FaGithubSquare size={30}/>
          <FaInstagramSquare size={30}/>
         </div>
          </div>
      <div className="footer-col">
         <div className="list">
          <h6>Grades</h6>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
         </div>
         <div className="list">
          <h6>Support</h6>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
         </div>
         <div className="list">
          <h6>Help</h6>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
         </div>
            </div>
    </div>
  )
}




export default Footer;