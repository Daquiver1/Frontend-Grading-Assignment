import "../Styles/ComponentStyles/Footer.css";
import { Link } from "react-router-dom";


const FooterNav = () => {
    return (
      <div className="footer-navlinks">
        <p> NAVIGATION LINKS</p>
        <Link to ="/Pages/Login">
          <p>Login</p>
        </Link>
      </div>
    );
  };


const FooterContactLinks = () => {
    return (
      <div className="footer-instructor">
        <p>INSTRUCTOR CONTACT PAGE</p>
        <Link to ="/Pages/InstructorContactPage">
          <p>Contact Your Instructor</p>
        </Link>
      </div>
    );
  };


const FooterHelp = () => {
    return (
        <div className="footer-help">
        <p> HELP AND SUPPORT</p>
        <Link to="/Pages/HelpAndSupportPage">
          <p>Help</p>
        </Link>
        </div>
    );
 };



const Footer = () => {
  return (
    <div className="footer" >
      <ul className="footer_ul">
        <li><FooterNav /></li>
        <li><FooterContactLinks /></li>
        <li><FooterHelp /></li>
      </ul>
    </div>
  );
};

export default Footer;