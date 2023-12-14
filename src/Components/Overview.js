import { useState } from "react"
import "../Components-css/overview.css"
import LoginPage from "./Login-page"
import Dashboard from "./Dashboard"
const Overview = () => {
    const [page, setPage] = useState("overview")
    const [login, setLogin]=useState(false)
    const [auth,  setAuth]=useState("login")
   
    return( 
        <>
        { 
        page === "overview" && login === false ? <div className="overview">
            <div className="navbar">
                <div className="logo">
                <span>
                    Student Report System
                </span>
                </div>
                <div className="navlinks">
                    <li>Overview</li>
                    <li>Login</li>
                    <li>About</li>
                    
                </div>
            </div>
            <div className="Introduction">
                <div className="Introduction-text">
                    <p>
                        LOGIN TO CHECK YOUR REPORT
                    </p>
                </div>
                <div className="Login-button" onClick={()=>{
                    setLogin(true)
                }}>
                    Login
                </div>

            </div>
        </div> : (
            login === true && page === "overview" ? <LoginPage setPage={setPage}/> : (
                page === "dashboard" ? <Dashboard/> : null 
            )
        )}
        </>
        
    )
}
export default Overview;