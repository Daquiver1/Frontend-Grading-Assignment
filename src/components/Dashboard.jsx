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
    <div className={width <770 ? "mb-20": ""}>
      <PerformanceForDashboard />

      <div className="flex mt-4 mx-5" >
        <div className={" p-3 w-[300px] border  flex justify justify-evenly items-center" + (width < 1199 ? "flex justify-center" : "")}>
          <Gpa />
          <div>
            <h1 className="font-bold text-3xl">GPA: 3.9</h1>
            <h2 className="font-bold text-gray-500 text-center ">First Class</h2>
          </div>
        </div> 

        <div className="border flex-1 justify-center flex items-center flex-col">
          <h1 className="font-bold text-xl text-center">Pending Reviews</h1>
          <h1>None</h1>
        </div>
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
