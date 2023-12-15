import { useState, useEffect } from "react";
import balme from "../assets/balme.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { EyeSlash, Eye } from "iconsax-react";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => navigate("/dashboard"), 3000);
  };

  return (
    <>
      <div className="h-screen w-screen lg:flex ">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-64 w-auto cursor-pointer"
              src="https://ugelectiveshelper.netlify.app/assets/img/logo.png"
              alt="Your Company"
              onClick={() => navigate("/")}
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Student ID
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Enter your ID"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6 focus:outline-stone-600"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    PIN
                  </label>
                  <div className="text-sm">
                    <a
                      href="mailto:josephkafui27@gmail.com"
                      className="font-semibold text-blue-600 hover:text-orange-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 flex w-full rounded-md relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your PIN"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6 focus:outline-stone-600"
                  />
                  {showPassword ? (
                    <Eye
                      size="17"
                      className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <EyeSlash
                      size="17"
                      className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={` flex w-full justify-center rounded-md bg-stone-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600  ${
                    isLoading ? "bg-stone-700" : null
                  }`}
                >
                  {isLoading ? <div className="spinner "></div> : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-6/12 h-screen relative hidden lg:block  ">
          <img
            className="absolute inset-0 object-cover w-full h-screen"
            src={balme}
            alt="login-earth"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
