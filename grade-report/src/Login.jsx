import Nav from './Nav';
import Footer from './Footer';
import {FaUser, FaLock} from "react-icons/fa";

const Login = () => {
    return (
        <>
        <Nav />
        <main id="login-body">
            <div className="login-container">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Student ID" required />
                        <FaUser className='login-icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className='login-icon'/>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox"/>Remember Me</label>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Login