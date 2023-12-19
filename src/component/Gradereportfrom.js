import React from "react";

const Gradereportfrom = () => {
  return (
    <section className="flex items-center justify-center w-full space-y-8">
      <form className="p-8 w-full md:w-[50rem] shadow-md rounded-2xl m-[5rem]">
        <div className="rounded-full">
          <h1 className="text-3xl text-center mb-5 text-[#e9c792] bg-[#232590] rounded-lg  p-3">Report Grade</h1>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="block text-gray-600">
              Course Name
            </label>
            <input
              type="text"
              className="form-control bg-gray-100 w-full h-[2.5rem] p-2"
              placeholder="Course Name"
              name="first Name"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="" className="block text-gray-600">
              Course Code
            </label>
            <input
              type="text"
              className="form-control bg-gray-100 w-full h-[2.5rem] p-2"
              placeholder="Course Code"
              name="first"
            />
          </div>
        </div>

        <label htmlFor="" className="block text-gray-600">
          Student mail
        </label>
        <input
          type="email"
          className="form-control bg-gray-100 w-full h-[2.5rem] p-2"
          placeholder="Student mail"
          name="Mail"
        />

        <label htmlFor="" className="block text-gray-600">
          Instructor Name
        </label>
        <input
          type="text"
          className="form-control bg-gray-100 w-full h-[2.5rem] p-2"
          placeholder="Name"
          name="Mail"
        />

        <label htmlFor="" className="block text-gray-600">
          Expected Grade
        </label>
        <input
          type="text"
          className="form-control bg-gray-100 w-full h-[2.5rem] p-2"
          placeholder="A+"
          name="Mail"
        />

        <label htmlFor="" className="block text-gray-600">
          Explanation Field
        </label>

        <textarea
          type="text"
          className="form-control block bg-gray-100 w-full h-[10rem]"
          placeholder="Message"
          name="Message"
        />

        <div className="flex justify-center items-center p-4 rounded-full bg-slate-300 mt-5">
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Gradereportfrom;
