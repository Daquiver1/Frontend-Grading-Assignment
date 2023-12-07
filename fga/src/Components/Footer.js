import "../Styles/ComponentStyles/Footer.css";

const FooterNav = () => {
    return (
      <div className="footer-navlinks">
        <p> NAVIGATION LINKS</p>
      </div>
    );
  };


const FooterContactLinks = () => {
    return (
      <div className="footer-instructor">
        <p>INSTRUCTOR CONTACT PAGE</p>
      </div>
    );
  };


const FooterHelp = () => {
    return (
        <div className="footer-help">
        <p> HELP AND SUPPORT</p>
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