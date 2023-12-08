import "./index.css";
import Login from "./components/Pages/Login";
import Missing from "./components/Pages/Missing";
import Home from "./components/Pages/Home";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Missing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
