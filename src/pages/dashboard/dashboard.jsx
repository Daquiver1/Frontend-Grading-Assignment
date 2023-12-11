import { DashboardData } from "../../data/index";

const Dashboard = () => {
  return (
    <div className="h-full">
      <section className="relative block h-[10vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black bg-cover bg-center" />
      </section>

      <section className="mx-auto max-w-screen-2xl container">
        <div className="flex flex-row space-x-4 justify-between">
          {DashboardData.map(({ color, title, icon }) => (
            <div className="rounded-lg"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
