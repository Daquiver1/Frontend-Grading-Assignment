import { FaLock,FaUser} from "react-icons/fa";

import '../../App.css'


const Login = () => {
    return (

        <div>
            <div className="loginmain w-screen h-screen ">
                <div className=''>
                <form action="" className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-1g backdrop-blur-sm bg-opacity-30 relative h-[100vh] flex flex-col  justify-center items-center bg-cover'>
                
                 <h1  className='text-4xl font-bold text-center mb-6  '>Login</h1> 
                    <div className='input-box relative my-4 '>
                        <input type="text" placeholder='Username'  className='block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearnce-none dark:focus:blue-500 focus:outline-none focus:ring-0  focus-border-blue-600 peer ' required/>
                        <FaUser />
                     </div>

                    <div className='input-box relative my-4'>
                        <input type="password" className='block w-72 py-2.3 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearnce-none dark:focus:blue-500 focus:outline-none focus:ring-0  focus-border-blue-600 peer ' placeholder='Password' required/>
                        <FaLock />

                    </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' /> Remember me</label>
                    </div>
                    <span> <a href='#'> Forgot password</a></span>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <span>New Here?<a href='#'>   Create an Account</a></span>
                </div>
                </form>
                </div> 
            </div>
        </div>
     );
}
 
export default Login;


