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

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="body">
      <img src="images/logo.png" alt="School logo" />
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <legend>Login</legend>
          <div>
            <label htmlFor="username">Student ID:</label>
            <input
              type="text"
              id="username"
              value={username}
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
          <div>
            <label>
              <input
                type="checkbox"
                checked={isHuman}
                onChange={handleCheckboxChange}
              />
              I am a human
            </label>
          </div>
          <button type="submit">Login</button> <br /> <br />
          <button type="submit">Forgot pin</button>
          <button type="submit">Change pin</button>
          <button type="submit">Forgot Student Id</button>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPage;
