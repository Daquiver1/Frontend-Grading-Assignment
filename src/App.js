import { Space } from 'antd';
import React from 'react';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';
import AppFooter from './components/AppFooter';
import LoginForm from './components/loginform';
import MainPage from './components/MainPage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return <div className='App'>
    <AppHeader />
    <Space className='SideMenuAndPageContent'>
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </Space>
    <AppFooter />
  </div>
    // <React.Fragment>
    //   <BrowserRouter>
    //   <Navbar />
    //   <MainPage />
    //   </BrowserRouter>
    // </React.Fragment>
    // <div className='login-page'>
    //   <LoginForm />
    // </div>
}

export default App;
