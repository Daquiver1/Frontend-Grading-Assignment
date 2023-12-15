import React, { useState } from 'react';
import './style.css'



const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleLogin = () => {
    if (studentId === 'exampleStudentID' && pin === '11297632') {
    
      setLoginError(false);

      alert('Login Successful!');
    } else {
      setLoginError(true);
    }
  };

  return (
<body>
    <div className= 'joint-container'>
      <div className='login-container'> 
     <  div className="login-header"> <h2 className='login-text' >LOGIN</h2></div> 
          <form>
            <div className='box'>
          
            <input className='login-input1'
              type="text"
              id="studentId"
              placeholder="Student ID"
              value={studentId}
              onChange={handleStudentIdChange}/>
            </div>
        <div className='box'>
            <input className='login-input2'
            type="password"
            id="pin"
            placeholder="PIN"
            value={pin}
            onChange={handlePinChange}/>
        </div>
        {loginError && <p style={{ color: 'green' }}>Welcome Stephen!</p>}
            <a href="/landingpage"><button className='loginbutton' type="button" onClick={handleLogin}>
              Login
            </button>
            </a> 
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
          </form>
        </div>
      <div className="ei"></div>
  </div>
  </body>
  );
};

export default LoginPage;



