import { useState } from "react";
import "../../Styles/customStyles/LandPage.css";
import { Link } from "react-router-dom";
import Header from "./header";
import LoginFooter from "./LoginFooter";
import Bars from "../Bars";
import MinFooter from "./MinFooter";

const LoginPage = () => {
  // const [isNext, setIsNext] = useState(false);
  const [idValue, setIdValue] = useState("");
  const [verified, setVerified] = useState(false);

  const setVerification = () => {
    //Put logic for user verification here
  }
  //Set the logic for displaying the password input type when the id section !empty
  const showPassword = () =>
    idValue && idValue.length >= 8 ? (
      <input
        type="password"
        placeholder="Enter your password here"
        className="mt-5 rounded-full w-full h-14 placeholder-blue-900"
      />
    ) : (
      <p className="text-slate-900 text-lg italic">
        {"Id section cannot be empty and must be 8 characters"}
      </p>
    );

  const toggleId = (e) => {
    setIdValue(e.target.value);
  };
  return (
    <>
       <Bars></Bars>
      <Header></Header>
      <div className="flex justify-around place-items-center mt-56">
        <div className="flex gap-5 justify-center place-items-center">
          <img
            className="w-20 rounded-full"
            src="/icon-1.jpg"
            alt="Grade report logo"
          />
          <div className="flex justify-center flex-col gap-1 text-start">
            <p className="text-5xl font-serif text-blue-400">
              Pep&apos;S Grade Report System
            </p>
            <p className="text-3xl text-blue-300 italic">
              Your grade, your future
            </p>
          </div>
        </div>
        <div className="form-section bg-white bg-opacity-30 h-full rounded-md">
          <p className="text-2xl text-blue-500 font-semibold">Sign in here</p>
          <p className="text-xl text-blue-400">
            Without an Account?
            <Link to="/CreateAccount" className="text-blue-900 font-bold ml-5">
              Create An Account
            </Link>
          </p>
          <form action="" method="POST" className="mt-10">
            <input
              id="studID"
              name="studID"
              type="text"
              placeholder="Enter your student ID here"
              autoFocus
              onChange={toggleId}
              className="mt-5 rounded-full focus:border-red-900 w-full h-14 placeholder-blue-900 border-red-500"
            />
            <p>{showPassword()}</p>
          </form>
          <button
            className="block bg-blue-500 w-full rounded-full text-xl mt-5 hover-effect"
            type="button"
          >
            Next
          </button>
          <hr className="text-slate-900" />
          <p className="text-xl mt-5 text-blue-900 italic">
            Forgot Password?
            <p className="bg-blue-900 w-[2px] ml-5 h-6 inline-flex"></p>
            <Link to="/PasswordReset" className="text-blue-900 ml-5">
              Reset Password
            </Link>
          </p>
        </div>
      </div>
      <MinFooter></MinFooter>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default LoginPage;
