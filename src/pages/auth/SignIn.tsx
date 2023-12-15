// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Link, useNavigate } from "react-router-dom";
import signin from "../../assets/images/SignIn.jpg";
import { useState } from "react";

import toast from "react-hot-toast";
import Button from "../../components/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex justify-between min-h-full  flex-1">
        <div
          style={{ flex: "3" }}
          className="relative hidden w-0  lg:block lg:h-screen"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover "
            src={
              "https://dcs.ug.edu.gh/img/gallery/PHOTO-2019-03-04-14-42-37.jpg"
            }
            alt="signin"
          />
        </div>
        <div
          style={{ flex: "3" }}
          className="flex flex-1 flex-col justify-around px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="text-left font-manrope font-semibold text-2xl mb-5">
                COMPSA-UG
              </h1>
            </div>
            <div>
              <h1 className="text-3xl font-manrope font-semibold">
                Login as a student
              </h1>
            </div>

            <div className="mt-10">
              <div>
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm leading-6 font-manrope text-gray-600"
                    >
                      Student ID
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                        placeholder="eg 112333343"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium font-manrope leading-6 text-gray-600"
                    >
                      Pin
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <Button
                      loading={false}
                      label="Sign in"
                      className="w-full font-manrope  rounded-md bg-primary  py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    />
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-sm flex justify-end leading-6">
                      <a
                        href="#"
                        className="underline font-manrope  hover:text-primary"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
