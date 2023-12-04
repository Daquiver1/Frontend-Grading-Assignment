
import './App.css';
import Mybars from './Mybars';
import Home from './Home';
const title="Welcome to the Ask Me app ";
const likes= 1500;
const link="htttp://www.google.com";

function App() {
  return (
  <div className='App'>
    <Mybars></Mybars>
    <div className='content'>
     <Home/>
      <p>Liked {likes} times</p>
      <a href={link}>Google site</a>
    </div>
  </div>
    
          
  );
}

export default App;
