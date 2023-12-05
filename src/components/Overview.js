import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components-css/Overview.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Login from "./Login";

const Overview = ({login}) => {

        const [toggle, setToggle] = useState(true)
        const [loginForm, setLoginForm] = useState(false)
        const [innerWidth, setInnerWidth] = useState(window.innerWidth)
        useEffect(() => {
            const handleWindowResize = () => {
                setInnerWidth(window.innerWidth);
            };
            
            window.addEventListener('resize', handleWindowResize);
        
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, []);

        useEffect(() => {
            if(innerWidth > 600){
                setToggle(false)
            }
        },[innerWidth])
        
    console.log(login)
    return (
        <>  {loginForm === true ? <Login login={login} closeLogin={setLoginForm}/> : null}
            <div className="overviewPage">
                <div className="navbar">
                    <div className="logo">
                        <div className="logo-icon">UG</div>
                        <div className="logo-name">Student Report</div>
                    </div>
                    <div className="burger" onClick={() => {
                        setToggle(!toggle)
                    }}>
                        <FontAwesomeIcon className="bars" icon={faBars} />
                    </div>
                    {innerWidth <= 600 ? (toggle && 
                            <div className="nav">
                                <li className="nav-link" onClick={() => {
                                    setLoginForm(true)
                                }}>Login</li>
                                <li className="nav-link">Contact Us</li>
                                <li className="nav-link">About</li>
                            </div>)
                        : 
                            <div className="nav">
                                <li className="nav-link" onClick={() => {
                                    setLoginForm(true)
                                }}>Login</li>
                                <li className="nav-link">Contact Us</li>
                                <li className="nav-link">About</li>
                            </div>
                    }
                </div>
                <div className="intro">
                    <div className="intro-content">
                        <p className="intro-text">Welcome, login to check your <br/>academic report.</p>
                        <div className="intro-btn" onClick={()=> {
                            setLoginForm(true)
                        }}>Login</div>
                    </div>
                    <div className="intro-image">
                        <img src={require("../Images/overview-image.jpg")} alt="student learning"/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Overview;