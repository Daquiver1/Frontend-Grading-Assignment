import { useState } from "react";

// Local Imports
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";

function App() {
  const [login, setLogin] = useState(false)

  return (
    <> 
      { login === true ? <Dashboard logout={setLogin}/> : <Overview login={setLogin}/> }
    </>
  );
}

export default App;
