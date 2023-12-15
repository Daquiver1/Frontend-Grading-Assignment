import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import CurrentGrades from '../Components/CurrentGrades'



const Dashboard = () => {
  return (
    <>
    
      <Navbar />
    <div>
      <div className='mt-[6rem] mb-[5rem] flex  mx-8 gap-6'>
        <div className='p-4 ring-1 ring-gray-200 shadow-md rounded-2xl flex-[0.2]'>

          <div className='flex items-center'>
            <img src={require('../assets/Heroimg.png')} className='w-8 h-8 rounded-full'/>
            <div>
            <strong className='text-semibold'>Naa Shidaa Addo</strong>
            </div>
          </div>

          <div className=' mt-5'>
          <p className="text-gray-800 font-semibold text-1xl"></p>
          <p className="text-gray-800  text-1xl">Program:<br/> Computer Science</p><br/>
          <p className="text-gray-800 text-1xl">Batch: 2023</p>
          </div>
          <hr className='mt-5'></hr>
          <div className='mt-4'>
          <Link to ="/GradeReport"><p className="text-gray-800 font-semibold text-1xl">Grades</p></Link>
          <Link to ="/Reportform"><p className="text-gray-800 font-semibold text-1xl"> Report Form</p></Link>

          </div>




        </div>
        <div className='flex-1'>
          <div className="flex flex-col md:flex-row gap-7 mt-11 space-x-4">
            <div className="shadow-md p-3 rounded-2xl w-1/2">
              <h1 className="text-[2rem] font-bold text-gray-800 mb-2">Overview</h1>
              <div className="flex flex-1">
                <p>
                Welcome to the Dashboard! Here, you'll discover a detailed summary of your 
                current grades across various courses. Our system is designed to provide you 
               with a comprehensive and easily accessible view of your academic performance.
                Whether it's acing that last exam or excelling in a project, this is your go-to
                 place for tracking your achievements.
                </p>
              </div>
            </div>

            
            <div className="shadow-md p-3 rounded-2xl w-1/2">
            
            <div className='flex-1 '>
            <p className='flex flex-col md:flex-row gap-7 mt-11 '>
            <p>
             <p className='font-semibold text-red-400'>Current GPA</p>
             <h1 className='text-4xl font-semibold text-red-400 ml-3'>3.33</h1>
            </p>
            <p className=''>
             <p className='text-pink-400'>Total CGPA</p>
             <h1 className='text-4xl font-semibold text-pink-400 '>3.187</h1>
             <h1></h1>
            </p>
            <p className=''>
             <p className='text-green-800'>Total Performance Score</p>
             <h1 className='text-4xl font-semibold text-green-800 ml-12'>75%</h1>
             <h1></h1>
            </p>
            </p>
            </div>


               {/* the above will be art with fake figures and percenatges. those three things that are in the middle of a page */}

            </div>
          </div>

          <div className="md:flex gap-[-7] mt-11 space-x-4">
            <div className="flex flex-col mr-10  shadow-md p-7 rounded-2xl w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Alerts and Notifications</h1>
              <p>
              Here you'll see real-time updates about any missing grades or important information
              related to your courses. We understand the significance of staying informed, and 
              our system ensures you never miss a beat. It's your personal assistant in keeping
              you updated and in control of your academic progress. 
              </p>
            </div>



            <div className="flex flex-col md:ml-10 mr-10  shadow-md p-7 rounded-2xl w-1/2 ">
              <p>  
              <h1>Level 200, Semester 1</h1>
              <br></br>
              <li className='text-red-700'>DCIT 201 - Programming I -</li>
              <li className='text-red-700'>DCIT 203 - Digital and Logic Systems Design -</li>
              <li className='text-red-700'>DCIT 205 - Multi Media and Web Design -</li>
              <li className='text-red-700'>MATH 223 - Calculus II -</li>
              </p>
            </div>
           
        </div>
        </div>
      </div>
    </div>
    <div>
      <CurrentGrades/>
    </div>
  
      <Footer />

    </>

   
   
  )
}

export default Dashboard