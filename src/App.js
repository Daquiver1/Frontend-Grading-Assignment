import React from 'react';
import LoginForm from './components/loginform';
import MainPage from './components/MainPage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
      <MainPage />
      </BrowserRouter>
    </React.Fragment>
    // <div className='login-page'>
    //   <LoginForm />
    // </div>
  );
}

export default App;
