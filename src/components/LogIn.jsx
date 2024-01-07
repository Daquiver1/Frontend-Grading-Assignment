import { useState } from 'react';
import img1 from '../assets/img1.jpg'
import { MdCastForEducation } from "react-icons/md";
import {NavLink} from "react-router-dom"

function LogIn() {
  const [studentData, setStudentData] = useState({
    studentId: '',
    studentPassword: ''
  })

  function handleChange(event) {
    const {name, value} = event.target
    setStudentData(prevStudentData => {
      return {
        ...prevStudentData,
        [name]: value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(studentData)
  }

  return (
    <div className='w-full h-[] flex bg-dark-purple py-10 px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-lg border'>
        <div className='hidden md:block w-full  h-[549px] border-r'>
          <img className='w-full h-[99.7%] rounded-lg ' src={img1} alt="" />
        </div>

        <div className='p-4 flex flex-col justify-around px-[40px] '>
          <form action="" onSubmit={handleSubmit} > 
            <h1 className='text-4xl whitespace-nowrap text-[#00df94] font-bold text-center mb-8 flex'>
              <MdCastForEducation className='mr-[3px] flex self-center' />Grade Report Form
            </h1>
            <div className=' flex flex-col justify-center items-center px-[2%] '>
              <input  
                type="text" 
                placeholder='StudentID'
                className='border p-2 mr-2 w-full mb-2 rounded-lg'
                name='studentId'
                onChange={handleChange}
                value={studentData.studentId}
                maxLength={8}
                minLength={8}
              />

              <input 
                type="password"
                placeholder='Password'
                className='border p-2  w-full rounded-lg' 
                name='studentPassword'
                onChange={handleChange}
                value={studentData.studentPassword}
                maxLength={5}
                minLength={5}
              />

              <NavLink to="/Dashboard">
                <button 
                  className='px-5 rounded-lg py-2 my-4 bg-indigo-500 hover:bg-violet-950 hover:text-white ease-in-out duration-500'
                >Sign In</button>
              </NavLink>
              

              <a href='#' className='self-center hover:scale-[1.1] ease-in-out duration-500 hover:text-cyan-400 text-white'>Forgot StudentID or Password</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
