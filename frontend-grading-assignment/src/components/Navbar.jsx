const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img style={{width: "70px", height: "60px"}} src="https://t4.ftcdn.net/jpg/03/03/86/39/360_F_303863981_YWaJTaCejcYxqzrbACNa60Aijtf5ztjO.jpg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active text-white fs-5 mx-2" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white fs-5" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white fs-5 mx-2" href="dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white fs-5 mx-2" href="#">Grade Report</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white fs-5 mx-2" href="#">Missing Grade</a>
                        </li>
                        <li className="nav-item text-white">
                        <a className="nav-link text-white fs-5 mx-2" href="#">Instructors Page</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white fs-5 mx-2" href="#">Help</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar