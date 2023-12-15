import React, { useState } from 'react';
import ugLogo from './assets/uglogo.png';
import './Login.css'; // Import the stylesheet

const Login = () => {
    const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');

    const handleLogin = () => {
        // Mock authentication logic
        if (studentId === '11046896' && pin === '12345') {
            // Redirect to the dashboard page
            window.location.href = '/Dashboard';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <header className="header-style">
                <div className="logo-style">
                    <img src={ugLogo} alt="Logo" height="70" />
                </div>
            </header>
            <body className="body-style">
                <div className="form-container-style">
                    <h2 className="header-style">Student Login</h2>
                    <label className="label-style">Student ID:</label>
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className="input-style"
                    />
                    <br />
                    <label className="label-style">PIN:</label>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="input-style"
                    />
                    <br />
                    <button onClick={handleLogin} className="button-style">
                        Login
                    </button>
                </div>
            </body>
        </div>
    );
};

export default Login;
