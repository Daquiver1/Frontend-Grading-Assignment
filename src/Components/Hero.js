import React from 'react'
import Button from './Button';
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div>
        <div className=' p-[5rem] bg-white w-full py-44'> 
           <div className='max-w-[1480px] m-auto grid grid-cols-2'>

               <div className='pl-[2rem] pt-[2rem]'>
                <p className='text-3xl font-bold'>Welcome to the<br></br>Missing Grade Reporting System</p><br></br>
                <p className='text-xl'>Our system provides a seamless way for students to track,<br></br>
                   report, and manage missing grades in their academic profiles.<br></br>
                   With a user-friendly interface, real-time alerts, and secure<br></br>
                   authentication, you can take control of your academic progress
                   like never before.</p><br></br>
               <div className='text-xl ml-[-2rem]'//Right below the text above, on pc and on mobile
               >
            
                <Link to="/Login">
                  <Button>
                    Login Now
                  </Button>
                </Link>

               </div>
                
               </div>
               

               <img src={require('../assets/Heroimg.png')} alt="HeroImg" className='w-[130%] max-w-none h-auto ml-[-5rem] mt-[-5rem]'/>
           </div>
          
          
        </div>
    </div>
  )
}

export default Hero;



/*<div>
<img src={require('./R.png')} alt='Rafika' className='w-[90%] max-w-none h-auto rounded-md'/>
</div>*/