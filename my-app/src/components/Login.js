import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form className="p-6 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;