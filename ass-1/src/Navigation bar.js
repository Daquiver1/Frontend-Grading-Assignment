const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">MENU</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a href="HomePage">Home</a>
                </li>
                <li>
                  <a href="LoginPage">Login</a>
                </li>
                <li>
                  <a href="DashboardPage">Dashboard</a>
                </li>
                <li>
                  {" "}
                  <a href="GradeReportPage">Report Grade</a>
                </li>
                {/* <li>
                  {" "}
                  <a href="MissingGradeFormPage">Missing Grade Form Page</a>
                </li>
                <li>
                  {" "}
                  <a href="MissingGradeFormPage">Missing Grade Form Page</a>
                </li> */}
                <li>
                  <a href="Help and Support Page">Help </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
