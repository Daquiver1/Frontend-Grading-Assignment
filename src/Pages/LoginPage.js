// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication logic
    if (username === 'fetty' && password === 'password') {
      setIsAuthenticated(true);
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      setIsAuthenticated(false);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
        <section className="h-screen">
          <div className="h-full">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-md ">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                  >
                    Login
                  </button>
                </form>
                {isAuthenticated && (
                  <p className="text-green-500 mt-4">
                    Authenticated successfully! Go to <a href="/dashboard">Dashboard</a>.
                  </p>
                )}
              </div>
                    
             </div> 
          </div>
        </section>





    
  );
};

export default LoginForm;
