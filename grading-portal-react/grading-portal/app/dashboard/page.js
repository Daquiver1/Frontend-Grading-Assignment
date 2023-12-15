import Link from "next/link";
import Image from "next/image";
import User from "../../assets/user.png";
import "../../app/style.css";

const Dashboard = () => {
  return (
    <div>
      <nav className="px-5 py-3 flex justify-between text-white  shadow-sm">
        <h1 className="text-base cursor-pointer font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
          <Link href="/">MGRS</Link>
        </h1>

        <ul className="flex items-center">
          <li className="mx-3 cursor-pointer">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-3 cursor-pointer">
            <Link href="/grade-report">Grade Report</Link>
          </li>
          <li className="mx-3 cursor-pointer">
            <Link href="/missing-grade">Missing Grade Form</Link>
          </li>
          <li className="mx-3 cursor-pointer">
            <Link href="/contact">Instructor Contact</Link>
          </li>
          {/* <li className="mx-3 cursor-pointer">
            <Link href="/help">Help</Link>
          </li> */}
          <li className="mx-3 px-4 py-2 bg-white text-black rounded-md cursor-pointer">
            <Link href="/login">Logout</Link>
          </li>
        </ul>
      </nav>

      <div>
        {/* dashboard cards */}
        <div className="flex justify-center items-center">
          <Image
            src={User}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[10vh] lg:w-[10vw] md:flex lg:flex"
          />
          <p className="text-xl mx-3 font-bold text-white">John Doe</p>
          <p className="text-xl mx-3 font-bold text-white">ID: 123456789</p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center m-5">
            <div className="flex justify-center items-center bg-white rounded-md shadow-md w-60 h-60">
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-black">5</p>
                <p className="text-xl text-black">Courses</p>
              </div>
            </div>
            <p className="text-xl font-bold mt-5">Semester One</p>
          </div>

          <div className="flex flex-col justify-center items-center m-5">
            <div className="flex justify-center items-center bg-white rounded-md shadow-md w-60 h-60">
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-black">3</p>
                <p className="text-xl text-black">Week 2</p>
              </div>
            </div>
            <p className="text-xl font-bold mt-5">Pending Assignment</p>
          </div>

          <div className="flex flex-col justify-center items-center m-5">
            <div className="flex justify-center items-center bg-white rounded-md shadow-md w-60 h-60">
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-black">3.95</p>
                <p className="text-xl text-black">Level 100</p>
              </div>
            </div>
            <p className="text-xl font-bold mt-5">Current GPA</p>
          </div>

          <div className="flex flex-col justify-center items-center m-5">
            <div className="flex justify-center items-center bg-white rounded-md shadow-md w-60 h-60">
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-black">11/13</p>
                <p className="text-xl text-black">Attendance</p>
              </div>
            </div>
            <p className="text-xl font-bold mt-5">Semester One</p>
          </div>
        </div>
      </div>
      {/* <div className="flex-row justify-center items-center">
        <div>
          <Image
            src={User}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
          />
          <div className="">
            <p className="text-3xl font-bold text-white">John Doe</p>
            <p className="text-xl font-bold text-white">ID: 123456789</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
