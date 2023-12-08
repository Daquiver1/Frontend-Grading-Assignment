
import React, { useState } from 'react';
import './Dashboard.css'

const Dashboard = () => {
  
  const [isActive, setIsActive] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSidebarButtonClick = () => {
    setIsActive(true);
  };

  const handleCloseButtonClick = () => {
    setIsActive(false);
    setTimeout(() => {
      window.alert(
        "Oh No! What did you do? Now you have to refresh to open the app again"
      );
    }, 500);
  };

  const handleMaximizeButtonClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      document.getElementById('container').style.width = '100%';
      document.getElementById('container').style.height = '100%';
    } else {
      setIsMinimized(true);
      document.getElementById('container').style.width = '90%';
      document.getElementById('container').style.height = '90%';
    }
  };

  const handleMinimizeButtonClick = () => {
    document.getElementById('container').style.transform = 'scale(0)';
    setTimeout(() => {
      window.alert(
        "The app is minimized but cannot be opened again because the virtual codepen macos crashed!"
      );
    }, 500);
  };

  return (
    <>
      {isActive && (
        <div className="container" id="container">
          <header>
            <section className="window--buttons">
              <div className="window__close" onClick={handleCloseButtonClick}></div>
              <div className="window__minimize" onClick={handleMinimizeButtonClick}></div>
              <div className="window__maximize" onClick={handleMaximizeButtonClick}></div>
            </section>
          </header>

          <aside>
            <div>
              <input type="text" placeholder="Search" /><br />
              <button
                className={isActive ? 'active' : ''}
                id="sidebar-btn"
                onClick={handleSidebarButtonClick}
              >
                Discover
              </button>
              <button id="sidebar-btn">Arcade</button>
              <button id="sidebar-btn">Create</button>
              <button id="sidebar-btn">Work</button>
              <button id="sidebar-btn">Play</button>
              <button id="sidebar-btn">Develop</button>
              <button id="sidebar-btn">Categories</button>
              <button id="sidebar-btn">Updates</button>
            </div>

            <div className="profile">
              <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg" alt="Profile Pic" className="profile--pic" />
              <h1>Jimmy Donaldson</h1>
            </div>
          </aside>

          <div className="content">
          <div className="ideas">
          <div className="idea">
            <p>MASTER YOUR MAC</p>
            <h1>Make a great<br /> handoff</h1>
            <p>Work seamlessly across devices</p>
          </div>

          <div className="idea">
            <p>GET STARTED</p>
            <h1>Apps optimised for mac with M1</h1>
            <p>Work seamlessly across devices</p>
          </div>
        </div>

        <section className="updates">
          <h1>Updates</h1>

          <div className="update update-1">
            <div className="updt-left">
              <img src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png" alt="powerpoint icon" />
              <h1>Microsoft Powerpoint</h1>
            </div>

            <div className="buttons">
              <a href="https://bit.ly/3gdGvT8" target="_warning">
                <button>Update</button>
              </a>
            </div>
          </div>

          <div className="update">
            <div className="updt-left">
              <img src="https://img.icons8.com/color/452/microsoft-word-2019--v2.png" alt="word icon" />
              <h1>Microsoft Word</h1>
            </div>

            <div className="buttons">
              <button style={{ color: 'lime', cursor: 'default' }}>Updated</button>
            </div>
          </div>

          <div className="update">
            <div className="updt-left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/788px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" alt="lightroom icon" />
              <h1>Adobe Lightroom</h1>
            </div>

            <div className="buttons">
              <a href="https://bit.ly/3gdGvT8" target="_warning">
                <button>Update</button>
              </a>
            </div>
          </div>

          <div className="update">
            <div className="updt-left">
              <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png" alt="xcode icon" />
              <h1>Xcode</h1>
            </div>

            <div className="buttons">
              <a href="https://bit.ly/3gdGvT8" target="_warning">
                <button>Update</button>
              </a>
            </div>
          </div>
        </section>

        <section className="trending">
          <h1>Trending</h1>

          <div className="grid">
            <span className="grid__app">
              <h1>Kindle</h1>
              <button>GET</button>
            </span>

            <span className="grid__app">
              <h1>Slac</h1>
              <button>GET</button>
            </span>

            <span className="grid__app">
              <h1>Magnet</h1>
              <button>₹699</button>
            </span>

            <span className="grid__app">
              <h1>CotEditor</h1>
              <button>GET</button>
            </span>

            <span className="grid__app margin">
              <h1>Twitter</h1>
              <button>GET</button>
            </span>

            <span className="grid__app margin">
              <h1>Notability</h1>
              <button>₹799</button>
            </span>

            <span className="grid__app margin">
              <h1>NDTV</h1>
              <button>GET</button>
            </span>

            <span className="grid__app margin">
              <h1>Rummy</h1>
              <button>₹179</button>
            </span>
          </div>
        </section>

        <section className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Report Error</a>
          <a href="#">Parent's guide to Mac app store</a>
        </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
