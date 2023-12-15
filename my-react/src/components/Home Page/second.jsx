import React from "react";


const Second = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
      
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">UGGT</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Grades Data  Centrally
          </h1>
          <p>
            Welcome to UGGT, your dedicated companion on the academic
            journey! Our grade tracking website is designed with one goal in
            mind: to simplify and enhance your academic experience. Say goodbye
            to the stress of managing your grades scattered across various
            platforms; we provide a centralized hub for you to effortlessly
            track and monitor your academic progress. Whether you're a student
            aiming for excellence or a graduate keen on staying informed, our
            user-friendly interface offers real-time insights into grades,
            assignments, and overall performance. Dive into detailed analytics,
            set personalized goals, and celebrate your achievements along the
            way.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
