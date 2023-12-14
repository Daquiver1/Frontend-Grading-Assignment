import React from 'react';
import { useNavigate } from 'react-router-dom';

import login from '../images/login.jpg'



const LoginPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Dashboard');
  };

  return (
    <div className='grid grid-cols-2' >
        <div className='bg-gray-200' style={{ height: '800px' }}>
          <div className='align-middle'>
            <img src={login} alt='hid with books' style={{height: '400px', margin:'100px', marginBottom: '0px', marginLeft: '140px', marginTop: '130px'}}/> 
          </div>
          <div className='pb-0 text-3xl text-center pt-0 mt-0 '>
            <p>
              <b>Track and Manage <br/> Your Grades with Ease</b>
            </p>
          </div>
          <div className='text-center'>
            <p>All your courses, assignments and grades <br/> in one place.</p>

          </div>
        </div>
        <div className='details_div'>
            <div className='flex justify-end text-3xl pr-4 mt-4'>
              <b>GradeQuest</b>
            </div>
            <div className='flex justify-end pr-4 text-xl'>
            <p>Grade Track</p>
            </div>
            <div className='justify-start mt-32 pt-26 pl-32 text-2xl'>
              <b>Login</b>
            </div>
            <div className='justify-start pl-32 pt-10'>
              <form >
                <p>
                  Student Name 
                </p>
                <br/>
                <div className='border-solid black'>                
                  <input type='text' placeholder='Enter Your Full Name ' style={{border: '1px solid gray',borderRadius: '5px', width: '350px', padding:'3px'}}/>
                </div>
                <div className='border-solid black pt-9 shadow-black'> 
                  <p>
                    Password
                  </p> 
                  <br/>
                    <input type='text' placeholder='Enter Your Password ' style={{border: '1px solid gray', borderRadius: '5px', width: '300px', padding: '3px'}}/>
                  </div>
                  <div className='pt-6 '>
                    <button onClick={handleClick} style={{background:'grey', color: 'whitesmoke', padding: '2px', borderRadius: '5px', width:'100px'}}>Submit</button>
                  </div>
              </form>
              
            </div>
        </div>
    </div>
  )
}

export default LoginPage;