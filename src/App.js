
import React from 'react';
import './App.css';

class NewComponent extends React.Component {
  hideSidebar() {
    // Implement the logic to hide the sidebar
    console.log('Sidebar hidden');
  }

  render() {
    return (
      <ul className="sidebar">
        <li onClick={this.hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 -960 960 960" width={24}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
        <li><a href="aa">Home</a></li>
        <li><a href="bb">Academics</a></li>
        <li><a href="cc">About</a></li>
        <li><a href="dd">Undergraduate Programmes</a></li>
        <li><a href="ee">PhD Programmes</a></li>
        <li><a href="ff">Compssa</a></li>
        <li><a href="gg">Catalog</a></li>
        <li><a href="hh">Faculty</a></li>
        <li><a href="qq">Contact Us</a></li>
      </ul>
    );
  }
}

export default NewComponent;