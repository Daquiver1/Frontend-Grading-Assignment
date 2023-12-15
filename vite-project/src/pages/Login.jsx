import React from 'react'

const Login = () => {
  return (
    <div className='cover'>
      <div>
        <h1>Sign In</h1>
        <p>Please log in to your account</p>
        <input type="text"  placeholder="Enter Student's ID"/>
        <input type="text" placeholder='Enter Password' />
        
        <input type="checkbox" name="" id="" /><span>keep me logged in</span>      
        <button>Sign in</button>
        <br /><hr/>
        
        <button>Sign in with Google <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" /></button>
        <p>Forgot Password <a href="">Recover password</a></p>
      </div>
      <div  className ="image">
        <img src="https://media.istockphoto.com/id/1456927470/photo/encryption-your-data-unique-digital-lock-big-data-security-safe-your-data-cyber-internet.webp?b=1&s=170667a&w=0&k=20&c=uoJhpm3PxHurto8K132S-s8Is49reVKVKZ98e_9knFo=" alt="" />
      </div>
    </div>
  )
}

export default Login