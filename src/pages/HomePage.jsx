import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Student from "../assets/images/Student.svg";
import { FaArrowRight } from "react-icons/fa6";
import feature from "../assets/data/features";

function HomePage() {
  return (
    <div className=" w-full">
      <header className=" w-full py-5 px-3 flex justify-start items-start">
        <img src={Logo} className=" w-[1.3cm]" />
        <span className=" text-5xl font-bold text-primary_blue">UG</span>
      </header>
      <section id="hero" className=" w-full py-2 flex flex-col items-center">
        <h1 className=" text-center font-[900] text-5xl 500px:text-6xl px-4 leading-[3.5rem]">
          Seamlessly <strong className=" text-primary_blue">Track</strong>
          <br /> and <strong className=" text-primary_blue">Report</strong>
          <br /> your Grades
        </h1>
        <p className=" font-semibold text-[20px] mt-10 text-center px-3">
          We provide Effortless grade monitoring, reporting, and direct
          communication with instructors.
        </p>
        <Link
          to={"/dashboard"}
          className=" flex flex-row gap-3 items-center px-3 py-2 bg-primary_blue rounded-md mt-14 text-white font-bold text-[19px]"
        >
          <span>Start Tracking Grades</span>
          <FaArrowRight size={22} />
        </Link>
        <img src={Student} className=" w-10/12 500px:w-5/12 mt-5" />
      </section>
      {feature.map((f) => (
        <section className=" flex justify-center items-center flex-col mt-24">
          <h2 className=" text-4xl font-extrabold text-primary_blue">
            {f.headline}
          </h2>
          <p className=" font-normal text-[16px] mt-2 text-center px-3">
            {f.description}
          </p>
          <img src={f.image} className=" w-10/12 500px:w-8/12 mt-5" />
          <Link
            to={f.path}
            className=" mt-5 flex flex-row gap-3 items-center px-3 py-2 bg-primary_blue rounded-md  text-white font-bold text-[19px]"
          >
            <span>{f.LinkText}</span>
            <FaArrowRight size={22} />
          </Link>
        </section>
      ))}

      <footer className=" mt-20 px-3 text-center font-bold text-gray-500 border-t-2 flex py-2 w-full bg-white justify-center items-center">
              Computer Science: Missing Grade Reporting System <br />
              Copyright @ 2023
        </footer>
    </div>
  );
}

export default HomePage;
