import{ useNavigate } from 'react-router-dom'
import React from "react";
import "./loginform.css"
import { Route } from "react-router-dom";

const handeleClick = () => {
    
}


const Dashboard = () => {
const navigate = useNavigate();
const handlebuttonClick = () => {
    navigate('/dashboardaftlogin')
};

    return ( 
        <div>
            <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="Pin" />
        
    <button onClick={handeleClick()}>Login</button>

        </div>
        </div>
     );
}
 
export default Dashboard;