import GradeReport from './GradeReport'

function Dashboard() {
  return (
    <div>
      <h1 className="text-center ">
          Performance Overview
      </h1>

      <div className="flex justify-center py-20 text-white">
        <button className="bg-dark-purple p-10 w-[140px]  mr-10 rounded-[100%]">GPA 3.85</button>
        <button className="bg-dark-purple p-10 rounded-[100%] w-[140px] mr-10">24 Credits Hours</button>
        <button className="bg-dark-purple p-10 rounded-[100%]  w-[140px]">First Class</button>
      </div>

      <GradeReport />
    </div>
  )
}

export default Dashboard
