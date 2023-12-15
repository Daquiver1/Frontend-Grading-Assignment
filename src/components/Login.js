import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components-css/Login.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Login = ({closeLogin, login}) => {
    const [studentId, setStudentId] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if(studentId !== "" && password !== ""){
            login(true)
        } else {
            alert("Please fill in the login form.")
        }
    }
    return (
        <>
            <div className="Login">
                <div className='login-form'>
                    <FontAwesomeIcon className='Xmark' onClick={() => {
                        closeLogin(false)
                    }} icon={faXmark} />
                    <div className='title-and-inputs'>
                        <div className='login-title'>Welcome</div>
                        <div className='login-inputs'>
                            <input type='text' value={studentId} onChange={(e) => {
                                setStudentId(e.target.value)
                            }} className='student-id-input' placeholder='Student ID...'/>
                            <input type='password' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} className='student-id-input' placeholder='Password/Pin...'/>
                        </div>
                    </div>
                    <div className='login-btn' onClick={handleLogin}>Login</div>
                    <p className='forgotten-pass'><a href='#forgot'>Forgotten Password/Pin?</a></p>
                </div>
            </div>
        </>
    );
}
 
export default Login;