import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    pin: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.studentId && formData.pin) {
      console.log('Logging in with:', formData);
      navigate('/dashboard');
    } else {
      console.log('Please enter both Student ID and Password');
    }
  };

  return (
    <div className="body mt-0">
      <section className="section1">
        <form action="">
          <h1 className="head">Login To GradeBooks</h1>
          <div className="inputbox">
            <ion-icon icon name="mail-outline"></ion-icon>
            <input
              type="id"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Student ID</label>
          </div>
          <div className="inputbox">
            <ion-icon icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" />I am a Student
            </label>
            <a href="#">Staff</a>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Log In
          </button>
          <div className="register">
            <p>
              Click here to <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
