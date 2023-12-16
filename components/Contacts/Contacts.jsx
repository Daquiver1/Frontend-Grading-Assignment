

import React from 'react';
import NavBar from './Navbar/NavBar'; 
import UserInfo from './UserInfo/UserInfo'; 
import Footer from './Footer/Footer'; 
import './Contacts.css'; 

const Contacts = () => {
  return (
    <div className="contacts-page">
      <NavBar />
      <UserInfo />

      <div className="contacts-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:ug.support@edu.gh">ug.support@edu.gh</a></p>
        <p>Telephone: 0535890877</p>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
