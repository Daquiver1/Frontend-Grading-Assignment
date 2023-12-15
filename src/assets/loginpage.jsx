import React,{useState} from 'react'


const LoginPage = () =>{
    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');

    const handleStudentIDChange = (event) => {
        setStudentID(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleLogin = () => {
        console.log('StudentID:',studentID);
        console.log('Password:',password);
    };
    

    return (
        <div className='login'>
            <h2>Login Page</h2>
            <form>
            <div className = "hold">
            <label htmlFor = "studentID">StudentID:</label>
            <input type= "number" className='input'
            id = "studentID"
            value = {studentID}
            onChange={handleStudentIDChange}
            />
            </div>
            <div className='hold'>
            <label htmlFor = "password">Pin    :</label>
            <input className= 'input' type = "password" id ={password}
            onChange={handlePasswordChange}
            />
            </div>
            <button className='submit' type = "button" onClick = {handleLogin}>
            Login
            </button>
            </form>
        </div>
    );
}

 export default LoginPage;
