import React, { useState } from 'react';
import './MainSession.css';

export const MainSession = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [courseStatus, setCourseStatus] = useState('finished');

  
  const courses = {
    inProgress: [
      { name: 'REACT JS', progress: '80%' },
      { name: 'BOOTSTRAP', progress: '50%' },
      { name: 'FLASK', progress: '30%' },
    ],
    explore: [
      { name: 'Python', progress: '0%' },
      { name: 'JAVA', progress: '0%' },
      { name: 'PHP', progress: '0%' },
    ],
    incoming: [
      { name: 'NODE JS', progress: '0%' },
      { name: 'VUE JS', progress: '0%' },
      { name: 'ANGULAR', progress: '0%' },
    ],
    finished: [
      { name: 'HTML', progress: 'B', status: 'completed' },
      { name: 'CSS', progress: 'A', status: 'completed' },
      { name: 'JAVASCRIPT', progress: 'B+', status: 'completed' },
    ],
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleTabClick = (status) => {
    setCourseStatus(status);
  };
  const getCourseIcon = (courseName) => {
    switch (courseName.toLowerCase()) {
      case 'html':
        return <i className="fab fa-html5  html" />;
      case 'css':
        return <i className="fab fa-css3-alt  css" />;
      case 'javascript':
        return <i className="fab fa-js-square  js" />;
      case 'react':
        return <i className="fab fa-beer react" />;
      case 'bootstrap':
        return <i className="fab fa-bootstrap bootstrap" />;
      case 'java':
        return <i className="fab fa-java java" />;
      case 'php':
        return <i className="fab fa-php php" />;
      case 'python':
        return <i className="fab fa-python python" />;
      case 'node js':
        return <i className="fab fa-node node" />;
      case 'vue js':
        return <i className="fab fa-vuejs vue" />;
      case 'angular':
        return <i className="fab fa-angular angular" />;
      case 'flask':
        return <i className="fas fa-flask flask" />;
      case 'react js':
        return <i className="fab fa-react  react" />;
      default:
        return null;
    }};

  return (
    <>
    <div className='MainSession'>
      <div className='main-top'>
        <h1>Remainders</h1>
        <div className='notification-icon' onClick={toggleNotifications}>
          <i className='fas fa-bell'></i>
          <span className='notification-number'>3</span>
        </div>
        {showNotifications && (
          <div className='notification-dropdown show'>
            <div className='notification-item'>
              <i className='fas fa-envelope'></i>
              <div className='notification-item-content'>
                <div className='notification-item-title'>New Message</div>
                <div className='notification-item-message'>You have a new message</div>
                <div className='notification-item-time'>2 minutes ago</div>
              </div>
            </div>
            <div className='notification-item'>
              <i className='fas fa-bell'></i>
              <div className='notification-item-content'>
                <div className='notification-item-title'>New Notification</div>
                <div className='notification-item-message'>You have a new notification</div>
                <div className='notification-item-time'>5 minutes ago</div>
              </div>
            </div>
             <div className='notification-item'>
              <i className='fas fa-exclamation-triangle'></i>
              <div className='notification-item-content'>
                <div className='notification-item-title'>Missing Grade Alert</div>
                <div className='notification-item-message'>You have a missing grade in a course.</div>
                <div className='notification-item-time'>Check your progress to resolve it.</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="main-skills">
          <div className="card">
            <i className='fab fa-python python'>
              <h3>Python test</h3>
              <p>Wednesday</p>
              <button>4 pm</button>
            </i>
          </div>
          <div className="card">
          <i class='fab fa-bootstrap bootstrap'>
              <h3>Bootstrap test</h3>
              <p>Thursday</p>
              <button>10am</button>
            </i>
          </div>
          <div className="card">
            <i className='fas fa-flask js'>
              <h3>Flask</h3>
              <p>Friday</p>
              <button>2pm</button>
            </i>
          </div>
          <div className="card">
            <i className='fa fa-app-store-ios html'>
              <h3>IOS dev Bootcamp</h3>
              <p>Saturday</p>
              <button>11am</button>
            </i>
          </div>
      </div>
      <div className='main-course'>
          <h2>My courses</h2>
          <div className='course-box'>
          <ul>
            <li onClick={() => handleTabClick('inProgress')} className={courseStatus === 'inProgress' ? 'active' : ''}>
              In progress
            </li>
            <li onClick={() => handleTabClick('explore')} className={courseStatus === 'explore' ? 'active' : ''}>
              Explore
            </li>
            <li onClick={() => handleTabClick('incoming')} className={courseStatus === 'incoming' ? 'active' : ''}>
              Incoming
            </li>
            <li onClick={() => handleTabClick('finished')} className={courseStatus === 'finished' ? 'active' : ''}>
              Finished
            </li>
          </ul>
            <div className='course'>
              {courses[courseStatus].map((course, index) => (
                <div key={index} className='box'>
                  <h3>{course.name}</h3>
                  {course.status === 'completed' ? (
                    <p>{course.progress} - {course.status}</p>
                  ) : (
                    <p>{course.progress} - progress</p>
                  )}
                  {course.status === 'completed' ? (
                    <button className='box-button'>Completed</button>
                  ) : (
                    <button className='box-button'>Continue</button>
                  )}
                  {getCourseIcon(course.name)}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
    
    </>
  )
}
