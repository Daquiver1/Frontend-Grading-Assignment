import React from "react";
import "../../index"



const LoginPage = () => {
    return (
        <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 border border-slate-400 rounded-md shadow-1g backdrop-blur-sm bg-opacity-30 relative h-[120vh]  flex flex-col justify-center items-center bg-cover'>
            <h2 className='text-4xl font-bold text-center py-4'>LOGIN</h2>     
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            <div className="remember-forget">
                <label><input type="checkbox"/>Remember me</label>    
            </div>
            <span> <a href="button">Forgot Password</a></span>
            <div className="Register-link">
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign UP</button>
             
            </div>
        </form>
    </div> 
    
            
        
    );

}

export default LoginPage;