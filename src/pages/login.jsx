import React, { useState } from 'react';

function LoginForm() {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentID === '11112468' && pin === '1234') {
      setLoginMessage('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    } else {
      setLoginMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <header>
        <b className="text-2xl">LOGIN HERE TO ACCESS THE SYSTEM</b>
      </header>
      <main className="mt-8">
        <section className="bg-white shadow-md rounded p-8 max-w-md mx-auto">
          <h2 className="text-2xl mb-4">Enter Your Student ID(11112468) and PIN(1234) to Login...</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="studentID" className="font-bold mb-1">
                Student ID:
              </label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pin" className="font-bold mb-1">
                PIN:
              </label>
              <input
                type="password"
                id="pin"
                name="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
            >
              Login
            </button>
            <p id="loginMessage" className="text-center mt-4">{loginMessage}</p>
          </form>
        </section>
      </main>
      <footer className="mt-8">
        <b className="text-2xl">MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
}

export default LoginForm;