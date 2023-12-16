import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Sidebar() {
  useEffect(() => {
    const scriptModule = document.createElement('script');
    scriptModule.type = 'module';
    scriptModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

    const scriptNoModule = document.createElement('script');
    scriptNoModule.setAttribute('nomodule', '');
    scriptNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

    document.head.appendChild(scriptModule);
    document.head.appendChild(scriptNoModule);

    return () => {
      document.head.removeChild(scriptModule);
      document.head.removeChild(scriptNoModule);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="dots">
        <img src='images/dots.png' alt='dots' />
      </div>
      <div className="profile">
        <ion-icon name="person-outline"></ion-icon>
      </div>
      <ul>
        <span>Analytics</span>
        <li>
          <a href="#">
            <ion-icon name="home-outline"></ion-icon><p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="pie-chart-sharp"></ion-icon><p>Reports</p>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="insights"></ion-icon> <p>Insights</p>
          </a>
        </li>
      </ul>
      <ul>
        <span>Content</span>
        <li className="noti">
          <a href="#">
            <ion-icon name="notification-outline"></ion-icon><p>Notification </p>
          </a>
        </li>
        <li className="likes">
          <ion-icon name="heart-outline"></ion-icon> <p>Likes</p>
        </li>
        <li>
          <ion-icon name="wallet-outline"></ion-icon> <p>Wallets</p>
        </li>
      </ul>
      <ul>
        <span>Custom</span>
        <li className="switch-theme">
          <a href="#">
            <ion-icon name="loug-out-outline"></ion-icon><p>Logout</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
