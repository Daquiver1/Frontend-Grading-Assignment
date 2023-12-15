 import React, { useState } from "react"

 export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }



  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login' onSubmit={handleSubmit}>
        <label htmlFor='name'>Full name</label>
        <input value={name} name='name' id='name' placeholder='full Name' />
        <label for='email'>email</label>
        <input value={email} type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
        <label for='password'>password</label>
        <input value={email} type='password' placeholder='********' id='password' name='password'/>
        <button type='submit'>Login</button>
      </form>
      <button>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login