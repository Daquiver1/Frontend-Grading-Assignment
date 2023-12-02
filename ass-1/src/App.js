import NavBar from "./Navigation bar";
import HomePage from "./home";
const title = "Welcome";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Title">
        <h1 className="title">{title}</h1>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
