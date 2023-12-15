import React, {useState} from 'react'
import './loginpage.css'

const LoginPage = ({onLogin}) => {
    const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');
    const [login, setLogin] = useState(false);
    const [action, setAction] = useState(false)

    const handleLogin = () => {
       if(studentId != "" && pin != "") {
        onLogin(true)
      } else {
        alert('Invalid credentials');  
      }
    };

  return (
    <>
    {
      <div className='LoginPage'>
        <div className ='container'>
          <div className='Header' >
            <div className='text'>Login</div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
            <div className='input'>
              <img src="" alt=''/>
              <input type = "text" placeholder="ENTER YOUR STUDENT ID"  value={studentId}
                onChange={(e) => setStudentId(e.target.value)}/>
            </div>
            <div className='input'>
              
              <input type = "password" placeholder="ENTER YOUR PIN"  value={pin}
                onChange={(e) => setPin(e.target.value)}/>
            </div>
          </div>
          <div className='forgot-pin'>Lost Pin? <span>click here!</span></div>
          <div className= 'submit-container'> 
          {/* submit-container not conatiner */}
            <div className='submit' onClick={handleLogin}>Login</div>
          </div>
        </div>
        
      </div>
    }
    </>
    )
}
export default LoginPage;