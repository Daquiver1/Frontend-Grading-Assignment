import  { useState } from 'react';
import Footer from './Footer';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    // Mock authentication - simulate a successful login
    alert(`Logged in as Student ID: ${studentID}`);
  };

  return (
    <div className='main-div'>
          <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentID">
              Student ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="studentID"
              type="text"
              placeholder="Student ID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
              PIN
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pin"
              type="password"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>

  );
};

export default Login;
