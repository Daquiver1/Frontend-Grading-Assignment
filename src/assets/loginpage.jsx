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
        <div>
            <h2>Login Page</h2>
            <form>
            <div>
            <label htmlFor = "studentID">StudentID:</label>
            <input type= "number"
            id = "studentID"
            value = {studentID}
            onChange={handleStudentIDChange}
            />
            </div>
            <div>
            <label htmlFor = "password">Pin:</label>
            <input type = "password" id ={password}
            onChange={handlePasswordChange}
            />
            </div>
            <button type = "button" onClick = {handleLogin}>
            Login
            </button>
            </form>
        </div>
    );
}

 export default LoginPage;
