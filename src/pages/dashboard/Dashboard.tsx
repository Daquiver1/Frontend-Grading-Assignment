import { MyResponsiveBar } from "../../core-ui/data-visualizers/bar-chart";
import { MyResponsivePie } from "../../core-ui/data-visualizers/pie-chart";
import pieData from "../../core-ui/data-visualizers/pie-chart/data";
import barData from "../../core-ui/data-visualizers/bar-chart/data";
import { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

function Dashboard() {
  const [stats, setStats] = useState([
    {
      name: "Total Reported Grades",
      stat: "10",
    },
    {
      name: "Corrected Grades",
      stat: "3",
    },
    { name: "Number of Resits", stat: "0" },
    { name: "Pending Requests", stat: "0" },
  ]);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col pl-10 w-screen pr-16">
          {/* <Navbar2 /> */}
          <div className="pt-10">
            <h1 className="text-3xl font-bold">Hi, Welcome Back Asiedu</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 lg:flex-row lg:justify-between  lg:max-w-full lg:gap-x-3 lg:overflow-x-auto pt-10 gap-y-5">
        {stats.map((item) => (
          <div
            key={item.name}
            className="bg-white md:min-w-[270px] h-36 border rounded-lg shadow-md p-4"
          >
            <div className="flex items-center justify-between">
              <dt className="text-sm font-normal text-gray-500">{item.name}</dt>
              <AiOutlineEllipsis className="w-5 h-5" color="#757575" />
            </div>
            <dd className="mt-1 pt-5 pb-3 flex items-baseline justify-between">
              <div className="flex items-baseline text-3xl font-bold text-black">
                {item.stat}
              </div>
            </dd>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
