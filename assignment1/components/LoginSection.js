import Link from "next/link";
import Button from "./Button";

function LoginSection() {
  return (
    <>
      {/* <section className=" bg-black   p-3     w-80 m-10 flex items-center justify-center h-screen rounded-sm ">
        <div>
          <h1 className="mx-5 underline text-white  text-center">LOGIN</h1>
          <section className="">
            <div className="m-3 text-white">
              <p>STUDENT ID</p>
              <input
                type="number"
                class="form-control"
                placeholder="STUDENT ID"
              />
            </div>
            <div className="m-3 text-white">
              <p>PIN</p>
              <input
                type="number"
                id="password"
                name="password"
                placeholder="****"
              />
            </div>
            <button className="mt-5 flex justify-center items-center cursor-pointer text-white mb-3">
              <Link
                href="/dashboard"
                // onClick={Press}
                className="bg-neutral-600 px-16 py-5 rounded-full text-base font-bold hover:bg-neutral-400 cursor-pointer"
              >
                LOGIN
              </Link>
            </button>
            <Link href="#" className="text-white  text-center">
              {" "}
              forgot password?
            </Link>
          </section>
        </div>
      </section> */}
      <section className=" bg-black  h-screen  m-4  rounded-sm ">
        <h2 className="text-center">LOGIN</h2>
        <form max-w-md space-y-4>
          <div className="flex-col  justify-between justify-items-center items-center text-white">
            <div>
              <label htmlFor="courseName">STUDENT ID:</label>
              <input
                type="number"
                name="courseName"
                className="mt-1 p-2 border rounded-md w-full text-neutral-950 "
              />
            </div>
            <div>
              <label htmlFor="instructorName">PIN:</label>
              <input
                type="number"
                name="instructorName"
                className="mt-1 p-2 border rounded-md w-full text-neutral-900"
              />
            </div>

            <div>
              <Button text={"Login"} destination={"/dashboard"} />
            </div>
          </div>
          <Link href="/#" className="text-white mt-10 ">
            {" "}
            forgot password?{" "}
          </Link>
        </form>
      </section>
    </>
  );
}

export default LoginSection;
