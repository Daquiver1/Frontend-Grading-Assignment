
import React, { useState } from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ studentId: '', pin: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = () => {
        console.log('Logging in with:', credentials);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="studentId">Student ID:</label>
                <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={credentials.studentId}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="pin">PIN:</label>
                <input
                    type="password"
                    id="pin"
                    name="pin"
                    value={credentials.pin}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
