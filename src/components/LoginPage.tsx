import "./component.css";
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsHuman(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="body">
      <img
        className="logo"
        style={{ paddingLeft: "500px" }}
        src="images/logo.jpeg"
        alt="School logo"
      />
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <legend>Login</legend>
          <div>
            <label htmlFor="username">Student ID:</label>
            <input
              type="text"
              id="username"
              value={Number}
              onChange={handleUsernameChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Pin:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <br />
          <button type="submit">Login</button> <br /> <br />
          <button type="submit">Forgot pin </button>#
          <button type="submit">Change pin</button>#
          <button type="submit">Forgot Student Id</button>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPage;
