import React from 'react'
import { SideNav } from './SideNav'
import { MainSession } from './MainSession'
import "./dashboard.css"

function Dashboard() {
  return (
    <>
      <div className="Dashboard">
      
          <SideNav/>
          <MainSession/>
      </div>
    </>
  )
}

export default Dashboard