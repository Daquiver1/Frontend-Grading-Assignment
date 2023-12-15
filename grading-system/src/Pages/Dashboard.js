import React from 'react'
import SideBar from '../Component/sidebar'


function Dashboard() {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <h1>Overview Page</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard