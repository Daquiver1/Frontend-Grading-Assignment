import React, { useState } from 'react'; 
import ugLogo from './assets/uglogo.png'; 
 
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
            <header style={headerStyle}> 
                <div style={logoStyle}> 
                    <img src={ugLogo} alt="Logo" height="70" /> 
                </div> 
            </header> 
            <body style={bodyStyle}> 
                <div style={formContainerStyle}> 
                    <h2 style={headerStyle}>Student Login</h2> 
                    <label style={labelStyle}>Student ID:</label> 
                    <input 
                        type="text" 
                        value={studentId} 
                        onChange={(e) => setStudentId(e.target.value)} 
                        style={inputStyle} 
                    /> 
                    <br /> 
                    <label style={labelStyle}>PIN:</label> 
                    <input 
                        type="password" 
                        value={pin} 
                        onChange={(e) => setPin(e.target.value)} 
                        style={inputStyle} 
                    /> 
                    <br /> 
                    <button onClick={handleLogin} style={buttonStyle}> 
                        Login 
                    </button> 
                </div> 
            </body> 
             
 
        </div> 
    ); 
}; 
 
// Styles 
const headerStyle = { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'justify', 
    padding: '20px', 
    background: '#001f3f', // Change header background color to blue 
    color: 'white', 
    borderBottom: '2px solid #fff', 
    textAlign: 'justify',
}; 
 
const logoStyle = { 
    flex: '1', 
}; 
 
 
 
 
 
 
// Inline styles 
const bodyStyle = { 
    fontFamily: 'Arial, sans-serif', 
    textAlign: 'center', 
    marginTop: '100px', 
}; 
 
const formContainerStyle = { 
    width: '300px', 
    margin: 'auto', 
    padding: '20px', 
    border: '1px solid #ccc', 
    borderRadius: '5px', 
    backgroundColor: '#f5f5f5', 
}; 
 
const labelStyle = { 
    display: 'block', 
    marginBottom: '5px', 
}; 
 
const inputStyle = { 
    width: '100%', 
    padding: '8px', 
    marginBottom: '10px', 
}; 
 
const buttonStyle = { 
    backgroundColor: '#4caf50', 
    color: '#fff', 
    padding: '10px 15px', 
    border: 'none', 
    borderRadius: '3px', 
    cursor: 'pointer', 
}; 
 
export default Login;