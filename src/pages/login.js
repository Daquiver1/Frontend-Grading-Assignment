import React, { Component } from 'react';
import '../pages/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        if(username === "11246331" && password === "1234"){
            alert("Login Successful!");
        } else {
            alert("Invalid Student ID or Pin.");
        }
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <label>
                    Student ID:
                    <input type="text" name="username" onChange={this.handleChange} />
                </label>
                <label>
                    Pin:
                    <input type="password" name="password" onChange={this.handleChange} />
                </label>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;