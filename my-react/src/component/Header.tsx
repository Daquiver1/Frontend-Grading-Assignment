import {Link} from 'react-router-dom';


function Header(){
    return(
        <>
        <nav className='navbar'>
             
        
     <Link to="my-react/src/Home.tsx" >Help and Supprt</Link>
       <Link to=" ">Dashboard </Link>
       <Link to=" ">Contact us</Link>
       <Link to=" ">Grade report</Link>
       <Link to=' '>Missing grade form</Link>
       <Link to="my-react/src/Login.tsx">Login  </Link>
       <Link to="my-react/src/Home.tsx">Home </Link>
      
 
 <input className='search-box' id='search' type='searchbox' placeholder='Search'></input>
      
               </nav>

         
        </>
    )
}
export default Header;