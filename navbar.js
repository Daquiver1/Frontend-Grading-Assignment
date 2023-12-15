
import {Link } from 'react-router-dom';
//import backgroundImage from './hback.jpg';

const Navbar = () => {

    const styles = {
       
            color: 'blue',
            borderRadius:'8px',
            fontSize :"16px",
            
        
         
          };
    return ( 

 
        <nav className='navbar' style={{borderRadius:'8px'}} style={styles}>
            <h1>Missing grade system </h1>
            <div className='links'>
            <Link to='/'><b>Home</b></Link>
          
    <Link to='La'> <b>Login </b></Link>
   <Link to ='Db'><b>Dash board</b></Link>
   <Link to = "Gd"><b>Grade Report</b></Link>
   <Link to='MGF'> <b>Missing Grade Form</b></Link>
   <Link to ="IC"> <b>Instructors</b></Link>
   <Link to="HP"><b>Help & FAQ</b></Link>

            </div>
        </nav>

     );
}
 
export default Navbar;