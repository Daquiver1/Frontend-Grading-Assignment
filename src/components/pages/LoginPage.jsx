import { useState } from "react";
import "../../Styles/customStyles/LandPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // const [isNext, setIsNext] = useState(false);
  const [idValue, setIdValue] = useState("");
  const showPassword = () =>
    idValue ? (
      <input
        type="password"
        placeholder="Enter your password here"
        className="mt-5 rounded-full w-full h-14 placeholder-blue-900"
      />
    ) : (
      <p className="text-red-900 text-2xl font-serif">
        {"Id section cannot be empty"}
      </p>
    );

  const toggleId = (e) => {
    setIdValue(e.target.value);
  };
  return (
    <>
      <div className="flex justify-around place-items-center mt-56">
        <div className="flex gap-5 justify-center place-items-center">
          <img
            className="w-20 rounded-full"
            src="../../../public/icon-1.jpg"
            alt="Grade report logo"
          />
          <div className="flex justify-center flex-col gap-1 text-start">
            <p className="text-5xl font-serif text-blue-400">
              PEP&apos;S GRADE REPORT SYSTEM
            </p>
            <p className="text-3xl text-blue-300 italic">
              Your grade, your future
            </p>
          </div>
        </div>
        <div className="form-section">
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
            className="block bg-blue-500 w-full rounded-full text-2xl font-semi-bold mt-5"
            type="button"
          >
            Next
          </button>
          <p className="text-2xl mt-5 text-blue-300 italic">
            Forgot Password?
            <Link
              to="/PasswordReset"
              className="text-blue-500 ml-5 font-semi-bold"
            >
              Reset Password
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
