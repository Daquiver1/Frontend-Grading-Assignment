import { useState } from "react";
import { Link } from "react-router-dom";

const loginImg =
  "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp";

const Login = () => {
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Check your authentication logic here
    // For simplicity, let's assume authentication is successful
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Use Link to navigate to the home page if authenticated
      return <Link to="/home" />;
    } else {
      // Handle authentication failure (e.g., show an error message)
      console.error("Authentication failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"
    >
      <div className="md:w-1/3 max-w-sm">
        <img src={loginImg} alt="Login image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left"></div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Sign in with
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="number"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          min={5}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
        </div>
        <div className="text-center md:text-left">
          {/* Use Link to navigate to the home page */}
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
            <Link to="/home">Login</Link>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
