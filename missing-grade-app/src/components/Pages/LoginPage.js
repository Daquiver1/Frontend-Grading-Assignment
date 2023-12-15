import React from 'react';
import LoginForm from '../Forms/LoginForm';


const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login / Signup</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
