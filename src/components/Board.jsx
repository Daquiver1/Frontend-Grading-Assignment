import Stats from "./Stats";

import DashboardChart from "./DashboardChart";
const Board = () => {
  return (
    <div className="w-full">
      <div>
        <Stats />
      </div>
      <div className="flex flex-col gap-y-8 items-center md:flex-row w-full justify-between gap-x-8 md:items-start">
        <div className="min-w-96 w-full  md:w-full space-y-8">
          <DashboardChart />
          {/* <Table /> */}
        </div>
        <div className="w-/5">{/* <Reviews /> */}</div>
      </div>
    </div>
  );
};

export default Board;
