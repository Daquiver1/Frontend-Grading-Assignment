import React from 'react'
import Navbar from '../components/Navbar'


export const Login = () => {
    return(
        <form>
            <Navbar></Navbar>
            <label for="email">email</label>
            <input type="email" placeholder= "your email@gmail.com" />
        </form>
    );
};
