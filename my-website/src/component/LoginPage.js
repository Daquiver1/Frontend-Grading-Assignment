// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulated authentication logic (replace with actual authentication logic)
        if (studentId === '12345678' && pin === '1234') {
            navigate('/dash-board');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <label>
                    Student ID:
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} maxLength="8" />
                </label>
                <br />
                <label>
                    PIN:
                    <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} maxLength="4" />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;