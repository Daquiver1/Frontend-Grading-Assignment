export const Login = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center w-full h-screen">
          <form className="bg-blue-800 max-w-[500px] w-full mx-auto p-8 px-20 rounded-lg">
            <h2 className="text-4xl font-bold text-white text-center">
              LOG IN
            </h2>
            <div className="flex flex-col text-white font-semibold py-2">
              <label>Student ID</label>
              <input
                className="rounded-lg bg-white-700 mt-2 p-2 focus:bg-blue-400 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-white font-semibold py-2">
              <label>Student Pin</label>
              <input
                className="rounded-lg bg-white-700 mt-2 p-2  focus:bg-blue-400 focus:outline-none"
                type="password"
              />
            </div>
            <button className="w-full my-5 py-2 bg-teal-400 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
