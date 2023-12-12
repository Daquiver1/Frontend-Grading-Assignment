import propTypes from 'prop-types';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Footer } from "./Footer";

export const Reallog = ({setshowLog}) => {
    
    const[password, setPassword] = useState('');
    const [studentID , setStudentID] = useState('')
    const[email, setEmail] = useState('');

    const handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value)
    }
    const handleStudentId = (event) =>{
        event.preventDefault()
        setStudentID(event.target.value);
        }

        const handleshowlog = () => {
            setshowLog(false)
        }
   
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    const handleSubmit =  (event) =>{
        event.preventDefault();
       
        if (!validateEmail(email)) alert("Please enter your valid e-mail address")
        if(password === '11294254'){
             document.querySelector('#password').style.color = 'red'
        }
        if(studentID === '2345'){
            document.querySelector('#input1').style.color = '#f52a21'
        }
        
    }
   return(
    <main className="mainn">
    <div className="firstBar">
<div className="uglogo">
  <img src="src\assets\CSLOGO.jpg" alt="Example" height={30} width={150} />
 <div className="btn">
    <button className='btn1'> student Login</button>
    <button className='btn2'> Admin  Login</button>
 </div>
</div>
</div>

<div className="secondBar">
<h1>Login </h1>
<div className="user">
<FaUser color='#8c1515' />
</div>
</div>
<div className="logtext">
    <h3>login info</h3>
    <p>Please enter your Student ID/Email and password to log in. Email address can either be the school issued omail address or the personal email address we have on file. When first logging in, enter the password you set up with your application.

    Forgotten Student IDs or passwords can be obtained by clicking on the Forgot Student ID/Password link below. You will need to enter your school or personal email address we have on file and your birth date for verification purposes. For assistance, please contact Student Services here or student accounts here.

    </p>
</div>
<div className='formm'>
    <form action="" onSubmit={handleSubmit} className='fform'>
       <section> <h1>Login</h1></section>
        <input type="email" className='email'
        placeholder='Student Email'
        onChange={handleEmail}
        id='input1'/>
        <input type="text" name="" id="input1" placeholder='student ID' 
        onChange={handleStudentId}
        style={{color: studentID === '11294254' ? 'silver' : 'red'}}
        />

        <input type="password" placeholder='password' onChange={handlePassword} 
        id='input1'  />
        <a href="" style={{color:'rgb(131, 127, 127)'}}>forgot password?d</a>
        <div className='check'><input type="checkbox" name="" id="" /><p>By logging in you agree to the terms of use and acknowledge receipt of the privacy policy.</p></div>
        <button className="login" onClick={handleshowlog}>Login</button>
    </form>
</div>

<Footer />
</main>
   )
}
Reallog.propTypes = {
    setshowLog: propTypes.func
  };

