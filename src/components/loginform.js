import React, { useState, useEffect } from "react";
import "./loginform.css";
import { FaCheckCircle } from 'react-icons/fa';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button } from "antd";
import MainPage from "./MainPage";
import AppRoutes from "./AppRoutes";


const LoginForm = () => {

    const navigate = useNavigate();
    const initialValues = {id: "", pin: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const navigateToContacts = () => {
        navigate('/');
      };

    const[popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => {
            showPopup("hide")
            navigate('/dashboard/main')
        }, 3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            popup();
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[0-9]+$/
        if (!values.id) {
            errors.id = "Student ID is required"
        } else if (!regex.test(values.id)) {
            errors.id = "Student ID must be a number"
        }
        if (!values.pin) {
            errors.pin = "PIN is required"
        } else if (!regex.test(values.pin)) {
            errors.pin = "PIN must be a number"
        }
        return errors;
    }

    return (
        <div className="login-cover">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Student ID </label>
                <input type="text" name="id" value={formValues.id} onChange={handleChange}/>
                <p>{formErrors.id}</p>

                <label>PIN</label>
                <input type="Password" name="pin" value={formValues.pin} onChange={handleChange}/>
                <p>{formErrors.pin}</p>
                <br/>

                <button type="submit" className="login-button">Login</button>
                <label className="pass-reset">Forgot Your Password?</label>
                
                <div className={popupStyle}>
                    <h3>Welcome</h3>
                    <br/>
                    <FaCheckCircle style={{fontSize:"45px"}}/>
                    <br/>
                    Login Successful
                    </div>
            </form>
        </div>
    )
}

export default LoginForm;