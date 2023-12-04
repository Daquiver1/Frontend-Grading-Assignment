import logo from './logo.svg';
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

      <h1 class="text-center">Welcome to the missing grade system home page</h1>
      <h1 class="text-center">Your Grades are our concern</h1>

      <h2 class="text-center">To Proceed please login into your account.</h2>

      


      




      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>


    </>

  );
}

export default App;
