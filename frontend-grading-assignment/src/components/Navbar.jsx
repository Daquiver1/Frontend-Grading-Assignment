import logo from "../images/logo.png"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt=""  style={{width: "70px", height: "60px"}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="grade-report">Grade Report</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="grade-form">Grade Form</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="instructor">Instructors Page</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="help">Help & Support</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;