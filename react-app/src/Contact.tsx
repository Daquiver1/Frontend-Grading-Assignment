import './Contact.css'
import './component/Footer'
import Footer from './component/Footer';
import contactpic from './images/contactpic.png'

function Contact () {
    return(
        <>
        <p className="icontact">Instructors Contact Info</p>
   
                <div className='contact'>
                <img className='contactpic' src={contactpic} alt='' />
            <div className='info'>
                <ul>
                    <li >Dwumfour Abdullai Abdul-Aziz</li><br></br>
                       <li>Mark Atta Mensah</li><br></br>
                     <li > Michael Soli </li><br></br>
                     
                </ul>
            </div>
          

        
            <div className='info'>
                <ul>
                    <li >  adwumfour@ug.edu.gh- 0260541219</li><br></br>
                       <li> mamensah@ug.edu.gh-0596369787 </li><br></br>
                     <li >  msoli@ug.edu.gh- 0540710554 </li><br></br>
                </ul>
            </div>
    </div>
    <Footer />
        </>
    )
}

export default Contact;