import React from "react";
import './Styles/home.css';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };
    return ( 
        <div className="home">
        <h1>Home Page</h1><hr></hr>
        <h3>Welcome to the Grade Report System</h3>
        <p>This system is designed to enable students view their grades and also report their missing grades.</p>
        <p className="log">Login to access the features. 
        <button onClick={handleLogin}>Login</button>
        </p>
        </div>
     );
}
 
export default Home;
