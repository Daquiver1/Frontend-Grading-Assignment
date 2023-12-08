import React, { useEffect } from 'react';
import './LoginPage.css';

import user_pic from '../Accutrument/user_.png';
import open_padlock from '../Accutrument/open-padlock_.png';


const LoginPage = () => {

useEffect(() => {
    document.title = 'Login';
}, []);

  return (
    <div className='main'>
        <div>
            <img src={user_pic} alt="userpicture here" className='user1' />
        </div>
        <div className='user3'>
            <div className='placeholders'>
                <img src={user_pic} alt="" className='user2' />
                <input type="text" placeholder='Enter ID' />
            </div>
            <div className='placeholders'>
                <img src={open_padlock} alt="" className='user2'/>
                <input type="password" placeholder='******' />
        </div>
        </div>
        <div>
            <div className='log2'>
                <p>
                    <a href=" ">FORGOT PIN</a>
                </p>
            </div> 
            <div className='log1'>
                <a href="">LOGIN</a>
            </div>
        </div>
        
    </div>
  )
}

export default LoginPage
