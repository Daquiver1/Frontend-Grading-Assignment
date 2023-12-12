import "../Components-css/login-page.css"
import Dashboard from "./Dashboard";
const LoginPage = ({setPage}) => {
    return ( 
        <div className="LoginPage">
            <div className="Login-form">
                <div className="Login-title">
                    Login
                </div>
                <div className="Login-input">
                    <input type="text" placeholder="Student-ID"/>
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="Login-button" onClick={()=> {
                    setPage("dashboard")
                }}>
                    Login
                </div>
            </div>     
        </div>
     );
}
 
export default LoginPage;