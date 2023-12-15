import React from "react";

import { Img } from "components";
import Bar from "components/Bar";

const FrameSixPage = () => {
  return (
    <>
      <div className="h-[1234px] mx-auto relative w-full">
        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Bar className="!sticky !w-[319px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_group14.svg')" }}
              >
                <Img
                  className="h-[72px]"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup_One"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 w-full">
                <div className="bg-white-A700 flex flex-col gap-[34px] items-center justify-end mb-[750px] mt-4 p-[35px] sm:px-5 w-full">
                  <Img
                    className="h-[45px] mt-[7px]"
                    src="images/img_vector_gray_900_45x386.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[19px]"
                    src="images/img_vector_blue_gray_700_01_19x455.svg"
                    alt="vector_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start p-2 md:px-5 right-[2%] w-[74%]">
          <div className="flex flex-col items-start justify-start mb-[87px] w-[96%] md:w-full">
            <Img
              className="h-7 ml-0.5 md:ml-[0]"
              src="images/img_maximize.svg"
              alt="maximize"
            />
            <Img
              className="h-[49px] mt-[33px]"
              src="images/img_vector_blue_gray_700_01_49x725.svg"
              alt="vector_Two"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[75px] w-[98%] md:w-full">
              <Img
                className="h-[17px]"
                src="images/img_vector_gray_900_17x283.svg"
                alt="vector_Three"
              />
              <Img
                className="h-[17px]"
                src="images/img_vector_gray_900_17x283.svg"
                alt="vector_Four"
              />
              <Img
                className="h-[17px]"
                src="images/img_vector_gray_900_17x283.svg"
                alt="vector_Five"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] w-full">
              <Img
                className="h-[135px]"
                src="images/img_vector_blue_gray_700_01_135x301.svg"
                alt="vector_Six"
              />
              <Img
                className="h-[135px]"
                src="images/img_vector_blue_gray_700_01_135x301.svg"
                alt="vector_Seven"
              />
              <Img
                className="h-[135px]"
                src="images/img_vector_blue_gray_700_01_135x301.svg"
                alt="vector_Eight"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[74px] w-[98%] md:w-full">
              <Img
                className="h-[17px]"
                src="images/img_vector_gray_900_17x283.svg"
                alt="vector_Nine"
              />
              <Img
                className="h-[17px]"
                src="images/img_vector_gray_900_17x283.svg"
                alt="vector_Ten"
              />
              <Img
                className="h-[17px]"
                src="images/img_vector_gray_900_17x283.svg"
                alt="vector_Eleven"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] w-full">
              <Img
                className="h-[135px]"
                src="images/img_vector_blue_gray_700_01_135x301.svg"
                alt="vector_Twelve"
              />
              <Img
                className="h-[135px]"
                src="images/img_vector_blue_gray_700_01_135x301.svg"
                alt="vector_Thirteen"
              />
              <Img
                className="h-[135px]"
                src="images/img_vector_blue_gray_700_01_135x301.svg"
                alt="vector_Fourteen"
              />
            </div>
            <div className="bg-gray-50 flex flex-col items-center justify-start mt-[66px] p-8 sm:px-5 rounded-[16px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[3px] w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start md:mt-0 mt-1.5">
                  <Img
                    className="h-[19px]"
                    src="images/img_vector_gray_900_19x197.svg"
                    alt="vector_Fifteen"
                  />
                  <Img
                    className="h-[17px]"
                    src="images/img_vector_blue_gray_700_01_17x567.svg"
                    alt="vector_Sixteen"
                  />
                </div>
                <Img
                  className="h-12"
                  src="images/img_group_blue_800.svg"
                  alt="group"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameSixPage;
