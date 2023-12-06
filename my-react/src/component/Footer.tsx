import img3 from './images/logo.webp'
import{Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"


function Footer(){
    return(
        <>
          <footer>
           
            <div className='details'>
              
            <img className="" title="ug" src={img3}></img>
          
            <div className='footer'>
            <p> &#169; University of Ghana,Computer Science Department</p>
            <p>Privacy Policy | Terms of Service | Contact Us</p>
            <Container>
            <p>Contact us on our social media platforms</p>
            <div className='social-media-icons'>
              <a href='https://web.facebook.com/univofgh/?_rdc=1&_rdr'><FontAwesomeIcon icon={faFacebook}/> </a>
              <a href='https://twitter.com/VoiceOfUg'><FontAwesomeIcon icon={faInstagram}/> </a>
              <a href='https://www.instagram.com/universityofghana/'><FontAwesomeIcon icon={faTwitter}/> </a>
            </div>
            </Container>
            </div>
            <div className='contact'>
            
            <p>[University of Ghana]</p>
           <p>[P.O Box LG 1181, Legon, Accra, Ghana]</p>
            <p>[+233 501 382 035]</p>
            <p>[dcs@ug.edu.gh]</p>
            </div>
            </div>
          </footer>
        </>
    )

}
export default Footer;