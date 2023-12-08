import {useState} from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsSearch } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import LoginPagebg from '../images/bg-login.jpg'
import { FaCircleUser } from "react-icons/fa6";




  

const Login = () => {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [/*error,*/ setError] = useState('');
  const [open, setOpen] = useState(true);  


  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder logic for user verification
    if (ID === '11020486' && password === '45727') {
      // Replace with actual authentication logic (e.g., API call)
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex">

      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative`}>
      
      <div className="inline-flex"> 
      <AiFillBook className={`bg-orange-500 text-6xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate=[360deg]"} `}/>
      <h1 style={{ fontSize: '1.5rem' }} className={`text-black origin-left font-medium duration-300 ${!open && "scale-0"}`}>UG GRADE REPORT SYSTEM</h1>

      </div>

      <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
        <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>

        <input type={"search"} placeholder="search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}></input>
      </div>

      <Link to="/">
        <div className="inline-flex">
          <IoHome className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>LANDING PAGE </h1>
        </div>
      </Link>

      <Link to="/Login">
        <div className="inline-flex mt-4">
        <CgLogIn className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}>LOGIN PAGE</h1>
        </div>
      </Link>

      <Link to ="/Dashboard">
        <div className="inline-flex mt-4">
        <MdOutlineDashboard className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}> DASHBOARD </h1>
        </div>
      </Link>

      <Link to ="/GradeReport">
        <div className="inline-flex mt-4">
        <AiFillFund className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}> GRADE REPORT </h1>
        </div>
      </Link>

      <Link to="/MissingGradeForm">
        <div className="inline-flex mt-4">
        <FaWpforms className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}> MISSING GRADE FORM </h1>
        </div>
      </Link>

      <Link to="/InstructorContact"> 
        <div className="inline-flex mt-4">
        <MdPermContactCalendar className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}> INSTRUCTOR CONTACT </h1>
        </div>
      </Link>

      <Link to="/HelpAndSupport">
        <div className="inline-flex mt-4">
        <MdLiveHelp className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 mt-4 duration-500 ${open && "rotate=[360deg]"} `}/>
          <h1 className={`text-gray-500 origin-left font-medium text 9xl duration-300 cursor-pointer mt-5 ${!open && "scale-0"}`}> HELP AND SUPPORT </h1>
        </div>
      </Link>


      <BsChevronLeft className={`bg-gray-300 text-black text-3xl rounded-full absolute -right-3.5 top-9 cursor-pointer ${!open ? "rotate-180" : ""}`} onClick={()=>setOpen(!open)}/></div>

      

      



      <div className="min-h-screen py-6 flex-1 flex-col justify-center sm:py-12 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${LoginPagebg})` }}>
      <FaCircleUser className="bg-Thistle right-9 rounded-full absolute top-28 left-1/2 transform -translate-x-1/2 z-10" style={{ fontSize: '6em' }}/>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3  sm:max-w-xl sm:mx-auto" >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-Thistle-Niagara shadow-lg sm:rounded-3xl sm:p-20">
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="ID" className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <div className="mt-1">
                  <input
                  id="ID"
                  name="ID"
                  type="ID"
                  value={ID}
                  placeholder="Enter your student ID"
                  onChange={(e) => setID(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"/>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 mr-10 block text-sm text-gray-900">
                  Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="https://www.bing.com/ck/a?!&&p=35e87dd130d8272dJmltdHM9MTcwMTk5MzYwMCZpZ3VpZD0zMjJhMjY3Ny00YjcxLTZlNzItMDEzOS0zNTk2NGE5MTZmYzMmaW5zaWQ9NTIwNg&ptn=3&ver=2&hsh=3&fclid=322a2677-4b71-6e72-0139-35964a916fc3&psq=password+reset+tool+online&u=a1aHR0cHM6Ly93d3cuaWZpbmRwYXNzLmNvbS8&ntb=1" className="font-medium text-cyan-500 hover:text-cyan-600">
                  Forgot your password?
                  </a>
                </div>
              </div>

              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-60 h-10 flex justify-center  pl-20 pr-20 ml-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-60">Login</button>
              </div>
            
            </form>
        </div>

        </div>
      </div>
    </div>
        
      

  
  )
    
}

export default Login;