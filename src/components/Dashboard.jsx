import SideBar from "./Sidebar"
import Chart from './Chart'
import { useState, useEffect } from "react"
import Gpa from "./GpaForDashboard"
import { PerformanceForDashboard } from "./PerformanceForDashboard"


function Init(){
  let gpa = 3.8
  let classType = "Unknown"
  handleClass()


  function handleClass() {
    if (gpa >= 3.6 && gpa <= 4) {
      classType = "First Class"
    }
    else if (gpa <3.6 && gpa >= 3.0){
      classType = "Second Class Upper"
    }
    else if (gpa <3.0 && gpa >= 2.5){
      classType = "Second Class Lower"
    }
    else if (gpa >= 2.00 && gpa < 2.5){
      classType = "Third Class"
    }
    else if (gpa >= 1.00 && gpa < 2.0){
      classType = "Pass"
    }
    else if (gpa >= 0.00 && gpa < 1.0){
      classType = "Fail"
    }
  } 

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
      <h1 className="font-bold text-3xl mx-5 text-center p-3">Performance Overview</h1>
      <div className="border mx-5 p-2 pb-6">
        <PerformanceForDashboard />
      </div>

      {width > 1199 && <h1 className="font-bold text-3xl mx-5 text-center p-3">GPA AND REVIEWS </h1>}
      <div className="flex mt-4 mx-5" >
        <div className={" p-3 w-[300px] border  flex justify justify-evenly items-center" + (width < 1199 ? "flex justify-center" : "")}>
          <Gpa gpa={gpa}/>
          <div>
            <h1 className="font-bold text-3xl">GPA: {gpa}</h1>
            <h2 className="font-bold text-gray-500 text-center ">{classType}</h2>
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
