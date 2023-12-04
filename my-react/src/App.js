import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

/*--components--*/
import Dashboard from './components/Dashboard/Dashboard';









function App() {
  return (
    <div className="App">
      <Router>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
