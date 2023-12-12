import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/Navbar";
function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    studentID: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    
  
    <div className="text-center">
      <Navbar/>
      <h3>LOGIN FORM</h3>
      <form className="d-flex flex-column col-lg-6 col-md-10 col-sm-11 mx-auto border rounded pt-5 shadow-lg">
        <input
          type="text"
          name="studentsID"
          className="mb-3 p-1"
          placeholder="studentsID..."
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="mb-3 p-1"
          placeholder="pin..."
          onChange={handleChange}
        />
        <button
          type="button"
          className="mb-1 btn btn-secondary"
          onClick={handleSubmit}
        >
          LOGIN
        </button>
        {err && <small className="text-danger mb-1">{err}</small>}
        <p>
          <Link to="/login">forgotten password? </Link>
        </p>
        <p>
          New member in here? <Link to="/register">register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
