import { Link } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return ( 
        <nav>
            <div className="Navtab">
                <div>
                    <img src="https://admission.ug.edu.gh/applying/sites/default/files/ug-admsn-logo_5.jpg"/>
                    <h2>UNIVERSITY OF GHANA</h2>
                </div>
                <div className='linktopages'>
                    <div><Link to="/">Landing </Link></div>
                    <div> <Link to="/login">Login </Link></div>
                    <div>  <Link to="/dashboard">Dashboard </Link></div>
                    <div> <Link to="/missinggrade">Missinggrade </Link></div>
                    <div> <Link to="/contactpage">InstructorContact</Link></div>
                    <div> <Link to="/helpAndSupportPage">Help </Link></div>
                    <div><Link to="/studentgradereport">Gradereport</Link></div>
               
               
               
               
               
               
        
        
                </div>

            </div>
        </nav>
     );
}
 
export default Navigation;