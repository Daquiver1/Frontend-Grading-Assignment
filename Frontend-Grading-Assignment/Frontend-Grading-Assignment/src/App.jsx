import { useState } from 'react';
import Logo from './assets/logo.jpeg';


function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email,password);
  }
  return (
    <>
     <div className='container'>
     <img src={Logo} alt='University of Ghana' />
     <h1>Grading System</h1>
     <form onSubmit={(e) => handleSubmit(e)}>
      <div className="inputContainer">
        <p>Student ID</p>
        <input value= {email} 
        onChange={(e) => setEmail(e.target.value)}
        type = 'text'
        />
      </div>
      <div className='inputContainer'>
        <p>PIN</p>
        <input value= {password} 
        onChange={(e) => setPassword(e.target.value)} type='password'/>
      </div>
      <div className='bottomForm'>
        <button type='submit'>Login</button>
        </div>
        <div className='links'>
          <p>New User?</p>
          <p>Forgot PIN?</p>
        </div>
     </form>
     <small className='copyright'>&copy; 2023 Derrick Edusei</small>

     </div>
    </>
  )
}

export default App
