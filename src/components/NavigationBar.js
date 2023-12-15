import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Layout.css';

const Navigationbar = () => {
    return (
      <Layout>
      <nav className="navigationbar">
      
        <Link to="/LoginPage">LoginPage</Link>
       
      </nav>
      </Layout>
    );
  };
  
  export default Navigationbar;
  