import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Footer from './Footer';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentID: '',
    studentPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', formData);

    navigate('/dashboard');
    setFormData({ studentID: '', studentPin: '' });
  };

  return (
    <div className="login-page">
      <div className="page-body-one">
        <div className="welcome">Login</div>
        <div className='section'>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-text-box'>
              <input
                className='student-id'
                type="number"
                placeholder='Student ID'
                id="studentID"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                required
              />

              <input
                className='pin'
                type="number"
                placeholder='Pin'
                id="studentPin"
                name="studentPin"
                value={formData.studentPin}
                onChange={handleChange}
                required
              />

              <button className='login-button' type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
