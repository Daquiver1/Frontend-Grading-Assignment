import React, { useState } from 'react';
import uglogo from './assets/uglogo.jpg';

const Login = () => {
    const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');

    const handleLogin = () => {
        // Mock authentication logic (replace with your actual authentication logic)
        const correctStudentId = '11262988';
        const correctPin = '99999';

        if (studentId === correctStudentId && pin === correctPin) {
            // If correct credentials, redirect to the dashboard
            window.location.href = '/dashboard';
        } else {
            // Display an error message or handle unsuccessful login
            alert('Invalid Student ID or PIN');
        }
    };

    return (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Larger logo in the left corner of the header */}
                <img src={uglogo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
            </header>

            {/* Login Form */}
            <div style={{ marginTop: '50px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px', margin: '0 auto' }}>
                <h2 style={{ color: '#333' }}>Secure Login</h2>
                <form>
                    <label htmlFor="studentId" style={{ display: 'block', marginBottom: '8px' }}>Student ID:</label>
                    <input
                        type="text"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
                    />

                    <br />

                    <label htmlFor="pin" style={{ display: 'block', marginBottom: '8px' }}>PIN:</label>
                    <input
                        type="password"
                        id="pin"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
                    />

                    <br />

                    <button type="button" onClick={handleLogin} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
