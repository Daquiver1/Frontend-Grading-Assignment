import React from 'react'
import { useRef, useState, useEffect } from 'react';
import '../component/log.css';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    };
    const handleSuccessClick = () => {    
        Swal.fire('Success!', 'Your action has been completed.', 'success');
    }
    return (
        <> 
        <Navbar/>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <li>
                        <a href='/Dashboard'>Go to Home</a>
                    </li>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" :
                        "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username"> Student_ ID: </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required />

                        <label htmlFor="password"> Password: </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required />
                        <button onClick= {handleSuccessClick}>Log In</button>
                        <p>
                            Forgot Password? <span> <a href="/"> Click Here </a> </span>
                        </p>
                    </form>
                </section>
                
            )}
        </>
    );
}

export default Login;
