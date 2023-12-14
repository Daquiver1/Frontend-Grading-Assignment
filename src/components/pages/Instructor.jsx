import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import LoginFooter from "./LoginFooter";

const Instructor = () => {
  const [showLecturer, setShowLecturer] = useState(true);
  const [instructor, setInstructor] = useState([
    {
      "Mr. Samuel Abosi": "abosi@gmail.com (0558756755)",
      "Mr. Sorli Agbo": "agbo@gmail.com (0574658445)",
      "Mr. Mark Atta Mensah": "markatta@gmail.com (0554987955)",
      "Mr. Daquiver": "daquiver@gmail.com (0556685978)",
      "Mr.Peprah Dickson": "dickson@gmail.com (0551875432)",
      "Mr. Festus Nti Berko": "festus@gmail.com (02482519755)",
      "Mr.Oduro Frank": "oduro@gmail.com (0248251959)",
    },
  ]);

  const setShow = () => {
    setShowLecturer(!showLecturer);
  };
  const lecturerName = () => {
    return (
      showLecturer &&
      instructor.map((value, index) => {
        <div key={index}>
          {value["Mr. Samuel Abosi"]}
          {value["Mr. Sorli Agbo"]}
          {value["Mr. Mark Atta Mensah"]}
          {value["Mr. Daquiver"]}
          {value["Mr.Peprah Dickson"]}
          {value["Mr. Festus Nti Berko"]}
          {value["Mr.Oduro Frank"]}
        </div>;
      })
    );
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className=" flex justify-evenly">
          <div className="flex flex-col place-items-center align-middle leading-7">
            <p>Lecturer Name</p>
            <p onClick={setShow}>Mr. Samuel Abosi</p>
            <p>Mr.Sorli Agbo</p>
            <p>Mr. Mark Atta Mensah</p>
            <p>Mr. Daquiver</p>
            <p>Mr. Peprah Dickson Daniel</p>
            <p>Mr. Festus Nti Berko</p>
            <p>Mr. Oduro Frank</p>
          </div>
          <div className="flex flex-col place-items-center align-middle leading-7">
            <p>Contact Details</p>
            {lecturerName}
          </div>
          <div className="cursor-pointer"></div>
        </div>
      </div>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default Instructor;
