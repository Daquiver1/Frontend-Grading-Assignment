import React from 'react';

import Navbar from './components/navbar';
import Main from './components/appmain';
import Login from './components/login';
import Footer from './components/footer'; 

function App() {
 return (
  
  <React.Fragment>
      <Navbar />
      <Main />
     
      <Footer /> 
      </React.Fragment>
 );
}

export default App;