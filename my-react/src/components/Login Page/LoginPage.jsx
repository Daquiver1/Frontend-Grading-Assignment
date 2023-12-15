import React from "react";
import "../../index";
import Footer from "../Footer";
import Navbar from "../Navbar";



const LoginPage = () => {
    return (
        <div className="">
        {/*navbar*/}
        <header>
           <Navbar/>
       </header>
       <div className="w-full h-screen bg-white">
        <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 border border-slate-400 rounded-md shadow-1g backdrop-blur-sm bg-opacity-30 relative h-[100vh]  flex flex-col justify-center items-center bg-cover'>
            <h2 className='text-4xl font-bold text-center py-4'>LOGIN</h2>     
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative rounded-md bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative rounded-md bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 rounded-md bg-[#00df9a] hover:bg-green-300 relative text-white'>Sign In</button>
            <div className="remember-forget">
                <label><input type="checkbox"/>Remember me</label>    
            </div>
            <span> <a href="button">Forgot Password?</a></span>
           
            <button className='w-full py-3 mt-8 rounded-md bg-[#00df9a] hover:bg-green-300 relative text-white'>Sign UP</button>
            
            
        </form>  
       </div> 
       </div>
       {/*footer*/}
       <footer>
            <Footer/>
         </footer>
            
        </div>

    
            
        
    );

}

export default LoginPage;