import { useContext } from 'react';
import user_icon from '../assets/icons/user_icon.png'
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../StudentContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faEnvelope, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';


const TopNav = () => {

    const { student, setStudent } = useContext(StudentContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setStudent({
            studentId: "",
            studentPassword: "",
            rememberStd: false
        });
        navigate("/login");
    }

    // Define user data
    const userData = {
        name: student ? student.studentId : "Guest",
        profileImage: user_icon,
    };

    // Define messages data
    const messagesData = [
        { 
            image: user_icon,
            status: 'bg-success',
            text: "Hi there! I am wondering if you can help me with a problem I've been having.",
            author: 'Emily Fowler',
            timestamp: '58m',
        },
        {
            image: user_icon,
            status: 'bg-warning',
            text: 'I have the photos that you ordered last month, how would you like them sent to you?',
            author: 'Jae Chun',
            timestamp: '1d',
        },
        {
            image: user_icon,
            status: 'bg-success',
            text: 'Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!',
            author: 'Morgan Alvarez',
            timestamp: '2d',
        },
    ];

    // Define alerts data
    const alertsData = [
        {
            icon: faFileAlt,
            color: 'bg-primary',
            date: 'December 12, 2019',
            content: 'You grade for the course CS 101 has been posted.',
        },
        {
            icon: faFileAlt,
            color: 'bg-success',
            date: 'December 7, 2019',
            content: 'You grade for the intent assignment for CS 103 has been posted.',
        },
        {
            icon: faFileAlt,
            color: 'bg-warning',
            date: 'December 2, 2019',
            content: 'You grade for the course CS 103 has been posted.',
        },
        
    ];

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* Sidebar Toggle (Topbar)*/}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* Topbar Search*/}
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control 
                                bg-light border-0 small" 
                                placeholder="Search for..."
                                aria-label="Search" 
                                aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* Topbar Navbar*/}
                    { student.studentId !== "" ? (                       
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS)*/}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                    {/* Dropdown - Messages*/}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." 
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <FontAwesomeIcon icon={faSearch} />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                {/* Nav Item - Alerts*/}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faBell} />
                                        {/* Counter - Alerts*/}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* Dropdown - Alerts*/}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        {alertsData.map((alert, index) => (
                                            <a className="dropdown-item d-flex align-items-center" href="#" key={index}>
                                                <div className="mr-3">
                                                    <div className={`icon-circle ${alert.color}`}>
                                                        <i className={alert.icon}></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="small text-gray-500">{alert.date}</div>
                                                    {alert.content}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </li>

                                {/* Nav Item - Messages*/}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        {/* Counter - Messages*/}
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                    {/* Dropdown - Messages*/}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        {messagesData.map((message, index) => (
                                            <a className="dropdown-item d-flex align-items-center" href="#" key={index}>
                                                <div className="dropdown-list-image mr-3">
                                                    <img 
                                                        className="rounded-circle" 
                                                        src={message.image}
                                                        alt="..."
                                                    />
                                                    <div className={`status-indicator ${message.status}`}></div>
                                                </div>
                                                <div>
                                                    <div className="text-truncate">{message.text}</div>
                                                    <div className="small text-gray-500">{message.author} · {message.timestamp}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>

                                {/* Nav Item - User Information*/}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userData.name}</span>
                                        <img 
                                            className="img-profile rounded-circle"
                                            src={userData.profileImage}
                                        />
                                    </a>
                                    {/* Dropdown - User Information*/}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faUser} />
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faBell} />
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item" onClick={handleLogout}>
                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                            Logout
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        ) : (
                            // login button
                            <button className="btn btn-primary" onClick={() => navigate("/login")}>
                                Login
                            </button>
                        )
                    }
                </nav>
    );
    }

export default TopNav;
