import Footer from "../Components/footer";

export default function Sidebar() {
    return(
        <>    


        <button 
        type = "button"
        data-bs-toggle = "collapse"
        data-bs-target="#sidenav"
        className="navbar-toggler"
        aria-controls="sidenav"
        aria-expanded="false"
        aria-label= "Toggle Navigations"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div class="" id="sideNav">
            b5-re
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        </div>

        <div class="content">
            <h1>Your Page Content</h1>
            <p>Scroll down to see the fixed sidebar in action while the content moves.</p>
     
        </div>
            <h1>dgdf</h1>
        </>
    ) 
}

