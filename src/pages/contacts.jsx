import React from "react";
import lectures from "../assets/data/lecture";
import { FaCircleInfo } from "react-icons/fa6";

function Contacts() {
  return (
    <div className=" w-full px-3 z-10">
      <h1 className=" mt-7 text-3xl font-bold text-primary_blue">
        Contact Instructor
      </h1>
      <p className=" py-1 flex flex-row gap-2  px-2 bg-blue-200 mt-2 rounded-md font-normal text-blue-900">
        <span className="">
          <FaCircleInfo size={22} className=" " />
        </span>
        <span className=" text-[14px]">
          Contact your  instructor for enquiries and clarification.
        </span>
      </p>

      <div class="relative overflow-x-auto z-10 mt-10">
        <table class="w-full text-sm z-10 text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Instructor's Name
              </th>
              <th scope="col" class="px-6 py-3">
                Instructor's Phone
              </th>
              <th scope="col" class="px-6 py-3">
                Instructor's Email
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {lectures.map((l) => (
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {l.name}
                </th>
                <td class="px-6 py-4">{l.email}</td>
                <td class="px-6 py-4">{l.phone_number}</td>
                <td class="px-6 py-4">
                  <a href={`mailto:${l.email}`}>
                    <button className=" flex flex-row gap-2 bg-primary_blue px-2 py-1 rounded-md text-white font-medium">
                      Send Email
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
