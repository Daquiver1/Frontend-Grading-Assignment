import SideBar from "./Sidebar"
import Chart from './Chart'
import { useState, useEffect } from "react"
import Gpa from "./GpaForDashboard"

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
      <div className={' relative  mt-4 justify-center ' + (width > 1199 ? " flex space-x-3 mx-4": "space-y-4 mx-4") }>
        <div className={"border p-3 " + (width < 1199 ? "flex justify-center" : "")}>
          {width}
          <Chart 
            sem={"First Semester"}
            subjects= {["" ,'MATH 123', 'DCIT103', 'DCIT102', 'MATH122', 'UGRC150',]}
            marks={[ 80, 90, 87, 75, 90, 100]}
            borderCol={'rgb(53, 162, 235)'}
            backgroundCol={'rgba(53, 162, 235, 0.5)'}
          /> 
        </div> 

        <div className={"border p-3 " + (width < 1199 ? "flex justify-center" : "")}>
          <Chart 
            sem={"Second Semester"}
            subjects= {["",'MATH126', 'MATH122', 'DCIT104', 'DCIT102', 'UGRC150']}
            marks={[ 70, 70, 97, 75, 80, 75]}
            borderCol={'rgb(255, 99, 132)'}
            backgroundCol={'rgba(255, 99, 132, 0.5)'}
          />  
        </div>   
      </div>

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
