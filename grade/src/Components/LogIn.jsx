import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const handleLogin = () => {
    // Handle login logic
  };

  const handleSignup = () => {
    // Handle signup logic
  };

 

  return (
    <div>
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            Remember me
          </label>
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setIsLogin(false)}>Don't have an account? Sign up</p>
          <p onClick={() => setForgotPasswordEmail(email)}>Forgot password?</p>
        </div>
      ) : (
        <div>
          <h2>Sign Up</h2>
          {/* Signup form fields */}
          <button onClick={handleSignup}>Sign Up</button>
          <p onClick={() => setIsLogin(true)}>Already have an account? Login</p>
        </div>
      )}
      {forgotPasswordEmail && (
        <div>
          <h2>Forgot Password</h2>
          <p>An email with instructions to reset your password has been sent to {forgotPasswordEmail}</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignupPage;
