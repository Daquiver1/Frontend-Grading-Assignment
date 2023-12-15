import React, { useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import logo from '../../src/components/login.jpg';


export default function Login() {

    const navigate = useNavigate();

    const [post,setPost] = useState({
        username:'',
        password:'',
        remember:''
    });

    const handlePost = (e) =>{
        setPost({
            ...post,[e.target.name]:e.target.value
        }); 

    }


  const handleBtn = () =>{

    console.log(post.password) 


      navigate('/dashboard')
  }

  return (
    <>
<div className="bg-gray-100 flex justify-center items-center h-screen">
    
<div className="w-1/2 h-screen hidden lg:block">
  <img src={logo} alt="Placeholder Image" className="object-cover w-full h-full"/>Designer

  
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Student ID</label>
      <input type="text" id="username" onChange={e=>handlePost(e)} name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"  />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Pin</label>
      <input type="password" id="password" name="password" onChange={e=>handlePost(e)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"  />
    </div>
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" onChange={e=>handlePost(e)} className="text-blue-500" />
      <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label >
    </div>
    <div className="mb-6 text-blue-500">
      <a href="#" className="hover:underline">Forgot Password?</a>
    </div>
    <button type="submit" onClick={handleBtn} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <div className="mt-6 text-blue-500 text-center">
    <a href="#" className="hover:underline">Sign up Here</a>
  </div>
</div>
</div>
</>
  )
}