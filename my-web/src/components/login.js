import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(`Login attempted with Student ID: ${studentId} and PIN: ${pin}`);
        navigate('/DashboardPage');
    };

    return (
        <div className="loginContainer">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="studentId">Student ID</label>
                <input 
                    type="text" 
                    id="studentId" 
                    value={studentId} 
                    onChange={(e) => setStudentId(e.target.value)} 
                    placeholder="Enter your Student ID" 
                />

                <label htmlFor="pin">PIN</label>
                <input 
                    type="password" 
                    id="pin" 
                    value={pin} 
                    onChange={(e) => setPin(e.target.value)} 
                    placeholder="Enter your PIN" 
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
