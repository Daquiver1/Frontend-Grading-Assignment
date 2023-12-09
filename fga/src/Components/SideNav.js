import "../Styles/ComponentStyles/SideNav.css";



const Navlist = () => {
  return(
    <div className="navlist">
      <ul className="navlistul">
        <a href="LandingPage.js">
          <li>Overview</li>
        </a>
        <a href="DashBoard.js">
          <li>DashBoard</li>
        </a>
        <a href="Grades.js">
          <li>Your Grades</li>
        </a>
        <a href="MissingGradeReport.js">
          <li>Reportform</li>
        </a>
        <a href="InstructorContactPage.js">
          <li>Contact</li>
        </a>
        <a href="HelpAndSupport.js">
          <li>Help</li>
        </a>
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

