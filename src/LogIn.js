import Header from './Header.js'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import Button from './Button.js'
import {Link} from 'react-router-dom'

function LogIn(){
    return(
        <>
        <Header/>
        <>
        <div className ="lcontainer">
        <div className="logIn-container">
            <p>Login</p>
            <input className="loginput" type="text" inputmode="numeric" pattern="[0-9]*" maxLength={8} placeholder='Student ID' required/>
            <input className="loginput" type="password" inputmode="numeric" pattern="[0-9]*"
            maxLength={5} placeholder='PIN' required/>
            <Link to="/dashboard"><Button name="getStarted" elname="LOGIN"/></Link>
        </div>

        </div>
        </>
        <Footer/>
        </>
    );
}
export default LogIn;