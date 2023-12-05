import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components-css/Dashboard.css'
import { faCircleQuestion, faFileExcel, faGauge, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
    return (
        <>
            <div className='Dashboard'>
                <div className='sidebar'>
                    <div className="dashboard-logo">
                        <div className="dashboard-logo-icon">UG</div>
                        <div className="dashboard-logo-name">Student Report</div>
                    </div>
                    <div className='user'>
                        <img src={require('../Images/profile.jpg')} alt='male profile'/>
                        <div className='username'>Hello, Michael Bansah</div>
                    </div>
                    <div className='horizontal-line'></div>
                    <div className='nav-links active'>
                        <FontAwesomeIcon className="link-icon" icon={faGauge}/>
                        <div className='link-name'>Dashboard</div>
                    </div>
                    <div className='nav-links non-active'>
                        <FontAwesomeIcon className="link-icon" icon={faSquarePollVertical}/>
                        <div className='link-name'>Grade Report</div>
                    </div>
                    <div className='nav-links non-active'>
                        <FontAwesomeIcon className="link-icon" icon={faFileExcel}/>
                        <div className='link-name'>Missing Grade</div>
                    </div>
                    <div className='nav-links non-active'>
                        <FontAwesomeIcon className="link-icon" icon={faAddressBook}/>
                        <div className='link-name'>Instructor Contact</div>
                    </div>
                    <div className='nav-links non-active'>
                        <FontAwesomeIcon className="link-icon" icon={faCircleQuestion}/>
                        <div className='link-name'>FAQ</div>
                    </div>
                </div>
                <div className='dashboard-content'>

                </div>
            </div>
        </>
    );
}
 
export default Dashboard;