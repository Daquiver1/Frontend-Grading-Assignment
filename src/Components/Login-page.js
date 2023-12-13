import "../Components-css/login-page.css"
import { useState } from "react";
const LoginPage = ({setPage}) => {
    const [studentId, setStudentID] = useState("")
    const [password, setPassword] = useState("")
    const handleAuth = () => {
        if(studentId !== "" && password !== ""){
            setPage("dashboard")
        }else {
            alert("Please fill in the login form.")
        }
    }
    return ( 
        <div className="LoginPage">
            <div className="Login-form">
                <div className="Login-title">
                    Login
                </div>
                <div className="Login-input">
                    <input type="text" value={studentId} onChange={(e)=> {
                        setStudentID(e.target.value)
                    }} placeholder="Student-ID"/>
                    <input type="text" value={password} onChange={(e)=> {
                        setPassword(e.target.value)
                    }} placeholder="Password"/>
                </div>
                <div className="Login-button" onClick={handleAuth}>
                    Login
                </div>
            </div>     
        </div>
     );
}
 
export default LoginPage;