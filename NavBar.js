import { Link } from 'react-router-dom'
const NavBar = () => {
    
    return (  
    <header>
           <div className="navLinks">
           <nav>
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/A">Login</Link></li>
                <li><Link to="/B">Dashboard</Link></li>
                <li><Link to="/C">Grade  report</Link></li>
                <li><Link to="/D">Grade form</Link></li>
                <li><Link to="/E">Contact Us</Link></li>
                <li><Link to="/F">Assisance</Link></li>
               </ul>
        </nav>
           </div>
    </header>
    );
}
 
export default NavBar;