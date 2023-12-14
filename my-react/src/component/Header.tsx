import {Link} from 'react-router-dom';



function Header(){
    return(
        <>
        <nav className='navbar'>
             
        
     <Link className='' to="my-react/src/Help.tsx" >Help and Supprt</Link>
     <Link to="my-react/src/Contact.tsx ">Contact us</Link>
       <Link to="my-react/src/Dashboard.tsx ">Dashboard </Link>
       
      
       <Link to='my-react/src/Missinggrade.tsx '>Missing grade form</Link>
       <Link to="my-react/src/Report.tsx ">Grade report</Link>
       <Link to="my-react/src/Login.tsx">Login  </Link>
       <Link to="my-react/src/Home.tsx">Home </Link>
         
 
 <input className='search-box' id='search' type='searchbox' placeholder='Search'></input>
      
               </nav>

         
        </>
    )
}
export default Header;