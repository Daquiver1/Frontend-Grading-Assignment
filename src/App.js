import './App.css';


function App() {
  return (
    <>
    
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light "> 
      
          <button 
          type = "button"
          data-bs-toggle = "collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label= "Toggle Navigations"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="container">
          <div class="mx-auto">
          <div className="collapse navbar-collapse"
          id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Dash Board
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Grade Report
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Help And Support
                </a>
              </li>
            </ul>
          </div>
          </div>
          </div>

      </nav>

      <img src=""></img>

      <h1 className="text-center">Welcome to the missing grade system home page</h1>
      <h4 className="text-center">Your Grades are our concern</h4>

      <h4 class="text-center"> Thank you for being here.</h4>
      <h3 class="text-center">To Proceed please login into your account.</h3>
      

      <div className="container" id="SignUp-LogIn">
      
          <a className="btn btn-primary" id="Login-btn" href="#" role="button">login</a>
      
      </div>


      <footer class="bg-dark text-light text-center py-3">
        <div class="container">
            <p>2023 Your Website Name</p>
        </div>
      </footer>

    </>

  );
}

export default App;
