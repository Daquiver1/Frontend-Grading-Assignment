import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";
import React, { useState } from "react";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

const Login = (props) => {
  const [ID, setID] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ID);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="Login">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="ID">Student ID</label>
            <input
              value={ID}
              onChange={(e) => setID(e.target.value)}
              type="ID"
              placeholder="Your Student ID"
              id="ID"
              name="ID"
            />
            <label htmlFor="PIN">PIN</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="PIN"
              placeholder="********"
              id="PIN"
              name="Your PIN"
            />
            <button className="Log" type="submit">
              Log In
            </button>
          </form>
          <button className="link-btn">
            <a href="/Register"> Don't have an account? Register here.</a>
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";

// export const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">password</label>
//         <input
//           value={pass}
//           onChange={(e) => setPass(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Log In</button>
//       </form>
//       <button
//         className="link-btn"
//         onClick={() => props.onFormSwitch("register")}
//       >
//         Don't have an account? Register here.
//       </button>
//     </div>
//   );
// };

// export default Login;
