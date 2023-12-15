import './Footer.css'
import Facebook from './Pages/Facebook.png';
import Website from './Pages/Website.png';
import Linkedin from './Pages/Linkedin.png';

const Footer = () => {
    return ( 
        <div className="footer">

        <span className="span1"> 
            Having a missing grade? <br />
        
         </span>

        <span className="span2">
     Get in touch now ! 
        </span>
         
     
      <img className='Fb' src={Facebook} alt="FB" />
      <img className='Li' src={Linkedin} alt="Lin" />
      <img className='Web' src={Website} alt="Web" />

    


        </div>
       

     );
}
 
export default Footer;