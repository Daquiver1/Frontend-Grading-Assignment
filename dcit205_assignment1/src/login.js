import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';




const Loginform = () => {
    return ( 
    <div className='cover' >
        <h1>LOGIN</h1>
        <input  className='one' type='text' placeholder='username'/>
        <input className='two' type='password' placeholder='password'/>

            <div> <Link to='/GradeReport'><input className='loginbtn' type='button' value={'login'}/></Link></div>
    </div>

     );
}
 
export default Loginform;