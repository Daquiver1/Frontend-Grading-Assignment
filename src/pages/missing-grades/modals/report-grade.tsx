import React, { useState } from "react";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { FiUploadCloud } from "react-icons/fi";

import FormData from "form-data";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "@heroicons/react/solid";

function ReportGrade({ visible, onClose, refetch }: any) {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [nameOfLecturer, setNameOfLecturer] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanaition, setExplanaition] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);

  if (!visible) return null;
  const handleSubmit = async () => {};

  return (
    <>
      <div className="fixed z-10 inset-0 bg-dark bg-opacity-60  flex justify-center items-center">
        <div className="bg-white flex flex-col h-4/5 w-9/12 relative rounded">
          <div className="flex items-center border-b-[1px] border-gray-300 py-4 px-7">
            <div className="">
              <h2 className="text-lg font-manrope font-500">
                Report missing grade
              </h2>
              <p className="text-gray-500 font-manrope text-sm">
                Provide the details to report a missing grade
              </p>
            </div>
            <XIcon
              onClick={onClose}
              color="gray"
              className="absolute h-5 w-5 top-8 right-4 cursor-pointer"
            />
          </div>
          <div className="overflow-y-auto flex pb-10  gap-y-3 flex-1 flex-wrap gap-x-20  px-7  mt-5 mb-5">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="fullName" className="block text-sm font-manrope">
                Course Code
              </label>
              <input
                className="border w-72 border-gray-300 text-base font-manrope rounded-md pl-4 py-2"
                type="text"
                required={true}
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="e.g. DCIT 205"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="fullName" className="block text-sm font-manrope">
                Course Name
              </label>
              <input
                className="border w-72 border-gray-300 text-base font-manrope rounded-md pl-4 py-2"
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="e.g Data Structures and Algorithms"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="fullName" className="block text-sm font-manrope">
                Name of Lecturer
              </label>
              <input
                className="border w-72 border-gray-300 text-base font-manrope rounded-md pl-4 py-2"
                type="text"
                value={nameOfLecturer}
                onChange={(e) => setNameOfLecturer(e.target.value)}
                placeholder="e.g. Dr. John Doe"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="fullName" className="block text-sm font-manrope">
                Credit Hours
              </label>
              <input
                className="border w-72 text-base font-manrope border-gray-300 rounded-md pl-4 py-2"
                type="text"
                value={creditHours}
                onChange={(e) => setCreditHours(e.target.value)}
                placeholder="e.g. 3"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="fullName" className="block text-sm font-manrope">
                Expected Grade
              </label>
              <input
                className="border w-72 text-base font-manrope border-gray-300 rounded-md pl-4 py-2"
                type="text"
                value={expectedGrade}
                onChange={(e) => setExpectedGrade(e.target.value)}
                placeholder="Enter expected grade"
              />
            </div>
          </div>

          <div className="overflow-y-auto flex pb-10  gap-y-3 flex-1 flex-wrap gap-x-20  px-7  mt-5 mb-5">
            <div className="h-[1.5px] w-full bg-gray-300"></div>

            <div className="flex flex-col flex-1 gap-y-2">
              <label htmlFor="fullName" className="block text-sm font-manrope">
                Explanation
              </label>
              <textarea
                className="border w-full h-full border-gray-300 text-base font-manrope rounded-md pl-4 py-2"
                required={true}
                value={explanaition}
                onChange={(e) => setExplanaition(e.target.value)}
                placeholder="Content"
              />
            </div>
          </div>
          <div className="flex items-center justify-end border-t-[1px] border-gray-300 py-4 px-5">
            <button
              type="button"
              className="inline-flex justify-center px-4 md:px-16 py-2 text-sm font-medium text-primary bg-white border border-primary rounded-md hover:bg-gray-50 focus:outline-none"
              onClick={onClose}
            >
              cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="inline-flex justify-center px-4 md:px-16 py-2 ml-3  text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
            >
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportGrade;
