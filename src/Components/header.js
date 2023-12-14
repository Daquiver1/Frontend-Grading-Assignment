export default function Header() {
    return(
        <>
  
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark"> 
    
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
                    <a href="/Home" className="nav-link">
                    Home
                    </a>
                </li>
                </ul>
                <ul className="navbar-nav">
                
                <li className="nav-item active">
                    <a href="/QuickContactUs" className="nav-link">
                    Contact Us
                    </a>
                </li>
                <li className="nav-item active">
                    <a href="/HelpAndSupport" className="nav-link">
                    Help And Support
                    </a>
                </li>
                </ul>
            </div>
            </div>
            </div>

        </nav> 


        </>
    ) 
}