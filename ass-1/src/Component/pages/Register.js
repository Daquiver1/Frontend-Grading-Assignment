import React, { useState } from "react";
import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="Login">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="full Name"
              required
            />
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              required
            />
            <label htmlFor="password">password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              required
            />
            <button className="Log" type="submit">
              Regiser
            </button>
          </form>
          <button className="link-btn">
            <a href="/Login">Already have an account? Login here.</a>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Register;
