import React, { useState } from 'react';
import { Link } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='w-full h-screen bg-white fixed flex items-center justify-center flex-col top-0 left-0'>
      <h2 className='font-[600] text-gray-700 text-2xl mb-10'>Sign in to your account </h2>
      <form onSubmit={handleSubmit} className='w-1/4'>
        <div className='flex flex-col mb-6'>
          <label className='font-[600] text-sm text-left '>Email</label>
          <input className="py-2 px-1 ring-1 ring-gray-200 ring-inset rounded-lg w-full focus:ring-2 focus:ring-purple-600 outline-none border-0" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='font-[600] text-sm text-left '>Password</label>
          <input className="py-2 px-1 ring-1 ring-gray-200 ring-inset rounded-lg w-full focus:ring-2 focus:ring-purple-600 outline-none border-0" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="w-full flex items-center justify-center bg-purple-600 py-2 px-1 rounded-lg hover:bg-purple-700">
           <Link className="text-slate-100 font-[600]" to={"/StDashBoard"}>SignIn</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
