import React from 'react'

const Login = () => {
  return (
    <div className='cover'>
      <div>
        <h1>Sign In</h1>
        <input type="text"  placeholder="Enter Student's ID"/>
        <input type="text" placeholder='Enter Password' />
        <div className='checkBox'>
        <input type="checkbox" name="" id=""  />
        <p>keep me updated</p>     

        </div>
        <br /><hr/>
        
        
        <button className='sign-btn'>Sign in with Google
        
        </button>
        <p className='fpass'>
        <a href=''>forgot password</a>

        </p>

      </div>
      <div  className ="image">
        <img src="https://media.istockphoto.com/id/1456927470/photo/encryption-your-data-unique-digital-lock-big-data-security-safe-your-data-cyber-internet.webp?b=1&s=170667a&w=0&k=20&c=uoJhpm3PxHurto8K132S-s8Is49reVKVKZ98e_9knFo=" alt="" />
      </div>

    </div>
  )
}

export default Login