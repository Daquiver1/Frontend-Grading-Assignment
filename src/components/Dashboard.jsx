import SideBar from "./Sidebar"

function Init(){
  return (
    <div>
      <h1 className="text-center font-bold text-[32px] text-dark-purple">
          Performance Overview
      </h1>

      <div className="flex justify-center py-20 text-white">
        <button className="bg-dark-purple p-10 w-[140px]  mr-10 rounded-[100%]">GPA 3.85</button>
        <button className="bg-dark-purple p-10 rounded-[100%] w-[140px] mr-10">24 Credits Hours</button>
        <button className="bg-dark-purple p-10 rounded-[100%]  w-[140px]">First Class</button>
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
