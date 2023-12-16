import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return ( 
    <footer className="footerdiv">
      <div >
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>University Of Ghana</p>
          <p>Legon</p>
          <p>Email: univofgh@gmail.com</p>
          <p>Phone: (+233) 456-7890</p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <div><Link to="/">Landing </Link></div>
                    <div> <Link to="/login">Login </Link></div>
                    <div>  <Link to="/dashboard">Dashboard </Link></div>
                    <div> <Link to="/missinggrade">Missinggrade </Link></div>
                    <div> <Link to="/contactpage">InstructorContact</Link></div>
                    <div> <Link to="/helpAndSupportPage">Help </Link></div>
                    <div><Link to="/studentgradereport">Gradereport</Link></div>
        </div>

        <div className="follow-us">
          <h3>Follow Us</h3>
          <a href="#" target="_blank" className="social-link">Facebook</a>
          <a href="#" target="_blank" className="social-link">Twitter</a>
          <a href="#" target="_blank" className="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;