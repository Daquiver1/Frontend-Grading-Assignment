import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero  from "./components/Hero.jsx";
import Login from "./components/Login.jsx";


function App() {
  const [login, setLogin]=
  React.useState(false);
  const toggleLogin = () => { setLogin(!login);
  };

  return (
    <>
  <Navbar /> 
  <Hero  /> 
  <Login />
    </>
  );
};

export default App;
