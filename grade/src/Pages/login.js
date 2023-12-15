import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
        
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Simulate authentication logic
      if (username === '10101010' && password === '1212') {
        setIsAuthenticated(true);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        setIsAuthenticated(false);
        alert('Invalid credentials. Please try again.');
      }
    };

    
  



  return (
    <div>
        <section className="">
        <div className="flex flex-col items-center bg-wh ite justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className='text-4xl pb-12 font-bold text-yellow-600'>Welcome to Student Missing Grade Portal</h1>
            <div className="w-full bg-white dark:border md:mt-0 bg-yellow-200 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xle">
                        Login to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Student ID</label>
                            <input 
                                type="username" 
                                name="username" 
                                id="userame" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Student Pin</label>
                            <input 
                                type="password" 
                                name="password" 
                              
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            
                            <a href="#" className="text-sm font-medium text-gray-500 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button 
                            type="button" 
                            onClick={handleLogin}
                            className="w-full text-white bg-yellow-600 over:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    </form>
                    {isAuthenticated && (
                    <p className="text-green-500 mt-4">
                        Authenticated successfully! Go to <a href="/dashboard">Dashboard</a>.
                    </p>
                )}
                </div>
            </div>
        </div>
    </section>

    </div>
    
  );
};

export default Login