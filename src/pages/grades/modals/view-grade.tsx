import React, { useEffect, useState } from "react";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { FiUploadCloud } from "react-icons/fi";

import FormData from "form-data";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { current } from "@reduxjs/toolkit";
import { XIcon } from "@heroicons/react/solid";

function ViewGrade({ visible, onClose, data }: any) {
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [nameOfLecturer, setNameOfLecturer] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [grade, setGrade] = useState("");
  const [lecturerContact, setLecturerContact] = useState("");

  useEffect(() => {
    if (data) {
      setCourseCode(data.courseCode);
      setCourseName(data.courseName);
      setNameOfLecturer(data.nameOfLecturer);
      setCreditHours(data.creditHours);
      setGrade(data.grade);
      setLecturerContact(data.lecturerContact);
    }
  }, [data]);

  if (!visible) return null;

  return (
    <>
      <div className="fixed z-10 inset-0 bg-dark bg-opacity-60  flex justify-center items-center">
        <div className="bg-white flex flex-col h-4/5 w-9/12 relative rounded">
          <div className="flex items-center border-b-[1px] border-gray-300 py-4 px-7">
            <div className="">
              <h2 className="text-lg font-manrope font-500">View Grade</h2>
              <p className="text-gray-500 font-manrope text-sm">
                Details of the grade are show below
              </p>
            </div>
            <XIcon
              onClick={onClose}
              color="gray"
              className="absolute h-5 w-5 top-8 right-4 cursor-pointer"
            />
          </div>
          <div className="overflow-y-auto flex flex-col gap-y-10 pb-16  flex-1   px-7  mt-5 mb-5">
            <div className="flex flex-wrap gap-x-20 gap-y-8">
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-manrope"
                >
                  Course Code
                </label>
                <p className=" w-72 border-gray-300 text-base font-manrope rounded-md  py-2">
                  {courseCode}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-manrope"
                >
                  Course Name
                </label>
                <p className=" w-72 border-gray-300 text-base font-manrope rounded-md  py-2">
                  {courseName}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-manrope"
                >
                  Name of Lecturer
                </label>
                <p className=" w-72 border-gray-300 text-base font-manrope rounded-md  py-2">
                  {nameOfLecturer}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-manrope"
                >
                  Credit Hours
                </label>
                <p className=" w-72 border-gray-300 text-base font-manrope rounded-md  py-2">
                  {creditHours}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-manrope"
                >
                  Grade
                </label>
                <p className=" w-72 border-gray-300 text-base font-manrope rounded-md  py-2">
                  {grade}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-manrope"
                >
                  Lecturer Cotact
                </label>
                <p className=" w-72 border-gray-300 text-base font-manrope rounded-md  py-2">
                  {lecturerContact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewGrade;
