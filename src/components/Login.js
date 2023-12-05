import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components-css/Login.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Login = ({closeLogin, login}) => {
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
                            <input type='text' className='student-id-input' placeholder='Student ID...'/>
                            <input type='password' className='student-id-input' placeholder='Password/Pin...'/>
                        </div>
                    </div>
                    <div className='login-btn' onClick={() => {
                        login(true)
                    }}>Login</div>
                    <p className='forgotten-pass'><a href='#forgot'>Forgotten Password/Pin?</a></p>
                </div>
            </div>
        </>
    );
}
 
export default Login;