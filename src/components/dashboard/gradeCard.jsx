import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function GradeCard({ name, code, dateTaken }) {
  return (
    <div className="px-2 w-[6.5cm] py-2 bg-white shadow-xl flex flex-col rounded-md">
      <span className="text-[13px] font-normal text-secondary">{name}</span>
      <span className="text-center mt-2 font-bold text-3xl text-primary_blue">
        {code}
      </span>
      <span className=" mt-3 flex justify-end items-center text-secondary font-light text-[12px] gap-1">
        <FaRegCalendarAlt size={14} />
        {dateTaken}
      </span>
    </div>
  );
}

export default GradeCard;
