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
import Soli from '../images/Dr. Soli.jpeg';
import HOD from '../images/Jamal-Deen-Abdulai-2.jpg';
import Julius from '../images/Julius-Ludu.jpg';
import CBASman from '../images/Prince-Boakye-Sekyerehene.jpg';
import Eben from '../images/Ebenezer-Owusu-13.jpg';
import MarkAtta from '../images/Mark Atta Mensah_2.jpeg';
import loginbg from '../images/contact1ed.jpeg';



const InstructorContact = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">

      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative`}>
      
      <div className="inline-flex"> 
      <AiFillBook className={`bg-orange-500 text-6xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate=[360deg]"} `}/>
      <h1 style={{ fontSize: '1.5rem' }} className={`text-black origin-left font-bold text-5xl duration-300 ${!open && "scale-0"}`}>UG GRADE REPORT SYSTEM</h1>

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


      <BsChevronLeft className={`bg-gray-300 text-black text-3xl rounded-full absolute -right-3.5 top-9 cursor-pointer z-10 ${!open ? "rotate-180" : ""}`} onClick={()=>setOpen(!open)}/>
      </div>

      

      

      <div className="p-7 flex-1 bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${loginbg})` }}>
      
    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
      Instructor Contact Information
    </h2>
  </div>
  <div className="flex bg-Niagara">
    <div className="bg-Thistle shadow p-2 rounded-lg grid grid-cols-2 gap-1 hover:shadow-lg transition-shadow duration-200">
      <img className="rounded-full w-32 h-32 object-cover" src={Soli} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Michael Soli</div>
          <div className="text-gray-500">Web Development Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: agbosoli@gmail.com</div>
          <div>Phone: +233 541 456 789</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={HOD} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Jamal-Deen Abdulai</div>
          <div className="text-gray-500">Head of Department</div>
        </div>
        <div>
          <div className="mt-2">Email: jmabdu19@gmail.com</div>
          <div>Phone: +233 456 765 009</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={Julius} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Julius Ludu</div>
          <div className="text-gray-500">AI & Network Development Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: juliusl419@gmail.com</div>
          <div>Phone: +233 261 886 229</div>
        </div>
      </div>
    </div>
    <div className="bg-lavenderGrey shadow p-2 rounded-lg grid grid-cols-2 gap-1 ml-6 hover:shadow-lg transition-shadow duration-200">
      <img className="rounded-full w-32 h-32 object-cover" src={MarkAtta} alt="Mark Atta Mensah" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Mark Atta Mensah</div>
          <div className="text-gray-500">Software Engineering Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: attamark@gmail.com</div>
          <div>Phone: +233 247 654 321</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={CBASman} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Prince Boakye Sekyerehene</div>
          <div className="text-gray-500">Data Science Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: tooknow999@gmail.com</div>
          <div>Phone: +233 003 765 062</div>
        </div>
      </div>
      <img className="rounded-full w-32 h-32 object-cover" src={Eben} alt="Michael Soli" />
      <div className="flex-1 flex-col justify-between">
        <div>
          <div className="text-xl font-bold">Ebenezer Owusu</div>
          <div className="text-gray-500">Machine Learning Instructor</div>
        </div>
        <div>
          <div className="mt-2">Email: ebenOwu98@gmail.com</div>
          <div>Phone: +233 222 456 068</div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
    
}

export default InstructorContact;