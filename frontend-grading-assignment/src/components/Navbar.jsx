const Navbar = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                      <i class="bi bi-mortarboard-fill text-white fs-1"></i>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active m-2 text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link m-2 text-white" href="#">Login</a>
                            </li>
                            
                            <li class="nav-item">
                               <a class="nav-link m-2 text-white" aria-disabled="true">Dashboard</a>
                            </li>
                            <li class="nav-item">
                               <a class="nav-link m-2 text-white" aria-disabled="true">Report Grade</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link m-2 text-white" aria-disabled="true">Missing Grade</a>
                            </li>

                            <li class="nav-item">
                               <a class="nav-link m-2 text-white" aria-disabled="true">Contact</a>
                            </li>

                            <li class="nav-item">
                              <a class="nav-link m-2 text-white" aria-disabled="true">Help & Support</a>
                            </li>
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;