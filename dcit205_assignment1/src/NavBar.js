
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
             
          
    <img src={"../images/ug.jpg"} alt="University of Ghana Logo" width="140" height="100" />
  
            <div className='links'>
                <Link to="/">Login</Link>
                <Link to="/Home">Home</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/GradeReport">Grade Report</Link>
                <Link to="/MissingGrade">Missing Grade</Link>
                <Link to="/ContactPage">Contact</Link>
                <Link to="/Help-Support">Help and Support</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;
