import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const navigation = [
  { name: 'Home', href:"/index" },
  { name: 'Instructor Contact Page', href: '#' },
  { name: 'Help and Support Page', href: '#' },
  { name: 'Company', href: '#' },
]


const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useState("");
  console.log({
    signin
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await signin(email, password);
      // The logic for setting cookies and redirecting should be handled inside the signin function,
      // which updates the state of the userInfo object.
    } catch (error) {
      console.log(error);
      console.log(error)
    }
  };

  return (
    <div className="w-full sm:h-screen flex flex-row h-auto">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 h-[80px] bg-[#C0C0C0] fixed w-full" aria-label="Global" >
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <img
                    className="h-[100px] w-auto"
                    src={require("../assets/uglogo.png")}
                    alt=""
                    />
                </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </nav>
      </header>

      <div className="h-full w-[1000px] bg-[#e0f2fe] pl-[64px] pt-[64px] sm:inline-block hidden">
        <div className="h-full w-full flex flex-col text-[#805420]">
          <h2 className="text-[28px] mt-[-30px] mr-[80px] text-[#05014a] font-semibold">
            UG Grade Report
          </h2>
          <p className="text-[20px] mt-2 text-[#05014a]">
            University of Ghana Academic Record System
          </p>
          <img src={require("../assets/nice.png")} className="h-full" />
        </div>
      </div>
      <div className="w-full h-screen sm:px-[200px] flex flex-col justify-center px-5">
        <form>
          <h2 className="sm:text-[28px] text-[25px]">Sign into your account</h2>
          <div className="w-full flex flex-row gap-x-[20px] mt-3"></div>
          <br />
          <InputField
            placeholder="Student ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <InputField
            placeholder="PIN"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="h-[30px] flex items-center ">
            {password.length <= 5 && password.length !== 0 && (
              <p className="text-sm text-red-600">
                Password should be five characters
              </p>
            )}
          </div>
          <br />
          <button
            onClick={onSubmitHandler}
            className="bg-[#06b6d4] text-white w-full h-[40px] rounded-lg"
          >
            Login
          </button>
        </form>
        <span className="text-sm text-right mt-[28px]">
          <Link to="/reset" className="text-[#000000]">
            Forgot your pin?
          </Link>
        </span>
        <div className="w-full flex items-center text-sm py-4 gap-x-8">
          <hr className="w-full" />
          or
          <hr className="w-full" />
        </div>
        <div className="w-full flex place-content-center gap-x-4">
          <button className="border-[1px] border-neutral-400 rounded-lg px-5 py-2 hover:bg-[#e0f2fe]">
            <img src={require("../assets/Google.png")} className="w-6" />
          </button>
          <button className="border-[1px] border-neutral-400 rounded-lg px-5 py-2 hover:bg-[#e0f2fe]">
            <img src={require("../assets/Apple Logo.png")} className="w-6" />
          </button>
          <button className="border-[1px] border-neutral-400 rounded-lg px-5 py-2 hover:bg-[#e0f2fe]">
            <img src={require("../assets/twitterblack.png")} className="w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn