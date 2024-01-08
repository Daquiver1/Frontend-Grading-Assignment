import SideBar from "./Sidebar"
import Chart from './Chart'
import { useState, useEffect } from "react"
import Gpa from "./GpaForDashboard"
import { PerformanceForDashboard } from "./PerformanceForDashboard"

function Init(){
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth)
      console.log(width)
    }
    
    window.addEventListener("resize", watchWidth)
  }, [])

  return (
    <div>
      <PerformanceForDashboard />

      <div className={"border p-3 " + (width < 1199 ? "flex justify-center" : "")}>
        <Gpa />
      </div> 
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <SideBar render={<Init />}/>
    </div>
  )
}

export default Dashboard
