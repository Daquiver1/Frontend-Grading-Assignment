import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    studentId: '',
    pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with actual authentication logic)
    if (formData.studentId === 'exampleStudentID' && formData.pin === '1234') {
      alert('Login successful! Redirect to dashboard.'); // Replace with actual redirect logic
    } else {
      alert('Invalid student ID or PIN. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Student Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2">
              PIN
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
