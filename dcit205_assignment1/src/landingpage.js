import React from "react";
import './landingpage.css'
import './navbar.jsx'
import { Link } from "react-router-dom";


const Landingpage = () => {
    return ( 
        <div class='landingpage'>
            <h3 >
                Home Page
            </h3>
            <h4>Welcome!</h4>
            <p>View your grades and input you missing grades </p>
            <p class='log'>Login to access your account.
           <Link to='/login'><input type='button' value={"login"}></input></Link>
            </p>
        </div>
     );
}
 
export default Landingpage;