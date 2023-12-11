  import './App.css';
  import Header from './Header';
  import Landingpage from './Landingpage';
  import Loginpage from './Loginpage';
  import Dashboardpage from './Dashboardpage';
  import Gradereportpage from './Gradereportpage';
  import Contactpage from './Contactpage';
  import Helpandsupport from './Helpandsupport';
  import Navigationpage from './Navigationpage';

  function App() {
 
  
  return (
      <div className="App">
       <Header />
       <Landingpage />
       <Loginpage />
       <Dashboardpage />
       <Gradereportpage />
       <Contactpage />
       <Helpandsupport />
       <Navigationpage />
      </div>
    );
  }

  export default App;