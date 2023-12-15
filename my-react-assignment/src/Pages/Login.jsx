import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    pin: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulated authentication logic
    if (formData.studentId === '11564738' && formData.pin === '57345') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      alert('Invalid Student ID or PIN. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Student Login</h2>

        {isAuthenticated ? (
          <div className="text-blue-300 font-semibold mb-6 text-center">Login Successful!</div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="studentId" className="block text-sm font-semibold text-gray-600">Student ID:</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pin" className="block text-sm font-semibold text-gray-600">PIN:</label>
              <input
                type="password"
                id="pin"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
