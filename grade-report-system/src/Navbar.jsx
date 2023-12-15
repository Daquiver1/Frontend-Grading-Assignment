import { Link } from 'react-router-dom';
import './Navbar.css';
import Studyicon from './Pages/Studyicon.png';
import Magnifiericon from './Pages/Magnifiericon.png';
const Navbar = () => {
    return ( 
        <header>

            <nav className="nav-bar">
            <div className="Left-div">
                <img className="bookimg" src={Studyicon} alt="logo1" />
                <img className="magnifierimg"src={Magnifiericon} alt="logo2" />
            <Link className="HOME" to="/"> Home </Link>
            </div>
                <div className="links">

                <div>
                    <Link className="link1" to="/dashboard"> Dashboard </Link>
                </div>
                
               <div>
                    <Link className="link2" to="/gradereport"> Grade Report </Link>
               </div> 

               <div className="link3-1">
                    <Link className="link3" to="/missinggradeform"> Missing-Grade Form </Link>
                </div> 

               <div>
                     <Link className="link4" to="/contactinstructor"> Contact Instructor </Link>
                </div> 

               <div>
                    <Link  className="link5" to="/help"> Help & Support </Link>
                </div> 
                
                
             
                

                </div>
                

            </nav>



        </header>




     );
}
 
export default Navbar;