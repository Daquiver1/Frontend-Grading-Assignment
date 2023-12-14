import Home from "./components/pages/Landing-Page/Home";
import Login from "./components/pages/Login/Loginform";
import{
  BrowerRouter,
  BrowserRouter,
  Route,
  Routes,
  route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
