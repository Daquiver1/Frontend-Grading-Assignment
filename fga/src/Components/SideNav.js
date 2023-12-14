import "../Styles/ComponentStyles/SideNav.css";
import { Link } from "react-router-dom";


const Navlist = () => {
  return(
    <div className="navlist">
      <ul className="navlistul">
        <Link to="LandingPage.js">
          <li>Overview</li>
        </Link>
        <Link to="#">
          <li>DashBoard</li>
        </Link>
        <Link to="#">
          <li>Your Grades</li>
        </Link>
        <Link to ="#">
          <li>Reportform</li>
        </Link>
        <Link to ="InstructorContactPage">
          <li>Contact</li>
        </Link>
        <Link to="HelpAndSupportPage">
          <li>Help</li>
        </Link>
      </ul>
    </div>
  )
}



const SideNav = () => {
  return(
    <div className="side-nav">
        <h2 className="navlinks">NAVIGATIONAL LINKS</h2>
        <Navlist />
    </div>     
     
    );
};

export default SideNav;

