import './Contact.css'
import img9 from './images/ugsch.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './component/Footer'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"


function Contact(){
    return(<>
    <h1 className='head'>Get In Touch With Us </h1>
        <aside>

                <p className="us">University Of Ghana,Computer Science Instructors</p>
                <p className="us">INSTRUCTOR AND EMAIL</p>
                <div className='cont-act'>
           
            <div>
                <ul>
                    <li >Dwumfour Abdullai Abdul-Aziz</li>
                       <li>Mark Atta Mensah</li>
                     <li > Michael Soli </li>
                     
                </ul>
            </div>
            </div>
            <div className='cont-act'>
            
        
          
            <div>
                <ul>
                    <li >  adwumfour@ug.edu.gh   </li>
                       <li> mamensah@ug.edu.gh</li>
                     <li >  msoli@ug.edu.gh </li>
                </ul>
            </div>
            </div>
            <img  className='sch' src ={img9} alt=''  />
            </aside>
            
      
            <div className='social-icons'>
              <a href='https://web.facebook.com/univofgh/?_rdc=1&_rdr'><FontAwesomeIcon icon={faFacebook}/> </a>
              <a href='https://twitter.com/VoiceOfUg'><FontAwesomeIcon icon={faInstagram}/> </a>
              <a href='https://www.instagram.com/universityofghana/'><FontAwesomeIcon icon={faTwitter}/> </a>
            </div>
            <Footer/>
    
    </>)

}
export default Contact;