import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import QuestionBox from "../components/dashboard/QuestionBox";
import { LabelInput } from "../components/inputs/InputLabel";

function Faq() {
  return (
    <div className="w-full px-3 mt-5">
      <h1 className=" text-3xl font-bold text-primary_blue">
        Help and Support
      </h1>
      <p className=" py-1 flex flex-row gap-2  px-2 bg-blue-200 mt-2 rounded-md font-normal text-blue-900">
        <span className="">
          <FaCircleInfo size={22} className=" " />
        </span>
        <span className=" text-[14px]">
          This is your help and support page. You can find answers to frequently
          asked questions here. If you need further assistance, you can contact
          us using the form below.
        </span>
      </p>

      <h1 className=" mt-10 text-2xl font-bold text-primary_blue">FAQ</h1>

      <div className=" w-full py-2 flex flex-col">
        <QuestionBox />
      </div>

      <div className=" flex justify-center items-center mt-10">
        <form className=" shadow-2xl py-10 px-2 450px:px-10 w-full  flex justify-center items-center flex-col bg-white rounded-md">
          <p className=" uppercase font-bold mt-3 text-primary_blue">
            Do you have an issue?
          </p>
          <div className="w-full flex flex-col gap-5 mt-10">
            <LabelInput label={"Student ID"} isRequired={true} />
            <LabelInput label={"Email"} isRequired={true} />
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
              Submit 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Faq;
