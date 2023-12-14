import { Link } from 'react-router-dom'
const NavBar = () => {
    
    return (  
    <header>
           <div className="navLinks">
           <nav>
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/report">Grade  report</Link></li>
                <li><Link to="/form">Missing grade form</Link></li>
                <li><Link to="/contact">tutors contact link</Link></li>
                <li><Link to="/help">help</Link></li>
               </ul>
        </nav>
           </div>
    </header>
    );
}
 
export default NavBar;