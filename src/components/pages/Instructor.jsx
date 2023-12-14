import { useState } from "react";
import Header from "./header";
import LoginFooter from "./LoginFooter";
import "../../Styles/utils.css";

const Instructor = () => {
  const [showLecturerDetails, setShowLecturerDetails] = useState(null);
  const [instructor, setInstructor] = useState([
    {
      name: "Mr. Samuel Abosi",
      email: "abosi@gmail.com",
      phone: "0551875432",
    },
    {
      name: "Mr.Daquiver Man",
      email: "daquiver@gmail.com",
      phone: "05545858432",
    },
    {
      name: "Mr. Mark Atta Mensah",
      email: "markatta@gmail.com",
      phone: "0274582247",
    },
    {
      name: "Mr.Peprah Dickson Daniel",
      email: "dickson@gmail.com",
      phone: "05975846698",
    },
    {
      name: "Mr. Festus Nti Berko",
      email: "festus@gmail.com",
      phone: "0551875432",
    },
  ]);

  // const setKeyValue = () => {
  //   setInstructor({...instructor, key: value})
  // }

  const setShow = (instructors) => {
    setShowLecturerDetails(instructors);
  };

  const showLecturerContact = () => {
    return (
      showLecturerDetails && (
        <div className="flex flex-col place-items-center align-middle leading-7">
          <a href={`mailto: ${showLecturerDetails.email}`}>
            {showLecturerDetails.email} ({showLecturerDetails.phone})
          </a>
        </div>
      )
    );
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="flex justify-center mb-5 slide-text">
          <p className="italic text-red-600 text-xl mb-5">
            Simply click on a lecturer&apos;s contact detail to send message
            <br />
            (Click lecturer name to show details)
          </p>
        </div>
        <div className=" flex justify-evenly">
          <div className="flex flex-col place-items-center align-middle leading-7">
            <p className="custom-header text-blue-950">Lecturer Name</p>
            <div>
              {instructor.map((instructors, index) => (
                <p
                  key={index}
                  onClick={() => setShow(instructors)}
                  className="cursor-pointer text-xl italic leading-loose"
                >
                  {instructors.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col place-items-center align-middle leading-7">
            <p className="custom-header text-blue-950">Contact Details</p>
            <div>{showLecturerContact()}</div>
          </div>
          <div className="cursor-pointer"></div>
        </div>
        <form>
          <div className="flex justify-center flex-col place-items-center gap-5">
            <p className="italic text-red-600 text-xl mb-5 slide-text">
              Cannot find lecturer name in the list above? Manually send Email
              below
            </p>
            <label
              htmlFor="email"
              className="text-xl italic custom-header text-blue-800"
            >
              Enter Email
            </label>
            <input type="email" className="rounded-md w-60 h-10" />
            <textarea
              name="message"
              id="message"
              placeholder="Type your message"
              className="text placeholder-italic w-72 h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-400 rounded-md w-24 text-slate-900 text-xl hover:bg-slate-900 hover:text-blue-400 duration-[0.2s]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default Instructor;
