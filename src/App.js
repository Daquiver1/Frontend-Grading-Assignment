import { useState } from "react";
import LoginPage from './components/Loginpage';
import Dashboard from './components/Dashboard';




const App = () => {
 
    const [login, setLogin] = useState(false);


    return (
      
        <>
         
            {
                login === false ? <LoginPage onLogin={setLogin} /> : <Dashboard/>  
            }
        </>
    );
}
 
export default App;