import {Link} from 'react-router-dom';
import './Header.css'
import uglogo from './images/uglogo.jpg'

function Header () {
    return(
        <>
        <img className='ug' src={uglogo} alt='' />
        <nav className='navbar'>
            
        <input className='search-box' id='search' type='searchbox' placeholder='Search'></input>
     <Link className='' to="react-app/src/Home.tsx" >Home</Link>
     <Link to="react-app/src/Login.tsx ">Login</Link>
       <Link to="react-app/src/Report.tsx ">Grade Report </Link>
       <Link to='react-app/src/Form.tsx '>Form</Link>
       <Link to="react-app/src/Contact.tsx ">Contact us</Link>
       <Link to="react-app/src/Dashboard.tsx">Dashboard </Link>
       <Link to="react-app/src/Help.tsx">Help and Support</Link>

               </nav>
        </>
    )
}
export default Header;