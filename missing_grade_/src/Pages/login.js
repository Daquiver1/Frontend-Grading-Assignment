import React, { useState } from "react";
import Dashboard from "./dashboard";
import "./Login.css";

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const testUsername = '11173490';
        const testPassword = '13864';

        if (username === testUsername && password === testPassword) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid Details. Check your inputs and try again.');
        }

    };

    if (isLoggedIn) {
        return <Dashboard />;
    }

    return (
        <div className="login-page">
            <div className="login-tab">
                <h1 className="title">WELCOME BACK!</h1>
                <h3 className="sub-text">Login to continue</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="input"
                    placeholder="Student ID"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="submit" type="submit">Submit</button>

                    <p className="forgot">Forgot password?</p>
                </form>
            </div>
        </div>
    );
}

export default Login;