import React, { useState } from 'react'
import uglogo from '../assets/Logo.png'
import { Auth } from '../data/data'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
const [stId,setStId] = useState(0)
const [pin,setPin] = useState(0)
const navigate = useNavigate()

 const Login = (e) => {
    e.preventDefault()
    if(Number(stId) === Auth[0].studentID && Number(pin) === Auth[0].pin){
      navigate('/home')
    }else{
      alert("invalid login Cridentials")
    }
 }


  return (
    <div className='flex w-full h-screen justify-center items-center'>
    <div className='w-full lg:h-[500px] lg:w-[1000px] md:w-[700px] flex flex-col lg:flex-row shadow-sm lg:shadow-lg '>
      <div className='flex-1 flex flex-col items-center border gap-10 relative bg-blue-200/5'>
          <div className='h-[100px] w-[150px] p-5'>
              <img src={uglogo} alt="" className='w-full object-cover'/>
          </div>

          <div className='flex flex-col justify-center items-center p-4 pt-5'>
            <h1 className='text-2xl'>Welcome</h1>
            <p className='text-gray-500'>UG grade reporting system</p>
          </div>

          <div className='hidden w-full lg:flex flex-col justify-self-end items-center absolute bottom-4'>
            <div className='w-full flex items-center p-4 gap-1'>
              <div className='grow h-[1px] bg-gray-400/30'></div>
                <p className=''>&copy;2023</p>
              <div className='grow h-[1px] bg-gray-400/30'></div>
            </div>
            <p className='text-gray-500'>Email: example@gmail.com</p>
          </div>
          
      </div>
      <div className='flex-1 border h-full shadow-sm lg:shadow-2xl flex flex-col p-4 gap-5'>
        <p className='text-lg p-2 text-gray-500'>Please Login to your Portal</p>

        <form className='flex flex-col w-full gap-4 p-4 pt-5' onSubmit={Login}>
          <input className='border rounded-lg w-full p-4' type="number" required maxLength={8} aria-label='Student Id' placeholder='Enter your student ID' onChange={(e)=> setStId(e.target.value)}/>
          <input className='border rounded-lg w-full p-4' maxLength={4} required type="number" aria-label='pin' placeholder='Enter pin' onChange={(e)=> setPin(e.target.value)}/>

          <div className='w-full p-4 flex justify-between'>
            <div className='flex items-center gap-2 '> 
              <input type="checkbox" id="Rem" />
              <label htmlFor="Rem" className='cursor-pointer'>Remember me</label>
            </div>
            <a href="#" className='text-blue-500 underline'>Forgot Details</a>
          </div>

          <button 
          type='submit'
          className='border self-start w-1/2 p-2 rounded bg-blue-800 text-white text-xl'
          
          >
            Login
          </button>
        </form>
      </div>
   </div>
    </div>
  )
}

export default LoginPage
