import React from "react";
import { LabelInput } from "../components/inputs/InputLabel";

function AddGrade() {
  return (
    <div className=" w-full py-10 flex justify-center items-center">
      <form className=" shadow-2xl py-10 px-2 450px:px-10 w-full 450px:w-[11cm] flex justify-center items-center flex-col bg-white rounded-md">
        <p className=" uppercase font-bold mt-3 text-primary_blue">
          Report a missing grade
        </p>
        <div className="w-full flex flex-col gap-5 mt-10">
          <LabelInput label={"Course Name"} isRequired={true} />
          <LabelInput label={"Instructor Name"} isRequired={true} />
          <LabelInput label={"Expected Grade"} isRequired={true} />
          <textarea
            placeholder="Message"
            col
            required
            className=" focus:border-primary_blue border-[2px] outline-none px-2 py-1 rounded-md border-gray-400"
          />
          <button
            type="submit"
            className=" w-full bg-primary_blue py-2 font-medium text-white  rounded-md"
          >
            Report Grade
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddGrade;
