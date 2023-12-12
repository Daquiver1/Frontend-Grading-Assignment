import React from "react";
import Navbar from "./Navbar";
import Help from "./pages/help";
import Home from "./pages/home";
import Login from "./pages/login";







function App() {
  let component;

  switch (window.location.pathname) {
    case "/help":
      component = <Help />;
      break;
    case "/home":
      component = <Home />;
      break;
    case "/login":
      component = <Login />;
      break;
    default:
      component = <Home />; // Default component if the path doesn't match any case
  }

  return (
    <>
    
      <Navbar />
     
      {component}
    </>
  );
}

export default App;
